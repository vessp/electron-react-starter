//React libraries
import React from 'react'
import ReactDOM from 'react-dom'

import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import appReducer from './redux/reducers'

const reducers = combineReducers({
    app:appReducer
})

const store = createStore(reducers)

//Import Container component
import Page1 from './containers/page1'

class App extends React.Component {
    render () {
        return (
            <Provider store={store}>
                <Page1 />
            </Provider>
        )
    }
}

// Render to index.html
ReactDOM.render(
  <App/>,
  document.getElementById('content')
)