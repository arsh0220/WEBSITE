
import React, { useState } from "react";

function TextEditor() {
    const [text, setText] = useState("");

    const UpperCase = () => {
        setText(text.toUpperCase());
    };

    const LowerCase = () => {
        setText(text.toLowerCase());
    };

    const Change = (e) => {
        setText(e.target.value);
    };

    return (
        <div style={{ margin: "20px" }}>
            <h2>Enter your thoughts here</h2>
            <textarea
                style={{ width: "100%", height: "150px", marginBottom: "10px" }}
                value={text}
                onChange={Change}
                placeholder="Enter your text here"
            ></textarea>
            <div>
                <button onClick={UpperCase} style={{ margin: "5px" }}>
                    Convert to Uppercase
                </button>
                <button onClick={LowerCase} style={{ margin: "5px" }}>
                    Convert to Lowercase
                </button>
            </div>
        </div>
    );
}

export default TextEditor;
