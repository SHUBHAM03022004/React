import React, { useState } from "react";

export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked"+text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success")
    }

    const handleLoClick = ()=>{
      console.log("Lowercase was clicked"+text);
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to lowercase!", "success")
    }

    const handleClearClick = ()=>{
      let newText = '';
      setText(newText);
      props.showAlert("Text cleared!", "success")
    }

    const handleOnChange = (event)=>{
        console.log("On change")
        setText(event.target.value);
    }

    const handleCopy = ()=>{
      var text = document.getElementById("myBox")
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copy to Clipboard!", "success")
    }

    const handleExtraSpaces = ()=>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(' '));
      props.showAlert("Remove extra spaces!", "success")
    }

  const [text, setText] = useState("");
  //   setText("djhvndjndkgkd");

  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          style={{backgroundColor: props.mode==='dark'?'gray':'white', color: props.mode==='dark'?'white':'#042743'}}
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>
        Convert to UpperCase
      </button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>
        Convert to LowerCase
      </button>
      <button className="btn btn-primary mx-2" onClick={handleClearClick}>
        Reset
      </button>
      <button className="btn btn-primary mx-2" onClick={handleCopy}>
        Copy to Clipboard
      </button>
      <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
        Remove Extra Spaces
      </button>
    </div>

    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").filter(word => word.trim() !== "").length} word and {text.length} characters</p>
      <p>{0.008*text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0 ? text:"Enter something to preview it here"}</p>
    </div>
    </>
  );
}
