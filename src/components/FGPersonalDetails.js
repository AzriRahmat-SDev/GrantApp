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
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

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
                    {/* Start of Age section */}
                        <ListItem primaryText="Enter Your Current Age"/>
                            <TextField
                                hintText = "Enter Your Current Age Here"
                                floatingLabelFixed='currentAge'
                                onChange={handleChange('currentAge')}
                                defaultValue={values.currentAge}
                                />
                    {/* End of Age Section */}

                    {/* Start of Citizenship section */}
                        <ListItem primaryText="Enter Your Citizenship"/>
                            <FormControl component="fieldset">
                                <RadioGroup aria-label="citizenship" 
                                    name="citizenship" 
                                    value={this.citizenship} 
                                    onChange={handleChange('citizenship')} 
                                    defaultValue={values.citizenship}>
                                        <FormControlLabel value="Both Are Singaporean citizens" control={<Radio />} label="Singaporean Citizen + Singaporean Citizen" />
                                        <FormControlLabel value="One Singaporean with a Singaporean permanent resident" control={<Radio />} label="Singapore Citizen + Singapore Permanent Resident" />
                                        <FormControlLabel value="Others" control={<Radio />} label="Others" />
                                </RadioGroup>
                            </FormControl>
                    {/* End of Citizenship Section */}

                    {/* Start of Family Nucleus section */}
                        <ListItem primaryText="Please Choose Your Family Nucleus"/>
                                <Button className={styles.button} onClick={this.handleOpen}>
                                    Option: 
                                </Button>
                            <FormControl className={styles.formControl}>
                                <InputLabel id="family-nucleus"></InputLabel>
                                <Select
                                labelId="family-nucleus-open-select-label"
                                id="family-nucleus"
                                open={this.open}
                                onClose={this.handleClose}
                                onOpen={this.handleOpen}
                                onChange={handleChange('familyNucleus')}
                                value={values.familyNucleus}
                                >
                                <br/>
                                <MenuItem value= {1}>
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value="Singles Grant">Singles (Single Orphan With Unmarried Siblings OR Child living with parents)</MenuItem>
                                <MenuItem value="Family Grant">Married (Married Couple OR Fiancé/Fiancée couple OR Widowed/Divorce with children under legal custody)</MenuItem>
                                </Select>
                            </FormControl>
                    {/* End of Family Nucleus section */}

                    {/* Start of Prev Housing subsidy section */}
                        <ListItem primaryText="Recipient Of Previous Housing Subsidies"/>
                                <Button className={styles.button} onClick={this.handleOpen}>
                                    Option: 
                                </Button>
                            <FormControl className={styles.formControl}>
                                <InputLabel id="firsTimeBuyers"></InputLabel>
                                <Select
                                    labelId="firsTimeBuyers-open-select-label"
                                    id="firsTimeBuyers"
                                    open={this.open}
                                    onClose={this.handleClose}
                                    onOpen={this.handleOpen}
                                    value={values.firstTimeBuyers}
                                    onChange={handleChange('firstTimeBuyers')}
                                >
                                <br/>
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value= "All First-Timers">All Applicants Are First-Timers</MenuItem>
                                <MenuItem value= "One First-Timer, One Second-Timer">You're A First-Timer; Your Significant Other Is Second-Timer And Has Received Only One Housing Subsidy </MenuItem>
                                </Select>
                            </FormControl>
                    {/* End of Prev Housing subsidy section */}

                    {/* Start of Type Of Flat Section */}
                        <ListItem primaryText="Type Of Flat (Number of Rooms)"/>
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
                    {/* End of Type Of Flat Section */}
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


// eslint-disable-next-line no-lone-blocks
{/* <ListItem
    primaryText="Remaining Lease Of Flat?"
    />
    <TextField 
        hintText = "Enter The Remaining Lease Of Flat"
        floatingLabelFixed='lease'
        onChange={handleChange('lease')}
        defaultValue={values.lease}
    /> */}