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

export class FGFinancialDetails extends Component {

    state={
        open:false,
        setOpen:false,
    }
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };


    render() {
        const { values,handleChange } = this.props;
                return (
                    <MuiThemeProvider>
                        <React.Fragment>
                            <AppBar title="CPF Housing Grant Eligibility"/>
                                <List>
                                    <ListItem primaryText="Please choose you family nucleus"/>
                                        <Button className={styles.button} onClick={this.handleOpen}>
                                            Selection: 
                                        </Button>
                                        <FormControl className={styles.formControl}>
                                            <InputLabel id="family-nucleus"></InputLabel>
                                            <Select
                                            labelId="family-nucleus-open-select-label"
                                            id="family-nucleus"
                                            open={this.open}
                                            onClose={this.handleClose}
                                            onOpen={this.handleOpen}
                                            value={values.familyNucleus}
                                            onChange={handleChange('familyNucleus')}
                                            >
                                            <br/>
                                            <MenuItem value= {1}>
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value="Spouse and children(if any)">Spouse and children(if any)</MenuItem>
                                            <MenuItem value="Having Children under legal custody">You have children under legal custody</MenuItem>
                                            <MenuItem value="Married">Married</MenuItem>
                                            <MenuItem value="Engaged">Engaged</MenuItem>
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
                                            <MenuItem value= "Below or equals to $14000 per month">Below or equals to $14000 per month</MenuItem>
                                            <MenuItem value= "Between $14000 to $21000 per month">Between $14000 to $21000 per month</MenuItem>
                                            <MenuItem value= "Above $21000 per month">Above $21000 per month</MenuItem>
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

export default FGFinancialDetails

/* <div>
<label for="familynucleus">Please choose your family nucleus: </label>
<select name="familynucleus" id="familynucleus">
    <option value="ExFam">Spouse and children(if any)</option>
    <option value="ExFam">Children under legal custody</option>
    <option value="Couples">Newlyweds</option>
    <option value="Couples">Soon to be spouse</option>
</select>
<br></br>
<label for="financialstatus">What's your total income ceiling?(include extend family members if needed): </label>
<select name="financialstatus" id="financialstatus">
    <option value="1">Below or equals to $14000 per month</option>
    <option value="2">Between $14000 to $21000 per month</option>
    <option value="3">Above $21000 per month</option>
</select>
<br></br> */