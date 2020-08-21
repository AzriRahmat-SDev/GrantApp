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

export class PGPersonalDetails extends Component {

  state={
    step: this.props.state + 6,
    open:false,
    setOpen:false,
}
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
                                    <ListItem primaryText="Please choose you maritial status"/>
                                        <Button className={styles.button} onClick={this.handleOpen}>
                                            Selection: 
                                        </Button>
                                        <FormControl className={styles.formControl}>
                                            <InputLabel id="maritial-status"></InputLabel>
                                            <Select
                                            labelId="maritial-status-open-select-label"
                                            id="maritial-status"
                                            open={this.open}
                                            onClose={this.handleClose}
                                            onOpen={this.handleOpen}
                                            value={values.maritialStatus}
                                            onChange={handleChange('maritialStatus')}
                                            >
                                            <br/>
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={1}>Single</MenuItem>
                                            <MenuItem value={2}>Married</MenuItem>
                                            <MenuItem value={3}>Engaged</MenuItem>
                                            <MenuItem value={4}>Divorced</MenuItem>
                                            </Select>
                                        </FormControl>
                                        <ListItem primaryText="What's your total income ceiling?(include extend family members if needed): "/>
                                        <Button className={styles.button} onClick={this.handleOpen}>
                                            Selection: 
                                        </Button>
                                        <FormControl className={styles.formControl}>
                                            <InputLabel id="financial-status"></InputLabel>
                                            <Select
                                            labelId="financial-status-open-select-label"
                                            id="financial-status"
                                            open={this.open}
                                            onClose={this.handleClose}
                                            onOpen={this.handleOpen}
                                            value={values.financialStatus}
                                            onChange={handleChange('financialStatus')}
                                            >
                                            <br/>
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={1}>Below or equals to $14000 per month</MenuItem>
                                            <MenuItem value={2}>Between $14000 to $21000 per month</MenuItem>
                                            <MenuItem value={3}>Above $21000 per month</MenuItem>
                                            </Select>
                                        </FormControl>
                                </List>
                                <RaisedButton
                                    label="Continue"
                                    primary={true}
                                    style={styles.button}
                                    onClick={this.continue}
                                />
                                <RaisedButton
                                    label="Back"
                                    primary={false}
                                    style={styles.button}
                                    onClick={this.back}
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
