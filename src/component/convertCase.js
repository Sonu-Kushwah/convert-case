import React,{useState} from 'react'

function ConvertCase() {
    const [text,setText]=useState("");
    const handleChange=(e)=>{
      setText(e.target.value);
    }
    
    //upper case
    const upperCase=()=>{
        let uper=text.toUpperCase();
        setText(uper);     
    }
    //lower case
    const lowerCase=()=>{
        let lower=text.toLowerCase();
        setText(lower);
    }
    //clear
    const clear=()=>{
        setText("");
    }
    //capital case
    const capital=()=>{
        let lower=text.toLowerCase();
        let first=text.charAt(0).toUpperCase();
        let result=first+lower.slice(1);
        setText(result);
    }
  return (
    <>
     <div className='container'>
      <div className='converCase'>
       <h4>Convert Case App</h4>
       <textarea onChange={handleChange} value={text} rows="7" cols="50" placeholder='Type or Pase Your Content here'>
       </textarea>
       <div className='action'>
        <button onClick={()=>lowerCase()}>lower case</button>
        <button onClick={()=>upperCase()}>UPPER CASE</button>
        <button onClick={()=>{capital()}}>Capital Case</button>
        <button onClick={()=>{clear()}}>Clear</button>
       </div>
      </div>
     </div>
    </>
  )
}

export default ConvertCase