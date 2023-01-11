export default (state, action) => {
    switch (action.type) {
        case "DELETE_TRANSACTION": 
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload) // filter out a transaction that's to be deleted 
            }
        case "ADD_TRANSACTION": 
            return {
                ...state,
                transactions: [action.payload, ...state.transactions] // create new array containing existing transactions in addition to the new transaction 
            }
        default: 
            return state;
    }
}