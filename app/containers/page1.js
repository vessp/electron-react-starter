import React from 'react'
import Component1 from '../components/Component1'
import WebSocketComponent from '../components/WebSocketComponent'

class Page1 extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
      
        }
    }

    componentDidMount() {
    
    }

    render () {
        const {myCounter, actions} = this.props

        return (
            <div className="page1">
                <button onClick={() => actions.setMyCounter(myCounter+1)}>increment</button>
                <Component1/>
                <WebSocketComponent/>
            </div>
        )
    }
}

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../redux/actions'
export default connect(
    (state) => {
        //map store to props
        return {
            myCounter: state.app.myCounter
        }
    },
    (dispatch) => {
        //map dispatch to props
        return {
            actions: bindActionCreators(actions, dispatch)
        }
    }
)(Page1)
