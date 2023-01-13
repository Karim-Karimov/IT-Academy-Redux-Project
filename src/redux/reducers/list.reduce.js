export const addToListReducer = (state=[], action) => {
    if (action.type ==="ADD_TO_LIST_DATA") return [...state,action.payload]
    return state
}