import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

class StepThree extends React.Component {

    

    
    render() {

     
        return (
            <Container className="bookingCard">
                <h1>Hvor skal du til?</h1>
                <InputLabel id="label">Arrival Station</InputLabel>
                <Select labelId="label" id="select">
                    <MenuItem value="Oslo">Oslo</MenuItem>
                    <MenuItem value="Eidsvoll">Eidsvoll</MenuItem>
                    <MenuItem value="Hamar">Hamar</MenuItem>
                    <MenuItem value="Lillehammer">Lillehammer</MenuItem>
                    <MenuItem value="Trondheim">Trondheim</MenuItem>
                </Select>
                {/*Error catching needed - if no station selected when they try to press enter*/}
            </Container>
        )
    }
}

export default StepThree;