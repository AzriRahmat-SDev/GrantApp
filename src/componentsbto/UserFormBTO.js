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

export class UserFormBTO extends Component {

    state={
        step: 1,
        citizenship: '',
        currentAge: null,
        lease: null,
        firstTimeBuyers: '',
        employmentStatus: '',
        income: null,
        typeOfFlat: '',
        familyNucleus: '',
        grantMonies: '',
        grantMoniesResult: '',
        qualifiedGrantResults:'',
        otherQualifiedGrants: 'Enhanced CPF Housing Grant Scheme & Proximity Grant Scheme',
        otherQualifiedGrants1: 'Enhanced CPF Housing Grant Scheme For Singles',
        otherQualifiedGrants2: 'Proximity Grant Scheme',
        open:false,
        setOpen:false,

        //Page section
        isStartPage:true,
        isSecondPage:false,
        isResultPage:false,
        
        //Ternary section
        firstTimeGrantMode:false,
        secondTimerGrantMode:false,
        mixedTimerGrantMode:false,
        singleGrantMode:false,
        jointSingleGrantMode:false,
        

    }

    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
        
        
    }

    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    continue = e => {
        e.preventDefault();
        this.setState({isStartPage:false})
        this.toCheckForGrantType()
        console.log(this.state)
        //this.props.nextStep();
    };

    continueToResult = e => {
        e.preventDefault();
        console.log(this.state)
        this.setState({isSecondPage:false, isResultPage:true})
        this.toCheckForCalculation()

    };

    back = e => {
        e.preventDefault();
        this.setState({
            isStartPage: true,
            isSecondPage:false
        })

        //this.props.prevStep();
        
    };

    backToHome = () =>{
        const { step } = this.state;
        this.setState({
            step: step/step,
            currentAge: null,
            lease: null,
            firstTimeBuyers: '',
            employmentStatus: '',
            income: null,
            typeOfFlat:'',
            familyNucleus: '',
            grantMonies: '',
            grantMoniesResult: '',
            qualifiedGrantResults:'',
            otherQualifiedGrants: 'Enhanced CPF Housing Grant Scheme & Proximity Grant Scheme',
            otherQualifiedGrants1: 'Enhanced CPF Housing Grant Scheme For Singles',
            otherQualifiedGrants2: 'Proximity Grant Scheme',
            open:false,
            setOpen:false,
            isStartPage:true,
            isSecondPage:false
        })
    }

    toCheckForGrantType = () =>{
        if(
            this.state.currentAge >= 35 &&
            this.state.familyNucleus.includes("Singles Grant") &&
            this.state.firstTimeBuyers.includes("All First-Timers")
        )
        {
            this.setState({isSecondPage: true, singleGrantMode:true})

        }
    }

    toCheckForCalculation = () =>{
        if(
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 0 && this.state.income < 750) 
        )
        {
            this.setState({
                grantMonies:  40000,
                grantMoniesResult: "$40000",
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            })
            if((this.state.lease/this.state.remainingYearsTo95 <= 1)){
                this.proratedCalculation()
            }
            return true;
        }


    }

    proratedCalculation = () =>{
        const { grantMonies,proRatedVariable,grantMoniesStr } = this.state;
        this.setState({
            grantMoniesResult: (grantMoniesStr) + grantMonies * proRatedVariable.toFixed(2),
        })
    }

    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    };

    handleClose = () => {
        this.setOpen();
    };

    handleOpen = () => {
        this.setOpen();
    };

    render() {

        const { step } = this.state;
        const { citizenship, currentAge, firstTimeBuyers, lease, employmentStatus, income, typeOfFlat, familyNucleus,financialStatus,grantMonies,qualifiedGrantResults,otherQualifiedGrants,otherQualifiedGrants1,otherQualifiedGrants2,open,setOpen,grantMoniesResult } = this.state;
        const values = { citizenship, currentAge, firstTimeBuyers, lease, employmentStatus, income, typeOfFlat, familyNucleus, financialStatus, grantMonies,qualifiedGrantResults,otherQualifiedGrants,otherQualifiedGrants1,otherQualifiedGrants2,open,setOpen, grantMoniesResult};
         
        if(this.state.isStartPage){
            return <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="CPF Housing Grant Eligibility"/>
                    <List> 

                    {/* Start of Age section */}
                        <ListItem primaryText="Enter Your Current Age"/>
                            <TextField
                                hintText = "Enter Your Current Age Here"
                                floatingLabelFixed='currentAge'
                                onChange={this.handleChange('currentAge')}
                                defaultValue={values.currentAge}
                                />
                    {/* End of Age Section */}

                    {/* Start of Family Nucleus section */}
                    <ListItem primaryText="You Are Applying As A"/>
                                <Button className={styles.button} onClick={this.handleOpen}>
                                    Option: 
                                </Button>
                            <FormControl className={styles.formControl}>
                                <InputLabel id="family-nucleus"></InputLabel>
                                <Select
                                labelId="family-nucleus-open-select-label"
                                id="family-nucleus"
                                open={this.open}
                                onClose={this.setOpen}
                                onOpen={this.setOpen}
                                onChange={this.handleChange('familyNucleus')}
                                value={values.familyNucleus}
                                >
                                <br/>
                                <MenuItem value= {1}>
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value="Singles Grant"> Single (Sole applicant)</MenuItem>
                                <MenuItem value="Joint Singles Grant"> Joint Singles or Orphan (Single Orphan With Unmarried Siblings)</MenuItem>
                                <MenuItem value="Family Grant">Married Couple (Married Couple OR Fiancé/Fiancée couple OR Widowed/Divorce with children under legal custody)</MenuItem>
                                <MenuItem value="Non Citizen Spouse Scheme">Married couple with a Non Citizen Spouse</MenuItem>
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
                                    onClose={this.setOpen}
                                    onOpen={this.setOpen}
                                    value={values.firstTimeBuyers}
                                    onChange={this.handleChange('firstTimeBuyers')}
                                >
                                <br/>
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value= "All First-Timers">All Applicants Are First-Timers</MenuItem>
                                <MenuItem value= "One First-Timer, One Second-Timer">You're A First-Timer;Other Applicants Is/Are Second-Timers And Has Received Only One Housing Subsidy Prior</MenuItem>
                                <MenuItem value= "Second-Timers">Both Applicants Are Second-Timers</MenuItem>
                                <MenuItem value= "Other">Others</MenuItem>
                                </Select>
                            </FormControl>
                    {/* End of Prev Housing subsidy section */}

                    </List>

                    <RaisedButton
                        label="Continue"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    />

                </React.Fragment>
            </MuiThemeProvider>
        }
        else if (this.state.isSecondPage){
            return <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="CPF Housing Grant Eligibility For Singles"/>
                    <List>

                        {/* Start of First timers section */}
                        <ListItem primaryText="Employment: Have at least 1 applicant that has been working for at least 12 months?"/>
                            <FormControl component="fieldset">
                                    <RadioGroup aria-label="employmentStatus" 
                                    name="employmentStatus" 
                                    value={this.employmentStatus} 
                                    onChange={this.handleChange('employmentStatus')}
                                    defaultValue={values.employmentStatus}>
                                    <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                    <FormControlLabel value="No" control={<Radio />} label="No" />
                                </RadioGroup>
                            </FormControl> 
                          {/* End of Lease section */}

                          {/* Start of Lease section */}
                          <ListItem
                            primaryText="Remaining lease of flat?"/>
                            <TextField 
                                hintText = "Enter remaining lease here"
                                floatingLabelFixed='lease'
                                onChange={this.handleChange('lease')}
                                defaultValue={values.lease}
                              />
                          {/* End of Lease section */}

                          {/* Start of income section */}
                          <ListItem
                            primaryText="What is the average gross monthly household income for the past 12 months"/>
                            <TextField 
                                hintText = "Enter average income here"
                                floatingLabelFixed='income'
                                onChange={this.handleChange('income')}
                                defaultValue={values.income}
                              /> 
                          {/* End of income section */}

                    </List>

                    <RaisedButton
                        label="Continue"
                        primary={true}
                        style={styles.button}
                        onClick={this.continueToResult}
                    />

                    <RaisedButton
                        label="Back"
                        primary={false}
                        style={styles.button}
                        onClick={this.back}
                    />

                </React.Fragment>
            </MuiThemeProvider>
            
        }
        else if (this.state.isResultPage){
            return <MuiThemeProvider>
                <React.Fragment>
                <AppBar title="CPF Housing Grant Eligibility For Singles"/>
                    <List>
                    <ListItem
                            primaryText = "Your amount of grants you are eligible for"
                            secondaryText = { grantMoniesResult }
                        />
                    </List>
                </React.Fragment>
            </MuiThemeProvider>
            
        }
        
    }
}

const styles = {
    button: {
        margin: 15
    }
}

export default UserFormBTO
