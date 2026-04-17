const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); // 1. Import Mongoose

const app = express();
app.use(cors());
app.use(express.json());

// 2. Connect to MongoDB (This creates a DB named 'myLoginDB' automatically)
mongoose.connect('mongodb://127.0.0.1:27017/myLoginDB')
  .then(() => console.log("✅ Connected to MongoDB!"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

// 3. Define the User Schema (The "Blueprint")
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

// --- ROUTES ---

// SIGNUP: Save a new user to the database
app.post('/api/signup', async (req, res) => {
  try {
    const { email, password } = req.body;
    // Create a new user instance
    const newUser = new User({ email, password });
    await newUser.save(); // This saves it permanently
    res.json({ message: "User registered in DB!" });
  } catch (err) {
    res.status(400).json({ error: "Email already exists or error occurred" });
  }
});

// LOGIN: Find a user in the database
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    // Search the DB for a matching user
    const user = await User.findOne({ email, password });

    if (user) {
      res.json({ success: true, message: "Found in database!" });
    } else {
      res.status(401).json({ error: "Invalid credentials" });
    }
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

app.listen(5000, () => console.log("🚀 Backend running on port 5000"));