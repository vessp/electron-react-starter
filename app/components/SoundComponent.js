import React from 'react'
const electron = window.require('electron')
var Sound = require('react-sound')

class IOComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            curSound: ''
        }
    }

    playKankeiSound(name) {
        this.setState({curSound:'https://kankei.herokuapp.com/'+name})
    }

    render(){
        const {projectDir, playlist} = this.props
        const {curSound} = this.state

        return (
            <div className="alert alert-info">
                <h1>Sound Component</h1>
                <Sound 
                    url={curSound}
                    playStatus={Sound.status.PLAYING}
                    onLoading={() => {}}
                    onPlaying={() => {}}
                    onFinishedPlaying={() => {}}
                    />
                {playlist && playlist.map(item => {
                    return <div key={item} onClick={() => this.playKankeiSound(item)}>{item}</div>
                })}
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
            projectDir: state.app.projectDir,
            playlist: state.app.playlist
        }
    },
    (dispatch) => {
        //map dispatch to props
        return {
            actions: bindActionCreators(actions, dispatch)
        }
    }
)(IOComponent)
