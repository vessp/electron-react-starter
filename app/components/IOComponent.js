import React from 'react'
const electron = window.require('electron')
const fs = window.require('fs')

class IOComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {
        
    }

    makeDir() {
        fs.mkdir(this.props.projectDir + '/newDir')
    }

    render(){
        const {projectDir} = this.props

        return (
            <div className="alert alert-info">
                <h1>IOComponent</h1>
                <div>{projectDir}</div>
                <button onClick={this.makeDir.bind(this)}>Make Dir</button>
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
            projectDir: state.app.projectDir
        }
    },
    (dispatch) => {
        //map dispatch to props
        return {
            actions: bindActionCreators(actions, dispatch)
        }
    }
)(IOComponent)
