const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Required for Frontend-Backend communication

const app = express();

// Middleware
app.use(cors()); // Allows your React app (port 5173) to call this API (port 5000)
app.use(express.json()); // Parses incoming JSON data

// 1. Database Connection Logic
// Use 'mongodb' (the Docker service name) if available, otherwise fallback to localhost
const mongoURI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/myLoginDB';

mongoose.connect(mongoURI)
    .then(() => console.log("✅ Connected to MongoDB successfully"))
    .catch(err => console.error("❌ MongoDB connection error:", err));

// 2. User Schema & Model
const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

// 3. API Routes
// Added '/api' prefix to match your Frontend request URL
app.post('/api/signup', async (req, res) => {
    try {
        const { email, password } = req.body;
        
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const newUser = new User({ email, password });
        await newUser.save();
        
        console.log(`👤 New user created: ${email}`);
        res.status(201).json({ message: "User created successfully!" });
    } catch (error) {
        console.error("Error during signup:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

app.post('/api/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email, password });

        if (user) {
            console.log(`🔑 Login successful: ${email}`);
            res.status(200).json({ message: "Login successful!" });
        } else {
            res.status(401).json({ message: "Invalid credentials" });
        }
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
});

// 4. Start Server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`🚀 Backend running on port ${PORT}`);
});