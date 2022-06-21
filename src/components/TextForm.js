import React, { useState } from "react";

export default function TextForm(props) {

    const handleClick = () => {
        console.log("clicked")
        setText(text.toUpperCase())
    }

    const handleChange = (event) => {
        console.log("clicked");
        setText(event.target.value);
    }
  const [text, setText] = useState("Enter text here");


  return (
    <div>
      <div className="mb-3">
        <h1>{props.heading}</h1>
        <textarea className="form-control" value={text} onChange={handleChange} id="myBox" rows="10"></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleClick}>Convert to Uppercase</button>
    </div>
  );
}
