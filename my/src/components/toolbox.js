import React, { useState } from "react";

function TextEditor() {
    const [text, setText] = useState(""); // State to hold the input text

    // Convert to Uppercase
    const UpperCase = () => {
        let upperText = "";
        for (let i = 0; i < text.length; i++) {
            const charCode = text.charCodeAt(i);
            if (charCode >= 97 && charCode<= 122) {
                upperText += String.fromCharCode(charCode - 32);
            } else {
                upperText += text[i];
            }
        }
        setText(upperText); // Update state with uppercase text
    };

    const LowerCase = () => {
        setText(text.toLowerCase()); 
    };
    const removeExtraSpace = () => {
        const space = text.replace(/\s+/g, " ").trim(); 
        setText(space);
    };

    const handleChange = (e) => {
        setText(e.target.value); 
    };

    return (
        <div style={{ margin: "20px" }}>
            <h2>Enter your thoughts here</h2>
            <textarea
                style={{ width: "100%", height: "150px", marginBottom: "10px" }}
                value={text}
                onChange={handleChange}
                placeholder="Enter your text here"
            ></textarea>
            <div>
                <button onClick={UpperCase} style={{ margin: "5px" }}>
                    Convert to Upper
                </button>
                <button onClick={LowerCase} style={{ margin: "5px" }}>
                    Convert to Lowercase
                </button>
                <button onClick={removeExtraSpace} style={{ margin: "5px" }}>
                    Remove Extra Spaces
                </button>
            </div>
        </div>
    );
}

export default TextEditor;
