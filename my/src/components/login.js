import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState(""); 
    const [password, setPassword] = useState(""); 
    const[email, setEmail] = useState("");   
    const [loading, setLoading] = useState(false); 
    const navigate = useNavigate(); 

    const handleLogin = async (e) => {
        e.preventDefault(); 
        setLoading(true); 

        try {
            const response = await fetch("http://localhost:5000/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json(); 

            if (response.ok) {
                localStorage.setItem("userToken", data.token); 
                navigate("/home"); 
            } else {
                alert(data.message || "Invalid credentials");
            }
        } catch (error) {
            console.error("Login failed:", error);
            alert("Something went wrong. Please try again.");
        } 
    };

    return (
        <div style={LogIn}>
            <h1>Login</h1>
            <form style={form} onSubmit={handleLogin}>
                <label>USERNAME:</label>
                <input 
                    type="text" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    required
                />
                <label>Email:</label>
                <input 
                    type="text" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required
                />

                <label>PASSWORD:</label>
                <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required
                />

                <button type="submit" style={buttonStyle} disabled={loading}>
                    {loading ? "Logging in..." : "Login"}
                </button>
            </form>

            <h3>Don't have an Account?</h3>
            <button onClick={() => navigate("/signup")} style={buttonStyle}>Signup</button>
        </div>
    );
};

// Inline Styles
const LogIn = {
    textAlign: "center",
    height: "20rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
};
const form = {
    display: "flex",
    flexDirection: "column",
};
const buttonStyle = {
    color: "red",
    marginTop: "10px",
};

export default Login;
