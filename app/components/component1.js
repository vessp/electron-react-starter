import React from 'react';
import Axios from 'axios';

class Component1 extends React.Component {
  constructor(props) {
    super(props);
  }

  doRequest() {
    alert('button clicked')
    Axios.get(`http://httpstat.us/200`)
      .then(function (response) {
        console.log('response', response)
      })
      .catch(function (err) {
        console.log('err', err);
      });
  }

  render(){
    return (
      <div className="player">
        <div className="player__main">
          <h1>Component1</h1>
          <button onClick={this.doRequest.bind(this)}><i className="fa fa-play"></i></button>
        </div>
      </div>
      )
  }

}

export default Component1
