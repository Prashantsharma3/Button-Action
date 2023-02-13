import React, {Component, useState} from "react";
import "./../styles/App.css";
const Assignment = () => {
  // Initialize the state with false, meaning the paragraph is not visible
  const [isVisible, setIsVisible] = useState(false);

  // On button click, toggle the state of isVisible
  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      {/* Render button with id "click" */}
      <button id="click" onClick={handleClick}>
        Click Me
      </button>
      {/* Conditionally render the paragraph based on isVisible state */}
      {isVisible && (
        <p id="para">
          Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy
        </p>
      )}
    </div>
  );
};

export default Assignment;
