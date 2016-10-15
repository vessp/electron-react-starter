//React libraries
import React from 'react'
import ReactDOM from 'react-dom'

//Import Container component
import Page1 from './containers/page1'

class App extends React.Component {
    render () {
        return (
            <Page1 />
        )
    }
}

// Render to index.html
ReactDOM.render(
  <App/>,
  document.getElementById('content')
)