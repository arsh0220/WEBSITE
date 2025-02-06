
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <>
            <div style={LogIn}>
                <h1>Login</h1>
                <div style={form}>
                    <label htmlFor="First-name"> USERNAME:</label>
                    <input type="text" id="first-name" name="first-name" />
                    <br/>
                    <label htmlFor="password"> PASSWORD:</label>
                    <input type="password" id="password" name="password" />
                </div>
                <div>
                    <Link to="/home">
                        <button style={buttonStyle}>Login</button>
                    </Link>
                </div>
                <div>
                <h3>Don't have an Account</h3>
                <Link to="/signup">
                    <button style={buttonStyle}>Signup</button>
                </Link>
                </div>
            </div>
        </>
    );
};

const LogIn = {
    textAlign: "center",
    height: "20-rem",
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
    marginTop:"10px",
};
export default Login;
