import React, { useState } from 'react'

const TextForm = (props) => {
  const[text,setText]=useState("Enter your text here")
  const handleUpclick=()=>{
    // console.log("up was clicked ")
    setText(text.toUpperCase());
    props.showAlert("Converted to upper case","success")
  }
  const handleCopyclick=()=>{
    let text=document.getElementById('myBox')
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Coppied","success")
  }
  const handleClearclick=()=>{
    // console.log("up was clicked ")
    setText("");
    props.showAlert("Texted Cleard","success")
  }
  const handleRemoveclick=()=>{
    // console.log("up was clicked ")
    setText(text.split(/[ ]+/).join(" "))
    // setText(text.replace(/ +/g,' '));//an other method .
    props.showAlert("Remove Extera Spaces ","success")
  }
  const handleLowerclick=()=>{
    // console.log("up was clicked ")
    setText(text.toLowerCase());
    props.showAlert("Converted to Lower case","success")
  }
  const handleOnchange=(event)=>{
    // console.log("oNchange  was clickedu ")
    setText(event.target.value)
    // props.showAlert("Converted to upper case","success")
  }
  return (
 <>
 <div className="container my-3" style={{color:props.mode==='light'?'#042743':'white'}}>
  <h1>{props.heading}</h1>
  <div className="mb-3">
  {/* <label htmlFor="myBox" className="form-label">Example textarea</label> */}
  <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}} onChange={handleOnchange}id="myBox" rows="8"></textarea>
 </div>
 <button className="btn btn-primary mx-2" onClick={handleUpclick}>Convert to Upper case</button>
 <button className="btn btn-primary mx-2" onClick={handleLowerclick}>Convert to Lower case</button>
 <button className="btn btn-primary mx-2" onClick={handleCopyclick}>Copy Text</button>
 <button className="btn btn-primary mx-2" onClick={handleRemoveclick}>Remove Extera space</button>
 <button className="btn btn-primary mx-2" onClick={handleClearclick}>Clear</button>
 </div>
 <div className="container my-3" style={{color:props.mode==='light'?'#042743':'white'}}>
 <h1>Your text summary</h1>
 <p>{text.split(" ").length-1} : Words and {text.length} :Characters</p>
 <p>{text.length>0?text:"Enter something to preview it here"}</p>
 </div>
 </>

  )
}

export default TextForm
