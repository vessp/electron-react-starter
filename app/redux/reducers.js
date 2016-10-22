// import { VisibilityFilters } from './actions'

const initialState = {
    myCounter: 0
}

function appReducer(state = initialState, action) {
    switch (action.type) {
    case 'myCounter':
        return Object.assign({}, state, {
            myCounter: action.payload
        })
    default:
        return state
    }
}

export default appReducer