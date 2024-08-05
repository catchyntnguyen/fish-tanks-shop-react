export const setUserReducer = (user) => ({
    type: 'SET_USER',
    payload: user
});
export const setErrorMessage = (error) => ({
    type: 'SET_ERROR',
    payload: error
});
export const setQuantity = (quantity) => ({
    type: 'SET_QUANTITY',
    payload: quantity
});
export const setTotalCart = (total) => ({
    type: 'SET_TOTAL',
    payload: total
});
export const setNotification= (notification) => ({
    type: 'SET_NOTIFICATION',
    payload: notification
});
