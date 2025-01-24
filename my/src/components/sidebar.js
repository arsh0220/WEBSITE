
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div style={sidebarStyle}>
            <h2>WELCOME TO THE WEBSITE</h2>
            <ul style={listStyle}>
                <li style={listItemStyle}><Link to="/home" style={linkStyle}>Home</Link></li>
                <li style={listItemStyle}><Link to="/about" style={linkStyle}>About</Link></li>
                <li style={listItemStyle}><Link to="/services" style={linkStyle}>Services</Link></li>
                <li style={listItemStyle}><Link to="/login" style={linkStyle}>LogIn</Link></li>
            </ul>
        </div>
    );
};

const sidebarStyle = {
    width: "250px",
    backgroundColor: "#333",
    color: "#fff",
    padding: "8px",
    display: "flex",
    flexDirection: "column",
    height: "94vh",
    position: "sticky",
    top: "0",
};

const listStyle = {
    listStyleType: "none",
    padding: "0",
};

const listItemStyle = {
    padding: "10px",
    borderBottom: "1px solid #444",
};

const linkStyle = {
    textDecoration: "none",
    color: "#fff",
};

export default Sidebar;
