import React from 'react'
import Component1 from '../components/Component1'
import WebSocketComponent from '../components/WebSocketComponent'
import IOComponent from '../components/IOComponent'
import SoundComponent from '../components/SoundComponent'

class Page1 extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
      
        }
    }

    componentDidMount() {
        this.props.actions.init()
    }

    render () {
        const {myCounter, actions} = this.props

        return (
            <div className="page1">
                <Component1/>
                <WebSocketComponent/>
                <IOComponent/>
                <SoundComponent/>
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
