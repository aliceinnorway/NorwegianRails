import React from 'react';
import './card.css';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '@material-ui/core/Button';
import StepOne from '../stepOne/stepOne';
import StepTwo from '../stepTwo/stepTwo';
import StepThree from '../stepThree/stepThree';


class Card extends React.Component {

    constructor(props) {
        super(props);
        this.handleClickOne = this.handleClickOne.bind(this);
        this.handleClickTwo = this.handleClickTwo.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.keyPressed = this.keyPressed.bind(this);
        this.state = {
            isClickedOne: false,
            isClickedTwo: false,
            depStatDone: false
        };
      }
    
    handleClickOne() {
        this.setState({isClickedOne: true});
    }

    handleClickTwo() {
        this.setState({isClickedTwo: true});
    }

    handleKeyDown() {
        this.setState({depStatDone: true})
    }

    keyPressed(event) {
        if (event.key === "Enter" || event.code === "NumpadEnter") {
            console.log("You've got this far.")
            this.handleKeyDown()
        }
      }


    
    render() {

        let stepOne = (
            <Container className="bookingCard">
                <StepOne/>
                <Button variant="contained" color="primary" onClick={this.handleClickOne}>
                Buy A Ticket
                </Button>
            </Container>
        )

        let stepTwo = (
            <Container className="bookingCard">
                <StepTwo/>
                <Button variant="contained" color="primary" onClick={this.handleClickTwo}>
                    Continue
                </Button>
            </Container>
        )

        let stepThree = (
            <StepThree/>
        )

        /* This handles changing from Buy A Ticket to Select Departure Station to Arrival Station*/
        let step = stepOne;
        let stepOneIsClicked = this.state.isClickedOne;
        let stepTwoIsComplete = this.state.isClickedTwo;

        if (stepTwoIsComplete) {
            return step = stepThree;
        } else if (stepOneIsClicked) {
            return step = stepTwo;
        }

        /* Returns current step in view trains */
        return (
            <div>{step}</div>
        )
    }


}

export default Card;


