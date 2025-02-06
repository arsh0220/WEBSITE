import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });

    const navigate = useNavigate(); // For redirecting after signup

    // Handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        console.log("Form Data:", e);
        e.preventDefault(); // Prevents page reload

        // Password confirmation check
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        try {
            const response = await fetch("http://localhost:5000/api/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    email: formData.email,
                    password: formData.password,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                alert("Signup successful!");
                navigate("/home"); // Redirect to home page
            } else {
                alert(data.message || "Signup failed!");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Something went wrong!");
        }
    };

    return (
        <div style={styles.container}>
            <h1>Signup</h1>
            <form onSubmit={handleSubmit} style={styles.form}>
                <label>First Name:</label>
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />

                <label>Last Name:</label>
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />

                <label>Email :</label>
                <input type="text" name="email" value={formData.email} onChange={handleChange} required />

                <label>Password:</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} required />

                <label>Confirm Password:</label>
                <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />

                <button type="submit" style={styles.button}>Sign Up</button>
            </form>
        </div>
    );
};

const styles = {
    container: {
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
    },
    form: {
        display: "flex",
        flexDirection: "column",
        width: "300px",
        gap: "10px",
    },
    button: {
        color: "white",
        backgroundColor: "red",
        padding: "10px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
    },
};

export default Signup;