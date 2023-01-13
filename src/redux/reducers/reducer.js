export const getDataReducer = (state=[], action) => {
    if (action.type ==="ADD_TO_STORE_DATA") return [action.payload]
    return state
}