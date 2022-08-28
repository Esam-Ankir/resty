import React, { useState, useEffect, useReducer } from "react";
import "./app.scss";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Form from "./components/form/form";
import Results from "./components/results/results";
import History from './components/history/history';
import axios from "axios";

import historyReducer, { add } from './hooks/reducer';

// function historyReducer(state = initialState, action) {
//   const { type, payload } = action;
//   switch (type) {
//     case 'ADD_HISTORY':
//       const history = [
//         ...state, payload
//       ];
//       return history;
//     case 'CLEAR_HISTORY':
//       return initialState;
//     default:
//       return state;
//   }
// }

// const addAction = (payLoad) => {
//   return { type: 'ADD_HISTORY', payload: payLoad };
// };

// const clearAction = () => {
//   return { type: 'CLEAR_HISTORY', payload: '' };
// };

// const initialState = [];
const initialState = [
  {
    url: "",
    method: "",
    result: [],
  },
];

function App() {
  const [history, dispatch] = useReducer(historyReducer, initialState);
  
  const [data, setData] = useState({
    header: "header",
    count: 0,
    response: "",
  });
  
  const [req, setReq] = useState({
    method: "get",
    // url: "https://swapi.dev/api/people/1/",
  });
  const [isHistory, setIsHistory] = useState(false);

  ////
  // useEffect(() => { setData() }, [req]);

  // useEffect(() => {
  //   if (data) {

  //     let x = {
  //       requestParams: user.requestParams,
  //       data: data
  //     }
  //     dispatch(addAction(x))
  //   }
  // }, [data])

  // const [showData, setShowDate] = useState(false);
  // const [id, setId] = useState(null)

  // const callApi = (req) => {
  useEffect(() => {
    if (isHistory === false) {
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

          const finalState = {
            req: req,
            data: data,
          };
          console.log("dispatch", data);
          dispatch(add(finalState));
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

          const finalState = {
            req: req,
            data: data,
          };
          console.log("dispatch", data);
          dispatch(add(finalState));

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

          const finalState = {
            req: req,
            data: data,
          };
          console.log("dispatch", data);
          dispatch(add(finalState));

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

          const finalState = {
            req: req,
            data: data,
          };
          console.log("dispatch", data);
          dispatch(add(finalState));

        })
        .catch((e) => {
          setData({ response: "loading" })
          console.log(e);
        });
    }
  }
  setReq(req);
  setData(data);
}, [req, isHistory]);

const callApi = (params) => {
  setReq(params);
};

const handleHistory = (history) => {
  let historyData = {
    url: history.url,
    method: history.method,
  };
  setReq(historyData);
  setData(history.data);
};
const clicked = (props) => {
  setIsHistory(props);
}

return (
  <>
    <Header />
    <div>

      <Form callApi={callApi} clicked={clicked} />
      <History history={history} handleHistory={handleHistory} clicked={clicked}></History>
    </div>
    <div>
      <div data-testid="Request-Method">Request Method: {req.method}</div>
      <div data-testid="urlDiv">URL: {req.url}</div>

    </div>
    <Results data={data}></Results>

    {/* {<Results data={data}></Results>}
      {state ?
        <div>
          {
            state.map((e, i) => {
              return (
                <div key={i}>
                  <p>
                    {e.requestParams.method}
                  </p>
                  <p>
                    {e.requestParams.url}
                  </p>
                  <button onClick={() => {
                    setShowDate(!showData);
                    setId(i)
                  }}>data</button>
                </div>
              )
            })
          }
          {
            showData ? <History data={state} i={id} /> : null
          }
        </div> : null
      } */}
    <Footer />
  </>
);
}
export default App;
