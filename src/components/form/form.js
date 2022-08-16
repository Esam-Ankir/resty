import React, { useState } from "react";
import "./form.scss";

function Form(props) {
  const [method, setMethod] = useState("get");
  const [url, setUrl] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.callApi({ method, url, body });
  };
  const handleInput = (e) => {
    setUrl(document.getElementById("inputId").value);
  };
  const handleForm = (e) => {
    setBody(document.getElementById("body").value);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label className="url">
          <span>URL:</span>
          <input name="url" type="text" id="inputId" data-testid="url" onInput={handleInput} />
          <button type="submit" data-testid="go"> GO! </button>
        </label>
        <label >
          <span id="get" onClick={() => { setMethod("get") }} data-testid="get" >GET </span>
          <span id="post" onClick={() => { setMethod("post") }}>POST</span>
          <span id="put" onClick={() => { setMethod("put") }}>PUT</span>
          <span id="delete" onClick={() => { setMethod("delete") }} >DELETE</span>
        </label>
      </form>
      {method === "post" || method === "put" ? (<textarea onInput={handleForm} placeholder="type here" ></textarea>) : null}
    </>
  );
}

export default Form;
