import React from 'react';
import {useState} from 'react';
import './form.scss';

function Form (props) {
const [method,setMethod]=useState("get");
const [apiUrl,setUrl]=useState("https://pokeapi.co/api/v2/pokemon");
const[body,setBody]=useState("");
 const handleSubmit = e => {
    e.preventDefault();

    const formData = {
      method:method,
      url:apiUrl ,
      body:body,
    };
    props.handleApiCall(formData);
  }
const inputHandler=e=>{
  let x=document.getElementById("u").value;
  console.log("url= ",x)
  setUrl(x);
}
  const handlebody=e=>{
    let x=document.getElementById("body").value;
    console.log(x);
    setBody(x);
  }
    return (
      <>
        <form onSubmit={handleSubmit}>
          <label >
            <span>URL: </span>
            <input name='url' type='text' id="u" onInput={inputHandler} data-testid="url"/>
            <button type="submit" data-testid="go">GO!</button>
          </label>
          <label className="methods">
            <span id="get" onClick={()=>{setMethod("get");}} data-testid="get">GET</span>
            <span id="post" onClick={()=>{setMethod("post");}}>POST</span>
            <span id="put" onClick={()=>{setMethod("put");}}>PUT</span>
            <span id="delete" onClick={()=>{setMethod("delete");}}>DELETE</span>
          </label>
         
        </form>
        {method=="post"||method=="put"?
        <textarea id="body" onInput={handlebody} placeholder='name=!!'  ></textarea>:null
}
        
      </>
    );
  
}


export default Form;