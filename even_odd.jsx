import React from "react";
import ReactDOM from "react-dom";

const App = () => {
 const number = 97;

 let response;
  if (number % 2 == 1) {
  response = "odd";
 } else {
  response = "even";
 }

 return (
  <div>
   <h1>Even-Odd Detector</h1>
   <p>
    The number {number} is an <strong>{response}</strong> number.
   </p>
  </div>
 );
};

ReactDOM.render(<App />, document.getElementById("root"));
