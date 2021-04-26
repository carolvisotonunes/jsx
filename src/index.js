// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

if (module.hot) {
  module.hot.accept();
}

  const buttonText = { text: 'Click me' };
  const labelText = 'Enter name:';

// Create a react component
const App = () => {
  return (
    <div>
      <label className="label" htmlFor="name">
         {labelText}
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "red", color: "yellow" }}>
         {buttonText.text}
      </button>
    </div>
  );
};

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));