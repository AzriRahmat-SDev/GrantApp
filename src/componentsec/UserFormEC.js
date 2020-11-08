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

export class UserFormEC extends Component {

    state={

        citizenship: null,
        currentAge: null,
        lease: null,
        firstTimeBuyers: '',
        employmentStatus: '',
        flatType:'',
        currentFlatType:'',
        income: null,
        remainingYearsTo95: null,
        proRatedVariable: 0,
        grantMonies: null,
        grantMoniesStr: '$',
        grantMoniesResult: null,
        open:false,
        setOpen:false,

        //Page section
        isStartPage:true,
        isSecondPage:false,
        isSecondTimerPage:false,
        isResultPage:false,
        
        //Ternary section
        familyGrantMode:false,
        jointSingleGrantMode:false,
        singleGrantMode:false,
        mixedTimerGrantMode:false,
        
        
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

        this.setState({
            isSecondPage:false,isSecondTimerPage:false,isResultPage:true,
        },()=>{console.log(this.state)})

        if(this.state.singleGrantMode){
            this.toCheckForCalculationForSingleGrant()
        }
        
        if(this.state.jointSingleGrantMode){
            this.toCheckForCalculationForJointSingleGrant()
        }

        if(this.state.familyGrantMode){
            this.toCheckForCalculationForFamilyGrant()
        }

        if(this.state.mixedTimerGrantMode){
            this.toCheckForCalculationForMixedFamilyGrant()
        }

    };


    back = e => {
        e.preventDefault();
        this.setState({
            isStartPage: true,
            isSecondPage:false,
            isSecondTimerPage:false
        })

        //this.props.prevStep();
        
    };

    backToHome = () =>{
        this.setState({

            citizenship: null,
            currentAge: null,
            lease: null,
            firstTimeBuyers: '',
            employmentStatus: '',
            flatType:'',
            currentFlatType:'',
            income: null,
            familyNucleus: null,
            remainingYearsTo95: null,
            proRatedVariable: 0,
            grantMonies: null,
            grantMoniesStr: '$',
            grantMoniesResult: null,
            open:false,
            setOpen:false,
    
            //Page section
            isStartPage:true,
            isSecondPage:false,
            isSecondTimerPage:false,
            isResultPage:false,
            
            //Ternary section
            familyGrantMode:false,
            jointSingleGrantMode:false,
            secondTimerMode:false,
            singleGrantMode:false,
            mixedTimerGrantMode:false,
            nonCitizenSpouseMode:false
            
        })
    }

    toCheckForGrantType = () =>{

        const { currentAge, familyNucleus, firstTimeBuyers } = this.state

        if(
            currentAge >= 35 &&
            familyNucleus.includes("Singles Grant") &&
            firstTimeBuyers.includes("All First-Timers")
        )
        {
            this.setState({isSecondPage: true, singleGrantMode:true})

        }

        if(
            currentAge >= 35 &&
            familyNucleus.includes("Singles Grant") &&
            firstTimeBuyers.includes("One First-Timer, One Second-Timer")
        )
        {
            this.setState({isSecondPage: true, jointSingleGrantMode:true})
        }

        if(
            currentAge >= 21 &&
            familyNucleus.includes("Family Grant") &&
            firstTimeBuyers.includes("All First-Timers")
        )
        {
            this.setState({isSecondPage: true, familyGrantMode:true})
        }

        if(
            currentAge >= 21 &&
            familyNucleus.includes("Family Grant") &&
            firstTimeBuyers.includes("One First-Timer, One Second-Timer")
        )
        {
            this.setState({isSecondPage: true, mixedTimerGrantMode:true})
        }

    }

    toCheckForCalculationForSingleGrant = () =>{
        if(
            this.state.citizenship.includes("SC") &&
            (this.state.income >= 0 && this.state.income <= 10000) 
        )
        {
            this.setState({grantMoniesResult:'$15000'})
            return true;
        }
        else if(
            this.state.citizenship.includes("SC") &&
            (this.state.income > 10000 && this.state.income <= 11000)
        )
        {
            this.setState({grantMoniesResult:'$10000'})           
            return true;
        }
        else if(
            this.state.citizenship.includes("SC") &&
            (this.state.income > 11000 && this.state.income <= 12000)
        )
        {
            this.setState({grantMoniesResult:'$5000'})           
            return true;
        }
        else{
            this.setState({grantMoniesResult:'Sorry You Do Not Qualify For Any Grant'})
            return true;
        }
    }

    toCheckForCalculationForJointSingleGrant = () =>{
        if(
            this.state.citizenship.includes("SC/SC") &&
            (this.state.income >= 0 && this.state.income <= 10000) 
        )
        {
            this.setState({grantMoniesResult:'$15000'})
            return true;
        }
        else if(
            this.state.citizenship.includes("SC/SC") &&
            (this.state.income > 10000 && this.state.income <= 11000)
        )
        {
            this.setState({grantMoniesResult:'$10000'})           
            return true;
        }
        else if(
            this.state.citizenship.includes("SC/SC") &&
            (this.state.income > 11000 && this.state.income <= 12000)
        )
        {
            this.setState({grantMoniesResult:'$5000'})           
            return true;
        }
        else{
            this.setState({grantMoniesResult:'Sorry You Do Not Qualify For Any Grant'})
            return true;
        }
    }

