import React from 'react'
import Axios from 'axios'

class Component1 extends React.Component {
    constructor(props) {
        super(props)
    }

    doRequest() {
        alert('button clicked')
        Axios.get('http://httpstat.us/200')
            .then(function (response) {
                console.log('response', response)
            })
            .catch(function (err) {
                console.log('err', err)
            })
    }

    render(){
        return (
            <div className="comp1">
                <div className="comp1-content">
                    <h1>Component1</h1>
                    <button onClick={this.doRequest.bind(this)}><i className="fa fa-play"></i></button>
                    <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
                </div>
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
)(Component1)
