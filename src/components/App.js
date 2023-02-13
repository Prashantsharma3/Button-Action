import React, {Component, useState} from "react";
import "./../styles/App.css";
function MyButton() {
  // Declare a state variable called "showText" and initialize it to false
  const [showText, setShowText] = useState(false);

  return (
    <div>
      <button id="click" onClick={() => setShowText(!showText)}>
        Click Me
      </button>
      {showText && (
        <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
      )}
    </div>
  );
}

export default MyButton;

