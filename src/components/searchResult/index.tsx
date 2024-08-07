import React from "react";

function MyResults(props) {
  return (
    <div className="result">
      <img className="img" src={props.img} alt="" />
      <div className="container">
        <h1 className="text">{props.title}</h1>
        <p className="text">{props.price}</p>
      </div>
    </div>
  );
}

export { MyResults };
