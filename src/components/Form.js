import React, { useState } from 'react'

const Form = (props) => {
  const [text, setText] = useState("")

  const handleClick4 = ()=>{
    navigator.clipboard.writeText(text);
  }

  const handleClick = ()=>{
    setText(text.toUpperCase())
  }

  const handleClick3 = ()=>{
    setText("");
  }

  const handleClick2 = ()=>{
    setText(text.toLowerCase())
  }

  const handleChange = (event)=>{
    setText(event.target.value)
  }

  return (
    <div>
        <h1>{props.title}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleChange} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mh-3" onClick={handleClick}>Uppercase</button>
        <button className="btn btn-primary mx-3" onClick={handleClick2}>Lowercase</button>
        <button className="btn btn-primary mx-3" onClick={handleClick3}>Clear Text</button>
        <button className="btn btn-primary mx-3" onClick={handleClick4}>Copy Text</button>

        <div className="container my-5">
          <h1>Your text summary</h1>
          <p>Total Words: {text.split(" ").length-1}</p>
          <p>Total characters: {text.length}</p>
        </div>
    </div>
  );
};

export default Form;

Form.defaultProps = {
    title: "Enter your text below:"
}