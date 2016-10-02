import React from 'react';
import Component1 from '../components/Component1';

class Page1 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
      
        };
    }

    componentDidMount() {
    
    }

    render () {
        return (
            <div className="page1">
                <Component1/>
            </div>
        );
    }
}

export default Page1
