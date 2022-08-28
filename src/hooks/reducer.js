/* eslint-disable default-case */
const initialState = []
export default function historyReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case "state":
            const url = payload.req.url;
            const method = payload.req.method;
            return ([...state, [{ url: url, method: method, result: payload.data }]]);
    }
}

export function add(finalState) {
    return {
        type: "state",
        payload: finalState,

    }
}