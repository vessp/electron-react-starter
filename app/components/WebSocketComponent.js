import React from 'react'

class WebSocketComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            socketEvents:[]
        }
    }

    componentDidMount() {
        this.socket = new WebSocket('ws://vessp-node-starter.herokuapp.com')
        this.socket.onopen = (event) => {
            this.setState({socketEvents:[...this.state.socketEvents, event]})
        }
        this.socket.onclose = (event) => {
            this.setState({socketEvents:[...this.state.socketEvents, event]})
        }
        this.socket.onmessage = (event) => {
            this.setState({socketEvents:[...this.state.socketEvents, event]})
        }
        this.socket.onerror = (event) => {
            this.setState({socketEvents:[...this.state.socketEvents, event]})
        }
    }

    sendMessage() {
        this.socket.send(JSON.stringify({
            type: 'myType',
            payload: 'myPayload'
        }))
    }

    render(){
        const {socketEvents} = this.state

        return (
            <div className="alert alert-success">
                <div className="">
                    <h1>WebSocketComponent</h1>
                    <button onClick={this.sendMessage.bind(this)}>Send Message</button>
                    <ul>
                        {socketEvents.map((e,i) => 
                            <li key={i}>{e.type + ': ' + e.data}</li>
                        )}
                    </ul>
                </div>
            </div>
        )
    }

}

export default WebSocketComponent
