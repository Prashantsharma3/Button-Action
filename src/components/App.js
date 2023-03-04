import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button id="click" onClick={handleClick}>
        Click Me
      </button>
      {isVisible && (
        <p id="para">
          Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy
        </p>
      )}
    </div>
  );
};

export default App;

