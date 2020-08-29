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
        console.log(this.props)
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
                    <AppBar title="CPF Housing Grant Eligibility"/>
                    <List> 
                        <ListItem primaryText="Enter Your Citizenship"/>
                            <FormControl component="fieldset">
                                <RadioGroup aria-label="citizenship" 
                                    name="citizenship" 
                                    value={this.citizenship} 
                                    onChange={handleChange('citizenship')} 
                                    defaultValue={values.citizenship}>
                                        <FormControlLabel value="Both Singaporean citizens" control={<Radio />} label="Singaporean Citizen + Singaporean Citizen" />
                                        <FormControlLabel value="One Singaporean with a Singaporean permanent resident" control={<Radio />} label="Singapore Citizen + Singapore Permanent Resident" />
                                        <FormControlLabel value="Others" control={<Radio />} label="Others" />
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
                                    value={values.firsTimeBuyers} 
                                    onChange={handleChange('firstTimeBuyers')} //unable to capture the response but and pressthe button
                                    defaultValue={values.firsTimeBuyers}>
                                    <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                    <FormControlLabel value="No" control={<Radio />} label="No" />
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
                                    value={values.typeOfFlat} 
                                    onChange={handleChange('typeOfFlat')} 
                                    defaultValue={values.typeOfFlat}>
                                    <FormControlLabel value="2 to 4 room resale flat" control={<Radio />} label="2 to 4 Room Resale Flat" />
                                    <FormControlLabel value="5 Room or bigger resale flat" control={<Radio />} label="5 Room or Bigger Resale Flat" />
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
