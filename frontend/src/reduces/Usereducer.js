// reducer.js
const initialState = {
    user: null,
    error: null,
    quantity: 0,
    total: 0,
    notification: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER':
            return { ...state, user: action.payload };
        case 'SET_ERROR':
            return { ...state, error: action.payload };
        case 'SET_QUANTITY':
            return { ...state, quantity: action.payload };
        case 'SET_TOTAL':
            return { ...state, total: action.payload };
        case 'SET_NOTIFICATION':
            return { ...state, notification: action.payload };
        default:
            return state;
    }
};

export default reducer;
