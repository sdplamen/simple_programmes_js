const number = 101;
const toPrint = (number % 2 == 1) 
? "This is an odd number." :
 "This is an even number.";
console.log(toPrint);

\\ ----
import React from "react";
import ReactDOM from "react-dom";

const App = () => {
 const number = 48;

 const print = (number % 2 == 1) 
  ? "This is an odd number."
  : "This is an even number.";

 return <p>{print}</p>;
}

ReactDOM.render(
 <App />,
 document.getElementById("root")
);
