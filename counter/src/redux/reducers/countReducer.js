let INITIAL_STATE = {
    count: 0
}

let countReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return {
                count: state.count + 1
            }
        case 'DECREMENT':
            return {
                count: state.count - 1
            }
        default :
            return state
    }
}

export default countReducer