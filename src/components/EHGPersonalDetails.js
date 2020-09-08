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
  
  constructor(props){
    super(props);
    console.log(this.props)
  } 

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
                        {/* Start of Family nucleus section */}
                          <ListItem primaryText="Please Choose Your Family Nucleus"/>
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
                              <MenuItem value="EHG-Singles">First-timer and a Second-timer couple OR Single Orphan With Unmarried Siblings OR Single Child living with parents</MenuItem>
                              <MenuItem value= "EHG-Family">Married Couple OR Fiancé/Fiancée Couple  </MenuItem>
                              </Select>
                          </FormControl>
                        {/* End of Family nucleus section */}
                        
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

                          {/* Start of Current age section */}
                          <ListItem primaryText="Enter your current age"/>
                            <TextField
                                hintText = "Enter your current age here"
                                floatingLabelFixed='currentAge'
                                onChange={handleChange('currentAge')}
                                defaultValue={values.currentAge}
                              />
                          {/* End of current age section */}
                          
                          {/* Start of Lease section */}
                          <ListItem
                            primaryText="Remaining lease of flat?"/>
                            <TextField 
                                hintText = "Enter remaining lease here"
                                floatingLabelFixed='lease'
                                onChange={handleChange('lease')}
                                defaultValue={values.lease}
                              />
                          {/* End of Lease section */}
                          
                          {/* Start of First timers section */}
                          <ListItem primaryText="Employment: Have at least 1 applicant that has been working for at least 12 months?"/>
                            <FormControl component="fieldset">
                                    <RadioGroup aria-label="employmentStatus" 
                                    name="employmentStatus" 
                                    value={this.employmentStatus} 
                                    onChange={handleChange('employmentStatus')}
                                    defaultValue={values.employmentStatus}>
                                    <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                    <FormControlLabel value="No" control={<Radio />} label="No" />
                                </RadioGroup>
                            </FormControl> 
                          {/* End of Lease section */}

                          {/* Start of income section */}
                          <ListItem
                            primaryText="What is the average gross monthly household income for the past 12 months"/>
                            <TextField 
                                hintText = "Enter average income here"
                                floatingLabelFixed='income'
                                onChange={handleChange('income')}
                                defaultValue={values.income}
                              /> 
                          {/* End of income section */}
                                      
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

