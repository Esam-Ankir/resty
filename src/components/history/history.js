// // import React from 'react'

// // export default function history(props) {
// //     let newData = props.data[props.i];
// //     return (
// //         <div>
// //             <pre >{newData.data ? JSON.stringify(newData.data, undefined, 2) : null}</pre>
// //         </div>
// //     )
// // }

export default function History(props) {
    let arr = [];
    let hover = false;
    const mouseOn = () => { hover = true };
    const mouseLeave = () => { hover = false };

    for (let i = 1; i < props.history.length; i++) {
        if (props.history[i][0].url !== ""){
            
            arr.push({
                url: props.history[i][0].url,
                method: props.history[i][0].method,
                result: props.history[i][0].result
            })
        }
    }
    const handler = (e, method, url, result) => {
        hover = true;
        props.clicked(true);
        const formData = {
            url: url,
            method: method,
            result: result
        };
        props.handleHistory(formData);
        props.clicked(true);
    }
    return (
        <div>
            <h2>History Area</h2>
            <div>
                {
                    arr.map((data0, index) => {
                        if (data0.method)
                            return (
                                <div key={index} onClick={(e) => { handler(e, data0.method, data0.url, data0.data) }}>
                                    <p>method: {data0.method}</p>
                                    <p>url: {data0.url}</p>
                                    <p>======================================================================</p>
                                    
                                </div>
                            )
                    })}

            </div>
        </div>

    )
}
