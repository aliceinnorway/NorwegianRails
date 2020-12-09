import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class StepOne extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {isClicked: false};
      }
    
    handleClick() {
        this.setState({isClicked: true});
    }
    
    render() {

     
        return (
                <h1>Ut på tur aldri sur</h1>
        )
    }
}

export default StepOne;