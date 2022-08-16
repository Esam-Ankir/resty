import React, { useState, useEffect } from "react";
import "./app.scss";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Form from "./components/form/form";
import Results from "./components/results/results";
import axios from "axios";

function App() {
  const [data, setData] = useState({
    header: "header",
    count: 0,
    response: "",
  });
  const [req, setReq] = useState({
    method: "get",
    // url: "https://swapi.dev/api/people/1/",
  });

  useEffect(() => { setData() }, [req]);

  const callApi = (req) => {

    if (req.method === "get") {
      axios
        .get(req.url)
        .then((data) => {
          const formData = {
            Headers: data.headers,
            count: data.data.length,
            results: data.data,
          };
          console.log(data);
          setData(formData);
        })
        .catch((e) => {
          setData({ response: "loading" })
          console.log(e);
        });
    }
    if (req.method === "post") {
      axios
        .post(req.url, req.body)
        .then(function (data) {
          const formData = {
            header: data.headers,
            count: 1,
            data: data.data,
          };
          setData(formData);
        })
        .catch((e) => {
          setData({ response: "loading" })
          console.log(e);
        });
    }
    if (req.method === "delete") {
      axios
        .delete(req.url)
        .then((data) => {
          const formData = {
            header: data.headers,
            count: 1,
            data: data.data,
          };
          setData(formData);
        })
        .catch((e) => {
          setData({ response: "loading" })
          console.log(e);
        });
    }
    if (req.method === "put") {
      axios
        .put(req.url, req.body)
        .then((data) => {
          const formData = {
            header: data.headers,
            count: 1,
            data: data.data,
          };
          setData(formData);
        })
        .catch((e) => {
          setData({ response: "loading" })
          console.log(e);
        });
    }
    setReq(req);
  };
  return (
    <>
      <Header />
      <Form callApi={callApi} />
      <div>Request Method: {req.method}</div>
      <div>URL: {req.url}</div>
      {<Results data={data}></Results>}
      <Footer />
    </>
  );
}
export default App;
