export const getData = (payload) => {
    return { type: "ADD_TO_STORE_DATA", payload:payload}
}

export const addToList = (payload) => {
    return { type: "ADD_TO_LIST_DATA", payload:payload}
}