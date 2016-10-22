import React from 'react'

class Component2 extends React.Component
{
    //called once at start
    constructor(props)
    {
        super(props)
        this.state={count:0} //state is special

    }
    //called during props change or state change
    componentWillUpdate(nextProps, nextState)
    {
        if (nextState.count == 5 && this.state.count != nextState.count)
        {
            this.props.onGoalReached()
        }
    }
    /*
    componentDidUpdate(prevProps, prevState)
    {
        if (this.state.count == 5)
        {
            this.props.onGoalReached()
        }
    }
    */
    onFirstButton()
    {
        //alert("button click")
        this.setState({count:this.state.count+1})

    }
    render()
    {
        return(
            <div>
                <h1>{this.props.titleName}</h1>
                <button onClick={this.onFirstButton.bind(this)}>firstButton</button>
                <div>{this.state.count}</div>
            </div>
        )
    }

}

export default Component2