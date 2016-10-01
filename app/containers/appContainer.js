import React from 'react';
import Component1 from '../components/component1';

class AppContainer extends React.Component {

  constructor(props) {
     super(props);
     this.state = {
      
     };
   }

  componentDidMount() {
    
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

  render () {
    const divStyles = {
      width: '500px',
      height: '500px',
    }
    return (
      <div className="" style={divStyles}>
        <Component1/>
      </div>
    );
  }
}

export default AppContainer
