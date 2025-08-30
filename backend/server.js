import express from "express";
import cors from "cors";
import mysql from "mysql2";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

// ---------------- Config ----------------
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const buildPath = path.join(__dirname, "../frontend/build");

// Middleware
app.use(cors({ origin: "http://localhost:3000" })); // React dev server
app.use(express.json()); // Parse JSON body

// ---------------- Database ----------------
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "", // your MySQL password
  database: "fit",
});

db.connect((err) => {
  if (err) {
    console.error("❌ Database connection failed:", err);
    process.exit(1);
  }
  console.log("✅ Connected to MySQL database");
});

// ---------------- Signup ----------------
// Example in Node.js + Express
app.post("/signup", (req, res) => {
  console.log("Request body:", req.body); // Debug: check if data is received
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields required ❌" });
  }
  // Simulate saving to DB
  res.status(201).json({ message: "Signup successful ✅" });
});


// ---------------- Login ----------------
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required ❌" });
  }

  const query = "SELECT id, name, email, role FROM account WHERE LOWER(email) = LOWER(?) AND password = ?";
  db.query(query, [email, password], (err, results) => {
    if (err) {
      console.error("❌ Login DB query error:", err);
      return res.status(500).json({ message: "DB query failed", error: err });
    }

    if (results.length === 0) {
      return res.status(401).json({ message: "Invalid email or password ❌" });
    }

    res.status(200).json({ message: "Login successful ✅", user: results[0] });
  });
});

// ---------------- Test DB ----------------
app.get("/test-db", (req, res) => {
  db.query("SELECT * FROM account", (err, results) => {
    if (err) return res.status(500).json({ message: "DB fetch failed", error: err });
    res.json(results);
  });
});

// ---------------- Serve React build ----------------
app.use(express.static(buildPath));
app.get("*", (req, res) => res.sendFile(path.join(buildPath, "index.html")));

// ---------------- Start server ----------------
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
