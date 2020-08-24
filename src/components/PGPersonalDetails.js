import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { List,ListItem } from 'material-ui/List';
import RaisedButton from  'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

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
                            <AppBar title="Proximity Grant Eligibility"/>
                                <List>
                                    <ListItem primaryText="Please choose your maritial status"/>
                                    <Button className={styles.button} onClick={this.handleOpen}>
                                        Selection: 
                                    </Button>
                                    <FormControl className={styles.formControl}>
                                        <InputLabel id="maritial-status"></InputLabel>
                                        <Select
                                        labelId="maritial-status-open-select-label"
                                        id="maritial-status"
                                        open={this.props.open}
                                        onClose={this.handleClose}
                                        onOpen={this.handleOpen}
                                        value={values.maritialStatus}
                                        onChange={handleChange('maritialStatus')}
                                        >
                                        <br/>
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value="Single haha forever alone loser :,( ">Single</MenuItem>
                                        <MenuItem value= "Happy wife happy life">Married</MenuItem>
                                        <MenuItem value= "Got goal keeper doesnt mean still cannot score">Engaged</MenuItem>
                                        <MenuItem value= "team devorce force">Divorced</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <ListItem primaryText="Please enter the postalcode of the intended purchased DBSS flat"/>
                                        <TextField
                                            hintText = "Enter postal code here I.e: Sxxxxxx"
                                            floatingLabelFixed='firstLocation'
                                            onChange={handleChange('firstLocation')}
                                            defaultValue={values.firstLocation}
                                        />
                                    <ListItem primaryText="Please enter the postalcode of your parents or childs place of residence"/>
                                        <TextField
                                            hintText = "Enter postal code here I.e: Sxxxxxx"
                                            floatingLabelFixed='secondLocation'
                                            onChange={handleChange('secondLocation')}
                                            defaultValue={values.secondLocation}
                                        />             
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
        primary: true
    },
    formControl: {
        margin: 1,
        minWidth: 120,
    }
}

export default PGPersonalDetails
