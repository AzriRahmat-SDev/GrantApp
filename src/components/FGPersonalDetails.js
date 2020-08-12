import React, { Component } from 'react';
import '../App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List,ListItem } from 'material-ui/List';
import RaisedButton from  'material-ui/RaisedButton';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
// import FormLabel from '@material-ui/core/FormLabel'
import TextField from 'material-ui/TextField';

export class FGPersonalDetails extends Component {

   constructor(props){
        super(props);
        console.log(this.props)  //to see if the props fr
    } 
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };
    
    render() {
        const { values,handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="HDB Family Grant Eligibility"/>
                    <List> 
                        <ListItem primaryText="Enter Your Citizenship"/>
                            <FormControl component="fieldset">
                                <RadioGroup aria-label="citizenship" 
                                    name="citizenship" 
                                    value={this.state} 
                                    onChange={this.handleCheck} 
                                    defaultValue={values}>
                                        <FormControlLabel value="SCSC" control={<Radio />} label="Singapore Citizen + Singapore Citizen" />
                                        <FormControlLabel value="SCSPR" control={<Radio />} label="Singapore Citizen + Singapore Permanent Resident" />
                                        <FormControlLabel value="Other" control={<Radio />} label="Others" />
                                </RadioGroup>
                            </FormControl>
                        <ListItem primaryText="Enter Your Current Age"/>
                            <TextField
                                hintText = "Enter Your Current Age Here"
                                floatingLabelFixed='currentAge'
                                onChange={handleChange('currentAge')}
                                defaultValue={values.currentAge}
                                />
                        <ListItem primaryText="Are You A First Time Buyer?"/>
                            <FormControl component="fieldset">
                                    <RadioGroup aria-label="firstTimeBuyers" 
                                    name="firstTimeBuyer" 
                                    value={values.firsTimeBuyer} 
                                    onChange={handleChange('firstTimeBuyer')} //unable to capture the response but and pressthe button
                                    defaultValue={values.firsTimeBuyer}>
                                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                    <FormControlLabel value="no" control={<Radio />} label="No" />
                                </RadioGroup>
                            </FormControl>
                        <ListItem
                            primaryText="Remaining Lease of Flat?"
                            />
                            <TextField 
                                hintText = "Enter The Remaining Lease of Flat"
                                floatingLabelFixed='lease'
                                onChange={handleChange('lease')}
                                defaultValue={values.lease}
                            />
                        <ListItem primaryText="Type of Flat (Number of Rooms)"/>
                            <FormControl component="fieldset">
                                    <RadioGroup aria-label="typeOfFlat" 
                                    name="typeOfFlat" 
                                    value={this.state} 
                                    onChange={this.handleCheck} 
                                    defaultValue={values}>
                                    <FormControlLabel value=">2 || <4" control={<Radio />} label="2 to 4 Room Resale Flat" />
                                    <FormControlLabel value="=> 5" control={<Radio />} label="5 Room or Bigger Resale Flat" />
                                </RadioGroup>
                            </FormControl>
                    </List>
                    <RaisedButton
                        label="Continue"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button: {
        margin: 15
    }
}

export default FGPersonalDetails;
