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

        citizenship: null,
        currentAge: null,
        lease: null,
        firstTimeBuyers: '',
        employmentStatus: '',
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
        isResultPage:false,
        
        //Ternary section
        familyGrantMode:false,
        jointSingleGrantMode:false,
        secondTimerGrantMode:false,
        singleGrantMode:false,
        mixedTimerGrantMode:false,
        nonCitizenSpouseMode:false
        
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
        this.setState({
            isSecondPage:false,isResultPage:true,
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

        if(this.state.secondTimerGrantMode){
            this.toCheckForCalculationForSecondTimerGrant()
        }

        if(this.state.nonCitizenSpouseMode){
            this.to.toCheckForCalculationForNonCitizenSpouse()
        }

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
            remainingYearsTo95: null,
            proRatedVariable: 0,
            grantMonies: '',
            grantMoniesResult: '',
            grantMoniesStr: '$',
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
            familyNucleus.includes("Joint Singles Grant") &&
            firstTimeBuyers.includes("All First-Timers")
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
            firstTimeBuyers.includes("Second-Timers")
        )
        {
            this.setState({isSecondPage: false, secondTimerGrantMode:true})
        }

        if(
            currentAge >= 21 &&
            familyNucleus.includes("Family Grant") &&
            firstTimeBuyers.includes("One First-Timer, One Second-Timer")
        )
        {
            this.setState({isSecondPage: true, mixedTimerGrantMode:true})
        }

        if(
            currentAge >= 35 &&
            familyNucleus.includes("Non Citizen Spouse Scheme") &&
            firstTimeBuyers.includes("All First-Timers")
        )
        {
            this.setState({isSecondPage: true, nonCitizenSpouseMode:true})

        }
    }

    proratedCalculation = () =>{
        //const { grantMonies,proRatedVariable} = this.state;
        this.setState(
            {grantMoniesResult:"$" + this.state.grantMonies * this.state.proRatedVariable.toFixed(2)
        },()=> {}
        
        )
    }

    toCheckForCalculationForSingleGrant = () =>{
        if(
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 0 && this.state.income < 750) 
        )
        {
            let proRatedVariable = this.state.lease/(95-this.state.currentAge)
            this.setState({
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            },()=>{})
            
            if((proRatedVariable < 1)){
                this.setState({
                    grantMoniesResult: this.state.grantMoniesStr + (40000 * proRatedVariable.toFixed(2))
                },()=>{})
            }else{
                this.setState({
                    grantMoniesResult:'$40000'
                })
            }
            return true;
        }else if(
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 750 && this.state.income < 1000)
        )
        {
            let proRatedVariable = this.state.lease/(95-this.state.currentAge)
            this.setState({
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            },()=>{})
            
            if((proRatedVariable < 1)){
                this.setState({
                    grantMoniesResult: this.state.grantMoniesStr + (37500 * proRatedVariable.toFixed(2))
                },()=>{})
            }else{
                this.setState({
                    grantMoniesResult:'$37500'
                })
            }
            return true;
        }else if(
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 1000 && this.state.income < 1250)
        )
        {
            let proRatedVariable = this.state.lease/(95-this.state.currentAge)
            this.setState({
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            },()=>{})
            
            if((proRatedVariable < 1)){
                this.setState({
                    grantMoniesResult: this.state.grantMoniesStr + (35000 * proRatedVariable.toFixed(2))
                },()=>{})
            }else{
                this.setState({
                    grantMoniesResult:'$35000'
                })
            }
            return true;
        }else if(
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 1250 && this.state.income < 1500)
        )
        {
            let proRatedVariable = this.state.lease/(95-this.state.currentAge)
            this.setState({
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            },()=>{})
            
            if((proRatedVariable < 1)){
                this.setState({
                    grantMoniesResult: this.state.grantMoniesStr + (32500 * proRatedVariable.toFixed(2))
                },()=>{})
            }else{
                this.setState({
                    grantMoniesResult:'$32500'
                })
            }
            return true;
        }else if(
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 1500 && this.state.income < 1750)
        )
        {
            let proRatedVariable = this.state.lease/(95-this.state.currentAge)
            this.setState({
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            },()=>{})
            
            if((proRatedVariable < 1)){
                this.setState({
                    grantMoniesResult: this.state.grantMoniesStr + (30000 * proRatedVariable.toFixed(2))
                },()=>{})
            }else{
                this.setState({
                    grantMoniesResult:'$30000'
                })
            }
            return true;
        }else if(
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 1750 && this.state.income < 2000)
        )
        {
            let proRatedVariable = this.state.lease/(95-this.state.currentAge)
            this.setState({
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            },()=>{})
            
            if((proRatedVariable < 1)){
                this.setState({
                    grantMoniesResult: this.state.grantMoniesStr + (27500 * proRatedVariable.toFixed(2))
                },()=>{})
            }else{
                this.setState({
                    grantMoniesResult:'$27500'
                })
            }
            return true;
        }else if(
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 2000 && this.state.income < 2250)
        )
        {
            let proRatedVariable = this.state.lease/(95-this.state.currentAge)
            this.setState({
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            },()=>{})
            
            if((proRatedVariable < 1)){
                this.setState({
                    grantMoniesResult: this.state.grantMoniesStr + (25000 * proRatedVariable.toFixed(2))
                },()=>{})
            }else{
                this.setState({
                    grantMoniesResult:'$25000'
                })
            }
            return true;
        }else if(
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 2250 && this.state.income < 2500)
        )
        {
            let proRatedVariable = this.state.lease/(95-this.state.currentAge)
            this.setState({
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            },()=>{})
            
            if((proRatedVariable < 1)){
                this.setState({
                    grantMoniesResult: this.state.grantMoniesStr + (22500 * proRatedVariable.toFixed(2))
                },()=>{})
            }else{
                this.setState({
                    grantMoniesResult:'$22500'
                })
            }
            return true;
        }else if(
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 2500 && this.state.income < 2750)
        )
        {
            let proRatedVariable = this.state.lease/(95-this.state.currentAge)
            this.setState({
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            },()=>{})
            
            if((proRatedVariable < 1)){
                this.setState({
                    grantMoniesResult: this.state.grantMoniesStr + (20000 * proRatedVariable.toFixed(2))
                },()=>{})
            }else{
                this.setState({
                    grantMoniesResult:'$20000'
                })
            }
            return true;
        }else if(
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 2750 && this.state.income < 3000)
        )
        {
            let proRatedVariable = this.state.lease/(95-this.state.currentAge)
            this.setState({
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            },()=>{})
            
            if((proRatedVariable < 1)){
                this.setState({
                    grantMoniesResult: this.state.grantMoniesStr + (17500 * proRatedVariable.toFixed(2))
                },()=>{})
            }else{
                this.setState({
                    grantMoniesResult:'$17500'
                })
            }
            return true;
        }else if(
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 3000 && this.state.income < 3250)
        )
        {
            let proRatedVariable = this.state.lease/(95-this.state.currentAge)
            this.setState({
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            },()=>{})
            
            if((proRatedVariable < 1)){
                this.setState({
                    grantMoniesResult: this.state.grantMoniesStr + (15000 * proRatedVariable.toFixed(2))
                },()=>{})
            }else{
                this.setState({
                    grantMoniesResult:'$15000'
                })
            }
            return true;
        }else if(
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 3250 && this.state.income < 3500)
        )
        {
            let proRatedVariable = this.state.lease/(95-this.state.currentAge)
            this.setState({
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            },()=>{})
            
            if((proRatedVariable < 1)){
                this.setState({
                    grantMoniesResult: this.state.grantMoniesStr + (12500 * proRatedVariable.toFixed(2))
                },()=>{})
            }else{
                this.setState({
                    grantMoniesResult:'$12500'
                })
            }
            return true;
        }else if(
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 3500 && this.state.income < 3750)
        )
        {
            let proRatedVariable = this.state.lease/(95-this.state.currentAge)
            this.setState({
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            },()=>{})
            
            if((proRatedVariable < 1)){
                this.setState({
                    grantMoniesResult: this.state.grantMoniesStr + (10000 * proRatedVariable.toFixed(2))
                },()=>{})
            }else{
                this.setState({
                    grantMoniesResult:'$10000'
                })
            }
            return true;
        }else if(
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 3750 && this.state.income < 4000)
        )
        {
            let proRatedVariable = this.state.lease/(95-this.state.currentAge)
            this.setState({
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            },()=>{})
            
            if((proRatedVariable < 1)){
                this.setState({
                    grantMoniesResult: this.state.grantMoniesStr + (7500 * proRatedVariable.toFixed(2))
                },()=>{})
            }else{
                this.setState({
                    grantMoniesResult:'$7500'
                })
            }
            return true;
        }else if(
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 4000 && this.state.income < 4250)
        )
        {
            let proRatedVariable = this.state.lease/(95-this.state.currentAge)
            this.setState({
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            },()=>{})
            
            if((proRatedVariable < 1)){
                this.setState({
                    grantMoniesResult: this.state.grantMoniesStr + (5000 * proRatedVariable.toFixed(2))
                },()=>{})
            }else{
                this.setState({
                    grantMoniesResult:'$5000'
                })
            }
            return true;
        }else if(
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 4250 && this.state.income < 4500)
        )
        {
            let proRatedVariable = this.state.lease/(95-this.state.currentAge)
            this.setState({
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            },()=>{})
            
            if((proRatedVariable < 1)){
                this.setState({
                    grantMoniesResult: this.state.grantMoniesStr + (2500 * proRatedVariable.toFixed(2))
                },()=>{})
            }else{
                this.setState({
                    grantMoniesResult:'$2500'
                })
            }
            return true;
        }
    }

    toCheckForCalculationForJointSingleGrant = () =>{
        if(
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 0 && this.state.income < 1500) 
        )
        {
            let proRatedVariable = this.state.lease/(95-this.state.currentAge)
            this.setState({
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            },()=>{})
            
            if((proRatedVariable < 1)){
                this.setState({
                    grantMoniesResult: this.state.grantMoniesStr + (80000 * proRatedVariable.toFixed(2))
                },()=>{})
            }else{
                this.setState({
                    grantMoniesResult:'$80000'
                })
            }
            return true;
        }else if(
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 1500 && this.state.income < 2000)
        )
        {
            let proRatedVariable = this.state.lease/(95-this.state.currentAge)
            this.setState({
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            },()=>{})
            
            if((proRatedVariable < 1)){
                this.setState({
                    grantMoniesResult: this.state.grantMoniesStr + (75000 * proRatedVariable.toFixed(2))
                },()=>{})
            }else{
                this.setState({
                    grantMoniesResult:'$75000'
                })
            }
            return true;
        }else if(
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 2000 && this.state.income < 2500)
        )
        {
            let proRatedVariable = this.state.lease/(95-this.state.currentAge)
            this.setState({
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            },()=>{})
            
            if((proRatedVariable < 1)){
                this.setState({
                    grantMoniesResult: this.state.grantMoniesStr + (70000 * proRatedVariable.toFixed(2))
                },()=>{})
            }else{
                this.setState({
                    grantMoniesResult:'$70000'
                })
            }
            return true;
        }else if(
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 2500 && this.state.income < 3000)
        )
        {
            let proRatedVariable = this.state.lease/(95-this.state.currentAge)
            this.setState({
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            },()=>{})
            
            if((proRatedVariable < 1)){
                this.setState({
                    grantMoniesResult: this.state.grantMoniesStr + (65000 * proRatedVariable.toFixed(2))
                },()=>{})
            }else{
                this.setState({
                    grantMoniesResult:'$65000'
                })
            }
            return true;
        }else if(
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 3000 && this.state.income < 3500)
        )
        {
            let proRatedVariable = this.state.lease/(95-this.state.currentAge)
            this.setState({
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            },()=>{})
            
            if((proRatedVariable < 1)){
                this.setState({
                    grantMoniesResult: this.state.grantMoniesStr + (60000 * proRatedVariable.toFixed(2))
                },()=>{})
            }else{
                this.setState({
                    grantMoniesResult:'$60000'
                })
            }
            return true;
        }else if(
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 3500 && this.state.income < 4000)
        )
        {
            let proRatedVariable = this.state.lease/(95-this.state.currentAge)
            this.setState({
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            },()=>{})
            
            if((proRatedVariable < 1)){
                this.setState({
                    grantMoniesResult: this.state.grantMoniesStr + (55000 * proRatedVariable.toFixed(2))
                },()=>{})
            }else{
                this.setState({
                    grantMoniesResult:'$55000'
                })
            }
            return true;
        }else if(
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 4000 && this.state.income < 4500)
        )
        {
            let proRatedVariable = this.state.lease/(95-this.state.currentAge)
            this.setState({
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            },()=>{})
            
            if((proRatedVariable < 1)){
                this.setState({
                    grantMoniesResult: this.state.grantMoniesStr + (50000 * proRatedVariable.toFixed(2))
                },()=>{})
            }else{
                this.setState({
                    grantMoniesResult:'$50000'
                })
            }
            return true;
        }else if(
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 4500 && this.state.income < 5000)
        )
        {
            let proRatedVariable = this.state.lease/(95-this.state.currentAge)
            this.setState({
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            },()=>{})
            
            if((proRatedVariable < 1)){
                this.setState({
                    grantMoniesResult: this.state.grantMoniesStr + (45000 * proRatedVariable.toFixed(2))
                },()=>{})
            }else{
                this.setState({
                    grantMoniesResult:'$45000'
                })
            }
            return true;
        }else if(
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 5000 && this.state.income < 5000)
        )
        {
            let proRatedVariable = this.state.lease/(95-this.state.currentAge)
            this.setState({
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            },()=>{})
            
            if((proRatedVariable < 1)){
                this.setState({
                    grantMoniesResult: this.state.grantMoniesStr + (40000 * proRatedVariable.toFixed(2))
                },()=>{})
            }else{
                this.setState({
                    grantMoniesResult:'$40000'
                })
            }
            return true;
        }else if(
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 5000 && this.state.income < 6000)
        )
        {
            let proRatedVariable = this.state.lease/(95-this.state.currentAge)
            this.setState({
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            },()=>{})
            
            if((proRatedVariable < 1)){
                this.setState({
                    grantMoniesResult: this.state.grantMoniesStr + (35000 * proRatedVariable.toFixed(2))
                },()=>{})
            }else{
                this.setState({
                    grantMoniesResult:'$35000'
                })
            }
            return true;
        }else if(
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 6000 && this.state.income < 6500)
        )
        {
            let proRatedVariable = this.state.lease/(95-this.state.currentAge)
            this.setState({
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            },()=>{})
            
            if((proRatedVariable < 1)){
                this.setState({
                    grantMoniesResult: this.state.grantMoniesStr + (30000 * proRatedVariable.toFixed(2))
                },()=>{})
            }else{
                this.setState({
                    grantMoniesResult:'$30000'
                })
            }
            return true;
        }else if(
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 6500 && this.state.income < 7000)
        )
        {
            let proRatedVariable = this.state.lease/(95-this.state.currentAge)
            this.setState({
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            },()=>{})
            
            if((proRatedVariable < 1)){
                this.setState({
                    grantMoniesResult: this.state.grantMoniesStr + (25000 * proRatedVariable.toFixed(2))
                },()=>{})
            }else{
                this.setState({
                    grantMoniesResult:'$25000'
                })
            }
            return true;
        }else if(
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 7000 && this.state.income < 7500)
        )
        {
            let proRatedVariable = this.state.lease/(95-this.state.currentAge)
            this.setState({
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            },()=>{})
            
            if((proRatedVariable < 1)){
                this.setState({
                    grantMoniesResult: this.state.grantMoniesStr + (20000 * proRatedVariable.toFixed(2))
                },()=>{})
            }else{
                this.setState({
                    grantMoniesResult:'$20000'
                })
            }
            return true;
        }else if(
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 7500 && this.state.income < 8000)
        )
        {
            let proRatedVariable = this.state.lease/(95-this.state.currentAge)
            this.setState({
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            },()=>{})
            
            if((proRatedVariable < 1)){
                this.setState({
                    grantMoniesResult: this.state.grantMoniesStr + (15000 * proRatedVariable.toFixed(2))
                },()=>{})
            }else{
                this.setState({
                    grantMoniesResult:'$15000'
                })
            }
            return true;
        }else if(
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 8000 && this.state.income < 8500)
        )
        {
            let proRatedVariable = this.state.lease/(95-this.state.currentAge)
            this.setState({
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            },()=>{})
            
            if((proRatedVariable < 1)){
                this.setState({
                    grantMoniesResult: this.state.grantMoniesStr + (10000 * proRatedVariable.toFixed(2))
                },()=>{})
            }else{
                this.setState({
                    grantMoniesResult:'$10000'
                })
            }
            return true;
        }else if(
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 8500 && this.state.income < 9000)
        )
        {
            let proRatedVariable = this.state.lease/(95-this.state.currentAge)
            this.setState({
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            },()=>{})
            
            if((proRatedVariable < 1)){
                this.setState({
                    grantMoniesResult: this.state.grantMoniesStr + (5000 * proRatedVariable.toFixed(2))
                },()=>{})
            }else{
                this.setState({
                    grantMoniesResult:'$5000'
                })
            }
            return true;
        }
    }

    toCheckForCalculationForFamilyGrant = () =>{
        if(
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 0 && this.state.income < 1500) 
        )
        {
            let proRatedVariable = this.state.lease/(95-this.state.currentAge)
            this.setState({
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            },()=>{})
            
            if((proRatedVariable < 1)){
                this.setState({
                    grantMoniesResult: this.state.grantMoniesStr + (80000 * proRatedVariable.toFixed(2))
                },()=>{})
            }else{
                this.setState({
                    grantMoniesResult:'$80000'
                })
            }
            return true;
        }else if(
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 1500 && this.state.income < 2000)
        )
        {
            let proRatedVariable = this.state.lease/(95-this.state.currentAge)
            this.setState({
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            },()=>{})
            
            if((proRatedVariable < 1)){
                this.setState({
                    grantMoniesResult: this.state.grantMoniesStr + (75000 * proRatedVariable.toFixed(2))
                },()=>{})
            }else{
                this.setState({
                    grantMoniesResult:'$75000'
                })
            }
            return true;
        }else if(
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 2000 && this.state.income < 2500)
        )
        {
            let proRatedVariable = this.state.lease/(95-this.state.currentAge)
            this.setState({
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            },()=>{})
            
            if((proRatedVariable < 1)){
                this.setState({
                    grantMoniesResult: this.state.grantMoniesStr + (70000 * proRatedVariable.toFixed(2))
                },()=>{})
            }else{
                this.setState({
                    grantMoniesResult:'$70000'
                })
            }
            return true;
        }else if(
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 2500 && this.state.income < 3000)
        )
        {
            let proRatedVariable = this.state.lease/(95-this.state.currentAge)
            this.setState({
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            },()=>{})
            
            if((proRatedVariable < 1)){
                this.setState({
                    grantMoniesResult: this.state.grantMoniesStr + (65000 * proRatedVariable.toFixed(2))
                },()=>{})
            }else{
                this.setState({
                    grantMoniesResult:'$65000'
                })
            }
            return true;
        }else if(
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 3000 && this.state.income < 3500)
        )
        {
            let proRatedVariable = this.state.lease/(95-this.state.currentAge)
            this.setState({
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            },()=>{})
            
            if((proRatedVariable < 1)){
                this.setState({
                    grantMoniesResult: this.state.grantMoniesStr + (60000 * proRatedVariable.toFixed(2))
                },()=>{})
            }else{
                this.setState({
                    grantMoniesResult:'$60000'
                })
            }
            return true;
        }else if(
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 3500 && this.state.income < 4000)
        )
        {
            let proRatedVariable = this.state.lease/(95-this.state.currentAge)
            this.setState({
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            },()=>{})
            
            if((proRatedVariable < 1)){
                this.setState({
                    grantMoniesResult: this.state.grantMoniesStr + (55000 * proRatedVariable.toFixed(2))
                },()=>{})
            }else{
                this.setState({
                    grantMoniesResult:'$55000'
                })
            }
            return true;
        }else if(
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 4000 && this.state.income < 4500)
        )
        {
            let proRatedVariable = this.state.lease/(95-this.state.currentAge)
            this.setState({
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            },()=>{})
            
            if((proRatedVariable < 1)){
                this.setState({
                    grantMoniesResult: this.state.grantMoniesStr + (50000 * proRatedVariable.toFixed(2))
                },()=>{})
            }else{
                this.setState({
                    grantMoniesResult:'$50000'
                })
            }
            return true;
        }else if(
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 4500 && this.state.income < 5000)
        )
        {
            let proRatedVariable = this.state.lease/(95-this.state.currentAge)
            this.setState({
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            },()=>{})
            
            if((proRatedVariable < 1)){
                this.setState({
                    grantMoniesResult: this.state.grantMoniesStr + (45000 * proRatedVariable.toFixed(2))
                },()=>{})
            }else{
                this.setState({
                    grantMoniesResult:'$45000'
                })
            }
            return true;
        }else if(
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 5000 && this.state.income < 5000)
        )
        {
            let proRatedVariable = this.state.lease/(95-this.state.currentAge)
            this.setState({
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            },()=>{})
            
            if((proRatedVariable < 1)){
                this.setState({
                    grantMoniesResult: this.state.grantMoniesStr + (40000 * proRatedVariable.toFixed(2))
                },()=>{})
            }else{
                this.setState({
                    grantMoniesResult:'$40000'
                })
            }
            return true;
        }else if(
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 5000 && this.state.income < 6000)
        )
        {
            let proRatedVariable = this.state.lease/(95-this.state.currentAge)
            this.setState({
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            },()=>{})
            
            if((proRatedVariable < 1)){
                this.setState({
                    grantMoniesResult: this.state.grantMoniesStr + (35000 * proRatedVariable.toFixed(2))
                },()=>{})
            }else{
                this.setState({
                    grantMoniesResult:'$35000'
                })
            }
            return true;
        }else if(
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 6000 && this.state.income < 6500)
        )
        {
            let proRatedVariable = this.state.lease/(95-this.state.currentAge)
            this.setState({
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            },()=>{})
            
            if((proRatedVariable < 1)){
                this.setState({
                    grantMoniesResult: this.state.grantMoniesStr + (30000 * proRatedVariable.toFixed(2))
                },()=>{})
            }else{
                this.setState({
                    grantMoniesResult:'$30000'
                })
            }
            return true;
        }else if(
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 6500 && this.state.income < 7000)
        )
        {
            let proRatedVariable = this.state.lease/(95-this.state.currentAge)
            this.setState({
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            },()=>{})
            
            if((proRatedVariable < 1)){
                this.setState({
                    grantMoniesResult: this.state.grantMoniesStr + (25000 * proRatedVariable.toFixed(2))
                },()=>{})
            }else{
                this.setState({
                    grantMoniesResult:'$25000'
                })
            }
            return true;
        }else if(
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 7000 && this.state.income < 7500)
        )
        {
            let proRatedVariable = this.state.lease/(95-this.state.currentAge)
            this.setState({
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            },()=>{})
            
            if((proRatedVariable < 1)){
                this.setState({
                    grantMoniesResult: this.state.grantMoniesStr + (20000 * proRatedVariable.toFixed(2))
                },()=>{})
            }else{
                this.setState({
                    grantMoniesResult:'$20000'
                })
            }
            return true;
        }else if(
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 7500 && this.state.income < 8000)
        )
        {
            let proRatedVariable = this.state.lease/(95-this.state.currentAge)
            this.setState({
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            },()=>{})
            
            if((proRatedVariable < 1)){
                this.setState({
                    grantMoniesResult: this.state.grantMoniesStr + (15000 * proRatedVariable.toFixed(2))
                },()=>{})
            }else{
                this.setState({
                    grantMoniesResult:'$15000'
                })
            }
            return true;
        }else if(
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 8000 && this.state.income < 8500)
        )
        {
            let proRatedVariable = this.state.lease/(95-this.state.currentAge)
            this.setState({
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            },()=>{})
            
            if((proRatedVariable < 1)){
                this.setState({
                    grantMoniesResult: this.state.grantMoniesStr + (10000 * proRatedVariable.toFixed(2))
                },()=>{})
            }else{
                this.setState({
                    grantMoniesResult:'$10000'
                })
            }
            return true;
        }else if(
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 8500 && this.state.income < 9000)
        )
        {
            let proRatedVariable = this.state.lease/(95-this.state.currentAge)
            this.setState({
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            },()=>{})
            
            if((proRatedVariable < 1)){
                this.setState({
                    grantMoniesResult: this.state.grantMoniesStr + (5000 * proRatedVariable.toFixed(2))
                },()=>{})
            }else{
                this.setState({
                    grantMoniesResult:'$5000'
                })
            }
            return true;
        }
    }

    toCheckForCalculationForMixedFamilyGrant = () =>{
        if(
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 0 && this.state.income < 750) 
        )
        {
            let proRatedVariable = this.state.lease/(95-this.state.currentAge)
            this.setState({
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            },()=>{})
            
            if((proRatedVariable < 1)){
                this.setState({
                    grantMoniesResult: this.state.grantMoniesStr + (40000 * proRatedVariable.toFixed(2))
                },()=>{})
            }else{
                this.setState({
                    grantMoniesResult:'$40000'
                })
            }
            return true;
        }else if(
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 750 && this.state.income < 1000)
        )
        {
            let proRatedVariable = this.state.lease/(95-this.state.currentAge)
            this.setState({
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            },()=>{})
            
            if((proRatedVariable < 1)){
                this.setState({
                    grantMoniesResult: this.state.grantMoniesStr + (37500 * proRatedVariable.toFixed(2))
                },()=>{})
            }else{
                this.setState({
                    grantMoniesResult:'$37500'
                })
            }
            return true;
        }else if(
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 1000 && this.state.income < 1250)
        )
        {
            let proRatedVariable = this.state.lease/(95-this.state.currentAge)
            this.setState({
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            },()=>{})
            
            if((proRatedVariable < 1)){
                this.setState({
                    grantMoniesResult: this.state.grantMoniesStr + (35000 * proRatedVariable.toFixed(2))
                },()=>{})
            }else{
                this.setState({
                    grantMoniesResult:'$35000'
                })
            }
            return true;
        }else if(
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 1250 && this.state.income < 1500)
        )
        {
            let proRatedVariable = this.state.lease/(95-this.state.currentAge)
            this.setState({
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            },()=>{})
            
            if((proRatedVariable < 1)){
                this.setState({
                    grantMoniesResult: this.state.grantMoniesStr + (32500 * proRatedVariable.toFixed(2))
                },()=>{})
            }else{
                this.setState({
                    grantMoniesResult:'$32500'
                })
            }
            return true;
        }else if(
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 1500 && this.state.income < 1750)
        )
        {
            let proRatedVariable = this.state.lease/(95-this.state.currentAge)
            this.setState({
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            },()=>{})
            
            if((proRatedVariable < 1)){
                this.setState({
                    grantMoniesResult: this.state.grantMoniesStr + (30000 * proRatedVariable.toFixed(2))
                },()=>{})
            }else{
                this.setState({
                    grantMoniesResult:'$30000'
                })
            }
            return true;
        }else if(
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 1750 && this.state.income < 2000)
        )
        {
            let proRatedVariable = this.state.lease/(95-this.state.currentAge)
            this.setState({
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            },()=>{})
            
            if((proRatedVariable < 1)){
                this.setState({
                    grantMoniesResult: this.state.grantMoniesStr + (27500 * proRatedVariable.toFixed(2))
                },()=>{})
            }else{
                this.setState({
                    grantMoniesResult:'$27500'
                })
            }
            return true;
        }else if(
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 2000 && this.state.income < 2250)
        )
        {
            let proRatedVariable = this.state.lease/(95-this.state.currentAge)
            this.setState({
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            },()=>{})
            
            if((proRatedVariable < 1)){
                this.setState({
                    grantMoniesResult: this.state.grantMoniesStr + (25000 * proRatedVariable.toFixed(2))
                },()=>{})
            }else{
                this.setState({
                    grantMoniesResult:'$25000'
                })
            }
            return true;
        }else if(
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 2250 && this.state.income < 2500)
        )
        {
            let proRatedVariable = this.state.lease/(95-this.state.currentAge)
            this.setState({
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            },()=>{})
            
            if((proRatedVariable < 1)){
                this.setState({
                    grantMoniesResult: this.state.grantMoniesStr + (22500 * proRatedVariable.toFixed(2))
                },()=>{})
            }else{
                this.setState({
                    grantMoniesResult:'$22500'
                })
            }
            return true;
        }else if(
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 2500 && this.state.income < 2750)
        )
        {
            let proRatedVariable = this.state.lease/(95-this.state.currentAge)
            this.setState({
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            },()=>{})
            
            if((proRatedVariable < 1)){
                this.setState({
                    grantMoniesResult: this.state.grantMoniesStr + (20000 * proRatedVariable.toFixed(2))
                },()=>{})
            }else{
                this.setState({
                    grantMoniesResult:'$20000'
                })
            }
            return true;
        }else if(
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 2750 && this.state.income < 3000)
        )
        {
            let proRatedVariable = this.state.lease/(95-this.state.currentAge)
            this.setState({
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            },()=>{})
            
            if((proRatedVariable < 1)){
                this.setState({
                    grantMoniesResult: this.state.grantMoniesStr + (17500 * proRatedVariable.toFixed(2))
                },()=>{})
            }else{
                this.setState({
                    grantMoniesResult:'$17500'
                })
            }
            return true;
        }else if(
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 3000 && this.state.income < 3250)
        )
        {
            let proRatedVariable = this.state.lease/(95-this.state.currentAge)
            this.setState({
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            },()=>{})
            
            if((proRatedVariable < 1)){
                this.setState({
                    grantMoniesResult: this.state.grantMoniesStr + (15000 * proRatedVariable.toFixed(2))
                },()=>{})
            }else{
                this.setState({
                    grantMoniesResult:'$15000'
                })
            }
            return true;
        }else if(
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 3250 && this.state.income < 3500)
        )
        {
            let proRatedVariable = this.state.lease/(95-this.state.currentAge)
            this.setState({
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            },()=>{})
            
            if((proRatedVariable < 1)){
                this.setState({
                    grantMoniesResult: this.state.grantMoniesStr + (12500 * proRatedVariable.toFixed(2))
                },()=>{})
            }else{
                this.setState({
                    grantMoniesResult:'$12500'
                })
            }
            return true;
        }else if(
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 3500 && this.state.income < 3750)
        )
        {
            let proRatedVariable = this.state.lease/(95-this.state.currentAge)
            this.setState({
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            },()=>{})
            
            if((proRatedVariable < 1)){
                this.setState({
                    grantMoniesResult: this.state.grantMoniesStr + (10000 * proRatedVariable.toFixed(2))
                },()=>{})
            }else{
                this.setState({
                    grantMoniesResult:'$10000'
                })
            }
            return true;
        }else if(
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 3750 && this.state.income < 4000)
        )
        {
            let proRatedVariable = this.state.lease/(95-this.state.currentAge)
            this.setState({
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            },()=>{})
            
            if((proRatedVariable < 1)){
                this.setState({
                    grantMoniesResult: this.state.grantMoniesStr + (7500 * proRatedVariable.toFixed(2))
                },()=>{})
            }else{
                this.setState({
                    grantMoniesResult:'$7500'
                })
            }
            return true;
        }else if(
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 4000 && this.state.income < 4250)
        )
        {
            let proRatedVariable = this.state.lease/(95-this.state.currentAge)
            this.setState({
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            },()=>{})
            
            if((proRatedVariable < 1)){
                this.setState({
                    grantMoniesResult: this.state.grantMoniesStr + (5000 * proRatedVariable.toFixed(2))
                },()=>{})
            }else{
                this.setState({
                    grantMoniesResult:'$5000'
                })
            }
            return true;
        }else if(
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 4250 && this.state.income < 4500)
        )
        {
            let proRatedVariable = this.state.lease/(95-this.state.currentAge)
            this.setState({
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            },()=>{})
            
            if((proRatedVariable < 1)){
                this.setState({
                    grantMoniesResult: this.state.grantMoniesStr + (2500 * proRatedVariable.toFixed(2))
                },()=>{})
            }else{
                this.setState({
                    grantMoniesResult:'$2500'
                })
            }
            return true;
        }
    }

    toCheckForCalculationForSecondTimerGrant = () =>{
        return true
    }

    toCheckForCalculationForNonCitizenSpouse = () => {
        if(
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 0 && this.state.income < 750) 
        )
        {
            let proRatedVariable = this.state.lease/(95-this.state.currentAge)
            this.setState({
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            },()=>{})
            
            if((proRatedVariable < 1)){
                this.setState({
                    grantMoniesResult: this.state.grantMoniesStr + (40000 * proRatedVariable.toFixed(2))
                },()=>{})
            }else{
                this.setState({
                    grantMoniesResult:'$40000'
                })
            }
            return true;
        }else if(
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 750 && this.state.income < 1000)
        )
        {
            let proRatedVariable = this.state.lease/(95-this.state.currentAge)
            this.setState({
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            },()=>{})
            
            if((proRatedVariable < 1)){
                this.setState({
                    grantMoniesResult: this.state.grantMoniesStr + (37500 * proRatedVariable.toFixed(2))
                },()=>{})
            }else{
                this.setState({
                    grantMoniesResult:'$37500'
                })
            }
            return true;
        }else if(
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 1000 && this.state.income < 1250)
        )
        {
            let proRatedVariable = this.state.lease/(95-this.state.currentAge)
            this.setState({
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            },()=>{})
            
            if((proRatedVariable < 1)){
                this.setState({
                    grantMoniesResult: this.state.grantMoniesStr + (35000 * proRatedVariable.toFixed(2))
                },()=>{})
            }else{
                this.setState({
                    grantMoniesResult:'$35000'
                })
            }
            return true;
        }else if(
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 1250 && this.state.income < 1500)
        )
        {
            let proRatedVariable = this.state.lease/(95-this.state.currentAge)
            this.setState({
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            },()=>{})
            
            if((proRatedVariable < 1)){
                this.setState({
                    grantMoniesResult: this.state.grantMoniesStr + (32500 * proRatedVariable.toFixed(2))
                },()=>{})
            }else{
                this.setState({
                    grantMoniesResult:'$32500'
                })
            }
            return true;
        }else if(
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 1500 && this.state.income < 1750)
        )
        {
            let proRatedVariable = this.state.lease/(95-this.state.currentAge)
            this.setState({
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            },()=>{})
            
            if((proRatedVariable < 1)){
                this.setState({
                    grantMoniesResult: this.state.grantMoniesStr + (30000 * proRatedVariable.toFixed(2))
                },()=>{})
            }else{
                this.setState({
                    grantMoniesResult:'$30000'
                })
            }
            return true;
        }else if(
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 1750 && this.state.income < 2000)
        )
        {
            let proRatedVariable = this.state.lease/(95-this.state.currentAge)
            this.setState({
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            },()=>{})
            
            if((proRatedVariable < 1)){
                this.setState({
                    grantMoniesResult: this.state.grantMoniesStr + (27500 * proRatedVariable.toFixed(2))
                },()=>{})
            }else{
                this.setState({
                    grantMoniesResult:'$27500'
                })
            }
            return true;
        }else if(
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 2000 && this.state.income < 2250)
        )
        {
            let proRatedVariable = this.state.lease/(95-this.state.currentAge)
            this.setState({
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            },()=>{})
            
            if((proRatedVariable < 1)){
                this.setState({
                    grantMoniesResult: this.state.grantMoniesStr + (25000 * proRatedVariable.toFixed(2))
                },()=>{})
            }else{
                this.setState({
                    grantMoniesResult:'$25000'
                })
            }
            return true;
        }else if(
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 2250 && this.state.income < 2500)
        )
        {
            let proRatedVariable = this.state.lease/(95-this.state.currentAge)
            this.setState({
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            },()=>{})
            
            if((proRatedVariable < 1)){
                this.setState({
                    grantMoniesResult: this.state.grantMoniesStr + (22500 * proRatedVariable.toFixed(2))
                },()=>{})
            }else{
                this.setState({
                    grantMoniesResult:'$22500'
                })
            }
            return true;
        }else if(
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 2500 && this.state.income < 2750)
        )
        {
            let proRatedVariable = this.state.lease/(95-this.state.currentAge)
            this.setState({
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            },()=>{})
            
            if((proRatedVariable < 1)){
                this.setState({
                    grantMoniesResult: this.state.grantMoniesStr + (20000 * proRatedVariable.toFixed(2))
                },()=>{})
            }else{
                this.setState({
                    grantMoniesResult:'$20000'
                })
            }
            return true;
        }else if(
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 2750 && this.state.income < 3000)
        )
        {
            let proRatedVariable = this.state.lease/(95-this.state.currentAge)
            this.setState({
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            },()=>{})
            
            if((proRatedVariable < 1)){
                this.setState({
                    grantMoniesResult: this.state.grantMoniesStr + (17500 * proRatedVariable.toFixed(2))
                },()=>{})
            }else{
                this.setState({
                    grantMoniesResult:'$17500'
                })
            }
            return true;
        }else if(
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 3000 && this.state.income < 3250)
        )
        {
            let proRatedVariable = this.state.lease/(95-this.state.currentAge)
            this.setState({
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            },()=>{})
            
            if((proRatedVariable < 1)){
                this.setState({
                    grantMoniesResult: this.state.grantMoniesStr + (15000 * proRatedVariable.toFixed(2))
                },()=>{})
            }else{
                this.setState({
                    grantMoniesResult:'$15000'
                })
            }
            return true;
        }else if(
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 3250 && this.state.income < 3500)
        )
        {
            let proRatedVariable = this.state.lease/(95-this.state.currentAge)
            this.setState({
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            },()=>{})
            
            if((proRatedVariable < 1)){
                this.setState({
                    grantMoniesResult: this.state.grantMoniesStr + (12500 * proRatedVariable.toFixed(2))
                },()=>{})
            }else{
                this.setState({
                    grantMoniesResult:'$12500'
                })
            }
            return true;
        }else if(
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 3500 && this.state.income < 3750)
        )
        {
            let proRatedVariable = this.state.lease/(95-this.state.currentAge)
            this.setState({
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            },()=>{})
            
            if((proRatedVariable < 1)){
                this.setState({
                    grantMoniesResult: this.state.grantMoniesStr + (10000 * proRatedVariable.toFixed(2))
                },()=>{})
            }else{
                this.setState({
                    grantMoniesResult:'$10000'
                })
            }
            return true;
        }else if(
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 3750 && this.state.income < 4000)
        )
        {
            let proRatedVariable = this.state.lease/(95-this.state.currentAge)
            this.setState({
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            },()=>{})
            
            if((proRatedVariable < 1)){
                this.setState({
                    grantMoniesResult: this.state.grantMoniesStr + (7500 * proRatedVariable.toFixed(2))
                },()=>{})
            }else{
                this.setState({
                    grantMoniesResult:'$7500'
                })
            }
            return true;
        }else if(
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 4000 && this.state.income < 4250)
        )
        {
            let proRatedVariable = this.state.lease/(95-this.state.currentAge)
            this.setState({
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            },()=>{})
            
            if((proRatedVariable < 1)){
                this.setState({
                    grantMoniesResult: this.state.grantMoniesStr + (5000 * proRatedVariable.toFixed(2))
                },()=>{})
            }else{
                this.setState({
                    grantMoniesResult:'$5000'
                })
            }
            return true;
        }else if(
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 4250 && this.state.income < 4500)
        )
        {
            let proRatedVariable = this.state.lease/(95-this.state.currentAge)
            this.setState({
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            },()=>{})
            
            if((proRatedVariable < 1)){
                this.setState({
                    grantMoniesResult: this.state.grantMoniesStr + (2500 * proRatedVariable.toFixed(2))
                },()=>{})
            }else{
                this.setState({
                    grantMoniesResult:'$2500'
                })
            }
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

        const { citizenship, currentAge, firstTimeBuyers, lease, employmentStatus, income,remainingYearsTo95,proRatedVariable, typeOfFlat, familyNucleus, grantMonies, open, setOpen, grantMoniesStr, grantMoniesResult } = this.state
        const values = { citizenship, currentAge, firstTimeBuyers, lease, employmentStatus, income,remainingYearsTo95,proRatedVariable, typeOfFlat, familyNucleus, grantMonies, open, setOpen, grantMoniesStr, grantMoniesResult}
         
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
                                <MenuItem value="Joint Singles Grant"> Joint Single or Orphan (Single Orphan With Unmarried Siblings)</MenuItem>
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
                    <AppBar title="CPF Housing Grant Eligibility"/>
                    <List>

                        {/* Start of First timers section */}
                        <ListItem primaryText="Employment: Have At Least 1 Applicant That Has Been Working For At Least 12 Months?"/>
                            <FormControl component="fieldset">
                                    <RadioGroup aria-label="employmentStatus" 
                                    name="employmentStatus" 
                                    value={this.employmentStatus} 
                                    onChange={this.handleChange('employmentStatus')}
                                    defaultValue={values.employmentStatus}>
                                    <FormControlLabel value='Yes' control={<Radio />} label="Yes" />
                                    <FormControlLabel value='No' control={<Radio />} label="No" />
                                </RadioGroup>
                            </FormControl> 
                          {/* End of Lease section */}

                          {/* Start of Lease section */}
                          <ListItem
                            primaryText="Remaining Lease Of Flat?"/>
                            <TextField 
                                hintText = "Enter remaining lease here"
                                floatingLabelFixed='lease'
                                onChange={this.handleChange('lease')}
                                defaultValue={values.lease}
                              />
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
        else if (this.state.secondTimerGrantMode){
            return <div>
                        this is the page for Second-timers
                    </div>
        }
        else if (this.state.isResultPage){
            return <MuiThemeProvider>
                <React.Fragment>
                <AppBar title="CPF Housing Grant Eligibility"/>
                    <List>
                    <ListItem
                            primaryText = "Your Amount Of Grants You Are Eligible For"
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