    toCheckForCalculationForFamilyGrant = () =>{
        if(
            this.state.citizenship.includes("SC/SC") &&
            (this.state.income >= 0 && this.state.income <= 10000) 
        )
        {
            this.setState({grantMoniesResult:'$30000'})
            return true;
        }
        else if(
            this.state.citizenship.includes("SC/SC") &&
            (this.state.income > 10000 && this.state.income <= 11000)
        )
        {
            this.setState({grantMoniesResult:'$20000'})           
            return true;
        }
        else if(
            this.state.citizenship.includes("SC/SC") &&
            (this.state.income > 11000 && this.state.income <= 12000)
        )
        {
            this.setState({grantMoniesResult:'$10000'})           
            return true;
        }
        else if(
            this.state.citizenship.includes("SC/PR") &&
            (this.state.income >= 0 && this.state.income <= 10000)
        )
        {
            this.setState({grantMoniesResult:'$20000'})           
            return true;
        }
        else if(
            this.state.citizenship.includes("SC/PR") &&
            (this.state.income > 10000 && this.state.income <= 11000)
        )
        {
            this.setState({grantMoniesResult:'$10000'})           
            return true;
        }
        else{
            this.setState({grantMoniesResult:'Sorry You Do Not Qualify For Any Grant'})
            return true;
        }
    }

    toCheckForCalculationForMixedFamilyGrant = () =>{
        if(
            this.state.citizenship.includes("SC/SC") &&
            (this.state.income >= 0 && this.state.income <= 10000) 
        )
        {
            this.setState({grantMoniesResult:'$15000'})
            return true;
        }
        else if(
            this.state.citizenship.includes("SC/SC") &&
            (this.state.income > 10000 && this.state.income <= 11000)
        )
        {
            this.setState({grantMoniesResult:'$10000'})           
            return true;
        }
        else if(
            this.state.citizenship.includes("SC/SC") &&
            (this.state.income > 11000 && this.state.income <= 12000)
        )
        {
            this.setState({grantMoniesResult:'$5000'})           
            return true;
        }
        else{
            this.setState({grantMoniesResult:'Sorry You Do Not Qualify For Any Grant'})
            return true;
        }
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

        const { citizenship, currentAge, firstTimeBuyers, lease, employmentStatus,flatType,currentFlatType, income,remainingYearsTo95,proRatedVariable, typeOfFlat, familyNucleus, grantMonies, open, setOpen, grantMoniesStr, grantMoniesResult } = this.state
        const values = { citizenship, currentAge, firstTimeBuyers, lease, employmentStatus,flatType,currentFlatType, income,remainingYearsTo95,proRatedVariable, typeOfFlat, familyNucleus, grantMonies, open, setOpen, grantMoniesStr, grantMoniesResult}
         
        if(this.state.isStartPage){
            return <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="CPF Housing Grant Eligibility (EC)"/>
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
                                <MenuItem value="Singles Grant"> Single Or Joint-Single</MenuItem>
                                <MenuItem value="Family Grant">Married Couple</MenuItem>
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
                    <AppBar title="CPF Housing Grant Eligibility (EC)"/>
                    <List>

                        {/* Start of First timers section */}
                        <ListItem primaryText="Citizenship of Applicants"/>
                                <Button className={styles.button} onClick={this.handleOpen}>
                                    Option: 
                                </Button>
                            <FormControl className={styles.formControl}>
                                <InputLabel id="citizenship"></InputLabel>
                                <Select
                                labelId="citizenship-open-select-label"
                                id="citizenship"
                                open={this.open}
                                onClose={this.setOpen}
                                onOpen={this.setOpen}
                                onChange={this.handleChange('citizenship')}
                                value={values.citizenship}
                                >
                                <br/>
                                <MenuItem value= {1}>
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value="SC">I'am A Singaporean Citizen And I'am The Sole Applicant</MenuItem>
                                <MenuItem value="SC/SC"> I'am A Singaporean Citizen Co-Applying With Another Singaporean Citizen</MenuItem>
                                <MenuItem value="SC/PR"> I'am A Singaporean Citizen Co-Applying With A Singapore Permanent Resident </MenuItem> 
                                </Select>
                            </FormControl>
                          {/* End of Lease section */}

                          {/* Start of income section */}
                          <ListItem
                            primaryText="What Is The Average Gross Monthly Household Income For The Past 12 Months"/>
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
                <AppBar title="CPF Housing Grant Eligibility (EC)"/>
                    <List>
                    <ListItem
                            primaryText = "Your Amount Of Grants You Are Eligible For"
                            secondaryText = { grantMoniesResult }
                        />
                    </List>
                <RaisedButton
                    label="Back To Home"
                    primary={true}
                    style={styles.button}
                    href="/GrantApp"
                />
                <RaisedButton
                    label="More Entries?"
                    primary={false}
                    style={styles.button}
                    onClick={this.backToHome}
                />
                </React.Fragment>
            </MuiThemeProvider>
            
        }
        else{
            return <MuiThemeProvider>
            <React.Fragment>
                <AppBar title="CPF Housing Grant Eligibility (EC)"/>
                    <List>
                    <ListItem
                            primaryText = "Unfortunately You Are ot Eligible For Any Grants"
                        />
                    </List>
                <RaisedButton
                    label="Back To Home"
                    primary={true}
                    style={styles.button}
                    href="/GrantApp"
                />
                <RaisedButton
                    label="More Entries?"
                    primary={false}
                    style={styles.button}
                    onClick={this.backToHome}
                />
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

export default UserFormEC