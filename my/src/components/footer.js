
import React from "react";

const Footer = () => {
    return (
        <footer style={footerStyle}>
            <p>Contact us:</p>
            <p>Email: abc@gmail.com</p>
            <p>Phone: 0123 456 7890</p>
        </footer>
    );
};
const footerStyle = {
    backgroundColor: "#333",
    color: "#fff",
    textAlign: "center",
    padding: "13px",
    marginTop: "auto",
};

export default Footer;
