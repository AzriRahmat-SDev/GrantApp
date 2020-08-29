import React, { Component } from 'react'
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

export class EHGPersonalDetails extends Component {
  
  continue = e =>{
    e.preventDefault();
    this.props.nextStepEHG()
  };

  back = e => {
    e.preventDefault();
    this.props.prevStepEHG();
  };
  
  render() {
    const { values,handleChange } = this.props;
        return (
          <MuiThemeProvider>
              <React.Fragment>
                  <AppBar title="Enhance Housing Grant (EHG) Eligibility For Families And Singles"/>
                      <List>
                          <ListItem primaryText="Please choose your family nucleus"/>
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
                              <MenuItem value="Singles">Single (Singles livng with parents, ST and FT couple or an Orphan)</MenuItem>
                              <MenuItem value= "Married">Married (Married, married with kids or married and living with parents)</MenuItem>
                              </Select>
                          </FormControl>
                          <ListItem primaryText="Are you a first time buyer?"/>
                            <FormControl component="fieldset">
                                    <RadioGroup aria-label="firstTimeBuyer" 
                                    name="firstTimeBuyer" 
                                    value={this.state} 
                                    onChange={this.handleCheck} 
                                    defaultValue={values.firstTimeBuyer}>
                                    <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                    <FormControlLabel value="No" control={<Radio />} label="No" />
                                </RadioGroup>
                            </FormControl>  
                          <ListItem primaryText="Enter your current age"/>
                            <TextField
                                hintText = "Enter your current age here"
                                floatingLabelFixed='currentAge'
                                onChange={handleChange('currentAge')}
                                defaultValue={values.currentAge}
                              />
                          <ListItem
                            primaryText="Remaining lease of flat?"/>
                            <TextField 
                                hintText = "Enter remaining lease here"
                                floatingLabelFixed='lease'
                                onChange={handleChange('lease')}
                                defaultValue={values.lease}
                              />
                          <ListItem primaryText="Employment: Have at least 1 applicant that has been working for at least 12 months?"/>
                            <FormControl component="fieldset">
                                    <RadioGroup aria-label="employmentStatus" 
                                    name="employmentStatus" 
                                    value={this.state} 
                                    onChange={this.handleCheck} 
                                    defaultValue={values.employmentStatus}>
                                    <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                    <FormControlLabel value="No" control={<Radio />} label="No" />
                                </RadioGroup>
                            </FormControl> 
                          <ListItem
                            primaryText="What is the average gross monthly household income for the past 12 months"/>
                            <TextField 
                                hintText = "Enter average income here"
                                floatingLabelFixed='income'
                                onChange={handleChange('income')}
                                defaultValue={values.income}
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

export default EHGPersonalDetails

