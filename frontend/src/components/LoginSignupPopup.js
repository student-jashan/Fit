import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const LoginSignupPopup = ({ show, handleClose }) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("login");

  // Login state
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // Signup state
  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupRole, setSignupRole] = useState("user");

  // Message state
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // ---------------- Signup Handler ----------------
  const handleSignup = async (e) => {
    e.preventDefault();
    setMessage("");
    if (!signupName || !signupEmail || !signupPassword) {
      setMessage("All fields are required ❌");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("http://localhost:5001/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: signupName,
          email: signupEmail,
          password: signupPassword,
          role: signupRole,
        }),
      });

      const data = await response.json();
      setLoading(false);

      if (response.ok) {
        setMessage("Signup successful ✅ Please login.");
        setSignupName("");
        setSignupEmail("");
        setSignupPassword("");
        setSignupRole("user");
        setActiveTab("login"); // Switch to login tab
      } else {
        setMessage(data.message || "Signup failed ❌");
      }
    } catch (err) {
      setLoading(false);
      console.error("Signup error:", err);
      setMessage("Something went wrong ❌");
    }
  };

  // ---------------- Login Handler ----------------
  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage("");
    if (!loginEmail || !loginPassword) {
      setMessage("Email and password are required ❌");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("http://localhost:5001/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: loginEmail, password: loginPassword }),
      });

      const data = await response.json();
      setLoading(false);

      if (response.ok) {
        localStorage.setItem("user", JSON.stringify(data.user));
        setMessage("Login successful 🎉 Redirecting...");

        // Redirect based on role
        if (data.user.role === "admin") navigate("/AdminDashboard");
        else navigate("/UserDashboard");
      } else {
        setMessage(data.message || "Invalid credentials ❌");
      }
    } catch (err) {
      setLoading(false);
      console.error("Login error:", err);
      setMessage("Something went wrong ❌");
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{activeTab === "login" ? "Login" : "Signup"}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {message && <p style={{ color: message.includes("successful") ? "green" : "red" }}>{message}</p>}

        {activeTab === "signup" && (
          <Form onSubmit={handleSignup}>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" value={signupName} onChange={e => setSignupName(e.target.value)} required />
            </Form.Group>

            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" value={signupEmail} onChange={e => setSignupEmail(e.target.value)} required />
            </Form.Group>

            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" value={signupPassword} onChange={e => setSignupPassword(e.target.value)} required />
            </Form.Group>

            <Form.Group>
              <Form.Label>Role</Form.Label>
              <Form.Select value={signupRole} onChange={e => setSignupRole(e.target.value)}>
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </Form.Select>
            </Form.Group>

            <Button type="submit" className="mt-3" variant="primary" disabled={loading}>
              {loading ? "Processing..." : "Signup"}
            </Button>
          </Form>
        )}

        {activeTab === "login" && (
          <Form onSubmit={handleLogin}>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" value={loginEmail} onChange={e => setLoginEmail(e.target.value)} required />
            </Form.Group>

            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" value={loginPassword} onChange={e => setLoginPassword(e.target.value)} required />
            </Form.Group>

            <Button type="submit" className="mt-3" variant="success" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </Button>
          </Form>
        )}
      </Modal.Body>

      <Modal.Footer>
        <Button variant="link" onClick={() => setActiveTab(activeTab === "login" ? "signup" : "login")}>
          {activeTab === "login" ? "Don't have an account? Signup" : "Already have an account? Login"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default LoginSignupPopup;
