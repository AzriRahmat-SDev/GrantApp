import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { List,ListItem } from 'material-ui/List';
import RaisedButton from  'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

export class PGPersonalDetails extends Component {

continue = e => {
    e.preventDefault();
    this.props.nextStepPG();
};
back = e => {
    e.preventDefault();
    this.props.prevStepPG();
};

  render() {
    const { values,handleChange } = this.props;
                return (
                    <MuiThemeProvider>
                        <React.Fragment>
                            <AppBar title="Proximity Housing Grant (PHG) Eligibility"/>
                                <List>
                                    {/* Start of Current age section */}
                                    <ListItem primaryText="Enter Your Current Age"/>
                                        <TextField
                                            hintText = "Enter your current age here"
                                            floatingLabelFixed='currentAge'
                                            onChange={handleChange('currentAge')}
                                            defaultValue={values.currentAge}
                                        />
                                    {/* End of current age section */}

                                    {/* Start of citizenship section */}
                                    <ListItem primaryText="Is Any Of Your Other Family Members A Singaporean Or A Singaporean Permanent Resident?"/>
                                        <FormControl component="fieldset">
                                                <RadioGroup aria-label="citizenship" 
                                                name="citizenship" 
                                                value={this.citizenship} 
                                                onChange={handleChange('citizenship')}
                                                defaultValue={values.citizenship}>
                                                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                                <FormControlLabel value="No" control={<Radio />} label="No" />
                                            </RadioGroup>
                                        </FormControl> 
                                    {/* End of citizenship section */}

                                    {/* Start of Marital status section */}
                                    <ListItem primaryText="Please Choose Your Marital Status"/>
                                    <Button className={styles.button} onClick={this.handleOpen}>
                                        Selection: 
                                    </Button>
                                    <FormControl className={styles.formControl}>
                                        <InputLabel id="marital-status"></InputLabel>
                                        <Select
                                        labelId="marital-status-open-select-label"
                                        id="marital-status"
                                        open={this.props.open}
                                        onClose={this.handleClose}
                                        onOpen={this.handleOpen}
                                        value={values.maritalStatus}
                                        onChange={handleChange('maritalStatus')}
                                        >
                                        <br/>
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value="Singles grant">Single (Single Orphan With Unmarried Siblings OR Child living with parents)</MenuItem>
                                        <MenuItem value= "Family grant">Married (Married Couple OR Fiancé/Fiancée couple OR Widowed/Divorce with children under legal custody)</MenuItem>
                                        </Select>
                                    </FormControl>
                                    {/* Start of Marital status section */}
                                    
                                    {/* Start of Proximity type section */}
                                    <ListItem primaryText="Please Select Your Proximity Type"/>
                                        <Button className={styles.button} onClick={this.handleOpen}>
                                            Option: 
                                        </Button>
                                    <FormControl className={styles.formControl}>
                                        <InputLabel id="proximityType"></InputLabel>
                                        <Select
                                            labelId="proximityType-open-select-label"
                                            id="proximityType"
                                            open={this.open}
                                            onClose={this.handleClose}
                                            onOpen={this.handleOpen}
                                            value={values.proximityType}
                                            onChange={handleChange('proximityType')}
                                        >
                                        <br/>
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value= "Live with your parents or/and children">I Wish To Live With My Parents/Children</MenuItem>
                                        <MenuItem value= "Live within 4km from your other family members">I Wish To Live Within 4km From My Family Members</MenuItem>
                                        <MenuItem value= "Select none of the available options ">None Of The Above</MenuItem>
                                        </Select>
                                    </FormControl>
                                    {/* End of Proximity type subsidy section */}

                                    {/* Start of Unsure link */}
                                    <ListItem primaryText="Unsure About The Distance Between The Houses?"/>
                                            <RaisedButton
                                                label="CLICK HERE!"
                                                variant="outline"
                                                style={styles.button}
                                                href="https://services2.hdb.gov.sg/webapp/BB292KM/BB292KM_ENQ"
                                                target="_blank"
                                            />
                                    {/* End of Unsure link */}

                                    {/* Start of First timers section */}
                                    <ListItem primaryText="Have You Received A Proximity Housing Grant Before?"/>
                                        <FormControl component="fieldset">
                                                <RadioGroup aria-label="houseHoldStatus" 
                                                name="houseHoldStatus" 
                                                value={this.houseHoldStatus} 
                                                onChange={handleChange('houseHoldStatus')}
                                                defaultValue={values.houseHoldStatus}>
                                                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                                <FormControlLabel value="No" control={<Radio />} label="No" />
                                            </RadioGroup>
                                        </FormControl> 
                                    {/* End of First timers section */}
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
        margin: 15,
        marginTop: 2,
        primary: true,
        size:"small"
    },
    formControl: {
        margin: 1,
        minWidth: 120,
    }
}

export default PGPersonalDetails
