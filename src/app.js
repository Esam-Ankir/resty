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
  const [divData, setdivData] = useState({
    method: "get",
    url: "https://pokeapi.co/api/v2/pokemon",
  });

  useEffect(() => {
    setData({ status: "loading" });
  }, [divData]);

  const callApi = (requestParams) => {
    if (requestParams.method == "get") {
      axios
        .get(requestParams.url)
        .then((data) => {
          const formData = {
            header: data.headers,
            count: data.data.length,
            data: data.data,
          };
          setData(formData);
        })
        .catch((e) => {
          console.log(e);
        });
    }
    if (requestParams.method == "post") {
      axios
        .post(requestParams.url, requestParams.body)
        .then(function (data) {
          const formData = {
            header: data.headers,
            count: 1,
            data: data.data,
          };
          setData(formData);
        })
        .catch((e) => {
          console.log(e);
        });
    }
    if (requestParams.method == "delete") {
      axios
        .delete(requestParams.url)
        .then((data) => {
          const formData = {
            header: data.headers,
            count: 1,
            data: data.data,
          };
          setData(formData);
        })
        .catch((e) => {
          console.log(e);
        });
    }
    if (requestParams.method == "put") {
      axios
        .put(requestParams.url, requestParams.body)
        .then((data) => {
          const formData = {
            header: data.headers,
            count: 1,
            data: data.data,
          };
          setData(formData);
        })
        .catch((e) => {
          console.log(e);
        });
    }
    setdivData(requestParams);
  };
  return (
    <>
      <Header />
      <Form handleApiCall={callApi} />
      <div data-testid="method">Request Method: {divData.method}</div>
      <div data-testid="urlDiv">URL: {divData.url}</div>
      {<Results data={data}></Results>}
      <Footer />
    </>
  );
}
export default App;
