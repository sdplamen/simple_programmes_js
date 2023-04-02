// inline conditiona
const number = 101;
const toPrint = (number % 2 == 1) 
? "This is an odd number." :
 "This is an even number.";
console.log(toPrint);

// inline conditiona
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
// 
import React from "react";
import ReactDOM from "react-dom";

const App = (props) => {

 return (
  <div>
   <h2>Cloth, Sink, and Below - Household Appliances</h2>
   {
    props.loggedIn &&
    <p>Welcome, dear customer!</p>
   }
  </div>
 );
}
 

ReactDOM.render(
 <App loggedIn={true} />,
 document.getElementById("root")
);
