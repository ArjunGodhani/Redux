const reducer = (state = 0, action) => {
    
debugger;
    if (action.type === 'deposit') {
        return state + action.payload
    }

    else if (action.type === 'withdraw') {
        return state - action.payload
    }

    else {
        return state;
    }

}

export default reducer