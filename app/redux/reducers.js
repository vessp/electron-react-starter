const initialState = {
    myCounter: 0,
    projectDir: __dirname
}

function appReducer(state = initialState, action) {
    switch (action.type) {
    case 'myCounter':
        return Object.assign({}, state, {
            myCounter: action.payload
        })
    case 'projectDir':
        return Object.assign({}, state, {
            projectDir: action.payload
        })
    default:
        return state
    }
}

export default appReducer