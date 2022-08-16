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
          <input name="url" type="text" id="inputId" onInput={handleInput} />
          <button type="submit" > GO! </button>
        </label>
        <label >
          <button id="get" onClick={() => { setMethod("get") }}  >GET </button>
          <button id="post" onClick={() => { setMethod("post") }}>POST</button>
          <button id="put" onClick={() => { setMethod("put") }}>PUT</button>
          <button id="delete" onClick={() => { setMethod("delete") }} >DELETE</button>
        </label>
      </form>
      {method === "post" || method === "put" ? (<textarea onInput={handleForm} placeholder="type here" ></textarea>) : null}
    </>
  );
}

export default Form;
