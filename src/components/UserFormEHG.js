import React, { Component } from 'react'
import EHGPersonalDetails from './EHGPersonalDetails'
import EHGConfirm from './EHGConfirm'
import EHGResults from './EHGResults'



export class UserFormEHG extends Component {

    state={
        step: 1,
        maritalStatus: '',
        currentAge: null,
        lease: null,
        firstTimeBuyers: '',
        employmentStatus: '',
        income: null,
        remainingYearsTo95: null,
        proRatedVariable: 0,
        grantMonies: '$1,000,000',
        grantMoniesStr: '$',
        grantMoniesResult:'',
        otherQualifiedGrants: 'Proximity Grant Scheme',
        otherQualifiedGrants1: 'CPF Half-Housing Grant Scheme',
        otherQualifiedGrants2: 'CPF Housing Grant Scheme For Singles & Proximity Grant Scheme',
        otherQualifiedGrants3: 'Proximity Grant Scheme',
        errorMessage: 'Sorry You Did Not Qualify For Enhanced Housing Grant',
        open:false,
        setOpen:false,
    }

    nextStepEHG = () =>{
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
        this.toCalculate()
    }
   prevStepEHG = () =>{
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    backToHomeEHG = () =>{
        const { step } = this.state;
        this.setState({
            step: step/step,
            maritalStatus: null,
            currentAge: null,
            lease: null,
            firstTimeBuyers: null,
            employmentStatus: null,
            income: null,
            remainingYearsTo95: null,
            proRatedVariable: 0,
            grantMonies: '$1,000,000',
            grantMoniesStr: '$',
            grantMoniesResult: '',
            qualifiedGrantResults:'',
            otherQualifiedGrants: 'CPF Housing Grant Scheme & Proximity Grant Scheme',
            otherQualifiedGrants1: 'CPF Half-Housing Grant Scheme',
            otherQualifiedGrants2: 'CPF Housing Grant Scheme For Singles & Proximity Grant Scheme',
            otherQualifiedGrants3: 'Proximity Grant Scheme',
            errorMessage: 'Sorry You Did Not Qualify For Enhanced Housing Grant',
            open:false,
            setOpen:false,
            })
    }

    proratedCalculation = () =>{
        const { grantMonies,proRatedVariable,grantMoniesStr } = this.state;
        this.setState({
            grantMoniesResult: (grantMoniesStr) + grantMonies * proRatedVariable.toFixed(2),
        })
    }

    toCalculate = () => {
        // start of EHG-singles with first-timers above 35
        if(
            this.state.maritalStatus.includes('EHG-Singles') &&
            this.state.currentAge >= 35 &&
            this.state.firstTimeBuyers.includes('All First-Timers') &&
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
        }else if(
            this.state.maritalStatus.includes('EHG-Singles') &&
            this.state.currentAge >= 35 &&
            this.state.firstTimeBuyers.includes('All First-Timers') &&
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 750 && this.state.income < 1000)
        )
        {
            this.setState({
                grantMonies:  37500,
                grantMoniesResult: "$37500",
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            })
            if((this.state.lease/this.state.remainingYearsTo95 <= 1)){
                this.proratedCalculation()
            }
            return true;
        }else if(
            this.state.maritalStatus.includes('EHG-Singles') &&
            this.state.currentAge >= 35 &&
            this.state.firstTimeBuyers.includes('All First-Timers') &&
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 1000 && this.state.income < 1250)
        )
        {
            this.setState({
                grantMonies:  35000,
                grantMoniesResult: "$35000",
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            })
            if((this.state.lease/this.state.remainingYearsTo95 <= 1)){
                this.proratedCalculation()
            }
            return true;
        }else if(
            this.state.maritalStatus.includes('EHG-Singles') &&
            this.state.currentAge >= 35 &&
            this.state.firstTimeBuyers.includes('All First-Timers') &&
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 1250 && this.state.income < 1500)
        )
        {
            this.setState({
                grantMonies:  32500,
                grantMoniesResult: "$32500",
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            })
            if((this.state.lease/this.state.remainingYearsTo95 <= 1)){
                this.proratedCalculation()
            }
            return true;
        }else if(
            this.state.maritalStatus.includes('EHG-Singles') &&
            this.state.currentAge >= 35 &&
            this.state.firstTimeBuyers.includes('All First-Timers') &&
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 1500 && this.state.income < 1750)
        )
        {
            this.setState({
                grantMonies:  30000,
                grantMoniesResult: "$30000",
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            })
            if((this.state.lease/this.state.remainingYearsTo95 <= 1)){
                this.proratedCalculation()
            }
            return true;
        }else if(
            this.state.maritalStatus.includes('EHG-Singles') &&
            this.state.currentAge >= 35 &&
            this.state.firstTimeBuyers.includes('All First-Timers') &&
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 1750 && this.state.income < 2000)
        )
        {
            this.setState({
                grantMonies:  27500,
                grantMoniesResult: "$27500",
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            })
            if((this.state.lease/this.state.remainingYearsTo95 <= 1)){
                this.proratedCalculation()
            }
            return true;
        }else if(
            this.state.maritalStatus.includes('EHG-Singles') &&
            this.state.currentAge >= 35 &&
            this.state.firstTimeBuyers.includes('All First-Timers') &&
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 2000 && this.state.income < 2250)
        )
        {
            this.setState({
                grantMonies:  25000,
                grantMoniesResult: "$25000",
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            })
            if((this.state.lease/this.state.remainingYearsTo95 <= 1)){
                this.proratedCalculation()
            }
            return true;
        }else if(
            this.state.maritalStatus.includes('EHG-Singles') &&
            this.state.currentAge >= 35 &&
            this.state.firstTimeBuyers.includes('All First-Timers') &&
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 2250 && this.state.income < 2500)
        )
        {
            this.setState({
                grantMonies:  22500,
                grantMoniesResult: "$22500",
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            })
            if((this.state.lease/this.state.remainingYearsTo95 <= 1)){
                this.proratedCalculation()
            }
            return true;
        }else if(
            this.state.maritalStatus.includes('EHG-Singles') &&
            this.state.currentAge >= 35 &&
            this.state.firstTimeBuyers.includes('All First-Timers') &&
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 2500 && this.state.income < 2750)
        )
        {
            this.setState({
                grantMonies:  20000,
                grantMoniesResult: "$20000",
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            })
            if((this.state.lease/this.state.remainingYearsTo95 <= 1)){
                this.proratedCalculation()
            }
            return true;
        }else if(
            this.state.maritalStatus.includes('EHG-Singles') &&
            this.state.currentAge >= 35 &&
            this.state.firstTimeBuyers.includes('All First-Timers') &&
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 2750 && this.state.income < 3000)
        )
        {
            this.setState({
                grantMonies:  17500,
                grantMoniesResult: "$17500",
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            })
            if((this.state.lease/this.state.remainingYearsTo95 <= 1)){
                this.proratedCalculation()
            }
            return true;
        }else if(
            this.state.maritalStatus.includes('EHG-Singles') &&
            this.state.currentAge >= 35 &&
            this.state.firstTimeBuyers.includes('All First-Timers') &&
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 3000 && this.state.income < 3250)
        )
        {
            this.setState({
                grantMonies:  15000,
                grantMoniesResult: "$15000",
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            })
            if((this.state.lease/this.state.remainingYearsTo95 <= 1)){
                this.proratedCalculation()
            }
            return true;
        }else if(
            this.state.maritalStatus.includes('EHG-Singles') &&
            this.state.currentAge >= 35 &&
            this.state.firstTimeBuyers.includes('All First-Timers') &&
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 3250 && this.state.income < 3500)
        )
        {
            this.setState({
                grantMonies:  12500,
                grantMoniesResult: "$12500",
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            })
            if((this.state.lease/this.state.remainingYearsTo95 <= 1)){
                this.proratedCalculation()
            }
            return true;
        }else if(
            this.state.maritalStatus.includes('EHG-Singles') &&
            this.state.currentAge >= 35 &&
            this.state.firstTimeBuyers.includes('All First-Timers') &&
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 3500 && this.state.income < 3750)
        )
        {
            this.setState({
                grantMonies:  10000,
                grantMoniesResult: "$10000",
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            })
            if((this.state.lease/this.state.remainingYearsTo95 <= 1)){
                this.proratedCalculation()
            }
            return true;
        }else if(
            this.state.maritalStatus.includes('EHG-Singles') &&
            this.state.currentAge >= 35 &&
            this.state.firstTimeBuyers.includes('All First-Timers') &&
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 3750 && this.state.income < 4000)
        )
        {
            this.setState({
                grantMonies:  7500,
                grantMoniesResult: "$7500",
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            })
            if((this.state.lease/this.state.remainingYearsTo95 <= 1)){
                this.proratedCalculation()
            }
            return true;
        }else if(
            this.state.maritalStatus.includes('EHG-Singles') &&
            this.state.currentAge >= 35 &&
            this.state.firstTimeBuyers.includes('All First-Timers') &&
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 4000 && this.state.income < 4250)
        )
        {
            this.setState({
                grantMonies:  5000,
                grantMoniesResult: "$5000",
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            })
            if((this.state.lease/this.state.remainingYearsTo95 <= 1)){
                this.proratedCalculation()
            }
            return true;
        }else if(
            this.state.maritalStatus.includes('EHG-Singles') &&
            this.state.currentAge >= 35 &&
            this.state.firstTimeBuyers.includes('All First-Timers') &&
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 4250 && this.state.income < 4500)
        )
        {
            this.setState({
                grantMonies:  2500,
                grantMoniesResult: "$2500",
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            })
            if((this.state.lease/this.state.remainingYearsTo95 <= 1)){
                this.proratedCalculation()
            }
            return true;
            // End of EHG-singles with first-timers above 35
        }else if(
            // Start of EHG-Singles with FTSC above 21
            this.state.maritalStatus.includes('EHG-Family') &&
            this.state.currentAge >= 21 &&
            this.state.firstTimeBuyers.includes('One First-Timer, One Second-Timer') &&
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
        }else if(
            this.state.maritalStatus.includes('EHG-Family') &&
            this.state.currentAge >= 21 &&
            this.state.firstTimeBuyers.includes('One First-Timer, One Second-Timer') &&
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 750 && this.state.income < 1000)
        )
        {
            this.setState({
                grantMonies:  37500,
                grantMoniesResult: "$37500",
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            })
            if((this.state.lease/this.state.remainingYearsTo95 <= 1)){
                this.proratedCalculation()
            }
            return true;
        }else if(
            this.state.maritalStatus.includes('EHG-Family') &&
            this.state.currentAge >= 21 &&
            this.state.firstTimeBuyers.includes('One First-Timer, One Second-Timer') &&
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 1000 && this.state.income < 1250)
        )
        {
            this.setState({
                grantMonies:  35000,
                grantMoniesResult: "$35000",
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            })
            if((this.state.lease/this.state.remainingYearsTo95 <= 1)){
                this.proratedCalculation()
            }
            return true;
        }else if(
            this.state.maritalStatus.includes('EHG-Family') &&
            this.state.currentAge >= 21 &&
            this.state.firstTimeBuyers.includes('One First-Timer, One Second-Timer') &&
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 1250 && this.state.income < 1500)
        )
        {
            this.setState({
                grantMonies:  32500,
                grantMoniesResult: "$32500",
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            })
            if((this.state.lease/this.state.remainingYearsTo95 <= 1)){
                this.proratedCalculation()
            }
            return true;
        }else if(
            this.state.maritalStatus.includes('EHG-Family') &&
            this.state.currentAge >= 21 &&
            this.state.firstTimeBuyers.includes('One First-Timer, One Second-Timer') &&
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 1500 && this.state.income < 1750)
        )
        {
            this.setState({
                grantMonies:  30000,
                grantMoniesResult: "$30000",
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            })
            if((this.state.lease/this.state.remainingYearsTo95 <= 1)){
                this.proratedCalculation()
            }
            return true;
        }else if(
            this.state.maritalStatus.includes('EHG-Family') &&
            this.state.currentAge >= 21 &&
            this.state.firstTimeBuyers.includes('One First-Timer, One Second-Timer') &&
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 1750 && this.state.income < 2000)
        )
        {
            this.setState({
                grantMonies:  27500,
                grantMoniesResult: "$27500",
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            })
            if((this.state.lease/this.state.remainingYearsTo95 <= 1)){
                this.proratedCalculation()
            }
            return true;
        }else if(
            this.state.maritalStatus.includes('EHG-Family') &&
            this.state.currentAge >= 21 &&
            this.state.firstTimeBuyers.includes('One First-Timer, One Second-Timer') &&
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 2000 && this.state.income < 2250)
        )
        {
            this.setState({
                grantMonies:  25000,
                grantMoniesResult: "$25000",
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            })
            if((this.state.lease/this.state.remainingYearsTo95 <= 1)){
                this.proratedCalculation()
            }
            return true;
        }else if(
            this.state.maritalStatus.includes('EHG-Family') &&
            this.state.currentAge >= 21 &&
            this.state.firstTimeBuyers.includes('One First-Timer, One Second-Timer') &&
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 2250 && this.state.income < 2500)
        )
        {
            this.setState({
                grantMonies:  22500,
                grantMoniesResult: "$22500",
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            })
            if((this.state.lease/this.state.remainingYearsTo95 <= 1)){
                this.proratedCalculation()
            }
            return true;
        }else if(
            this.state.maritalStatus.includes('EHG-Family') &&
            this.state.currentAge >= 21 &&
            this.state.firstTimeBuyers.includes('One First-Timer, One Second-Timer') &&
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 2500 && this.state.income < 2750)
        )
        {
            this.setState({
                grantMonies:  20000,
                grantMoniesResult: "$20000",
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            })
            if((this.state.lease/this.state.remainingYearsTo95 <= 1)){
                this.proratedCalculation()
            }
            return true;
        }else if(
            this.state.maritalStatus.includes('EHG-Family') &&
            this.state.currentAge >= 21 &&
            this.state.firstTimeBuyers.includes('One First-Timer, One Second-Timer') &&
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 2750 && this.state.income < 3000)
        )
        {
            this.setState({
                grantMonies:  17500,
                grantMoniesResult: "$17500",
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            })
            if((this.state.lease/this.state.remainingYearsTo95 <= 1)){
                this.proratedCalculation()
            }
            return true;
        }else if(
            this.state.maritalStatus.includes('EHG-Family') &&
            this.state.currentAge >= 21 &&
            this.state.firstTimeBuyers.includes('One First-Timer, One Second-Timer') &&
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 3000 && this.state.income < 3250)
        )
        {
            this.setState({
                grantMonies:  15000,
                grantMoniesResult: "$15000",
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            })
            if((this.state.lease/this.state.remainingYearsTo95 <= 1)){
                this.proratedCalculation()
            }
            return true;
        }else if(
            this.state.maritalStatus.includes('EHG-Family') &&
            this.state.currentAge >= 21 &&
            this.state.firstTimeBuyers.includes('One First-Timer, One Second-Timer') &&
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 3250 && this.state.income < 3500)
        )
        {
            this.setState({
                grantMonies:  12500,
                grantMoniesResult: "$12500",
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            })
            if((this.state.lease/this.state.remainingYearsTo95 <= 1)){
                this.proratedCalculation()
            }
            return true;
        }else if(
            this.state.maritalStatus.includes('EHG-Family') &&
            this.state.currentAge >= 21 &&
            this.state.firstTimeBuyers.includes('One First-Timer, One Second-Timer') &&
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 3500 && this.state.income < 3750)
        )
        {
            this.setState({
                grantMonies:  10000,
                grantMoniesResult: "$10000",
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            })
            if((this.state.lease/this.state.remainingYearsTo95 <= 1)){
                this.proratedCalculation()
            }
            return true;
        }else if(
            this.state.maritalStatus.includes('EHG-Family') &&
            this.state.currentAge >= 21 &&
            this.state.firstTimeBuyers.includes('One First-Timer, One Second-Timer') &&
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 3750 && this.state.income < 4000)
        )
        {
            this.setState({
                grantMonies:  7500,
                grantMoniesResult: "$7500",
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            })
            if((this.state.lease/this.state.remainingYearsTo95 <= 1)){
                this.proratedCalculation()
            }
            return true;
        }else if(
            this.state.maritalStatus.includes('EHG-Family') &&
            this.state.currentAge >= 21 &&
            this.state.firstTimeBuyers.includes('One First-Timer, One Second-Timer') &&
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 4000 && this.state.income < 4250)
        )
        {
            this.setState({
                grantMonies:  5000,
                grantMoniesResult: "$5000",
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            })
            if((this.state.lease/this.state.remainingYearsTo95 <= 1)){
                this.proratedCalculation()
            }
            return true;
        }else if(
            this.state.maritalStatus.includes('EHG-Family') &&
            this.state.currentAge >= 21 &&
            this.state.firstTimeBuyers.includes('One First-Timer, One Second-Timer') &&
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 4250 && this.state.income < 4500)
        )
        {
            this.setState({
                grantMonies:  2500,
                grantMoniesResult: "$2500",
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            })
            if((this.state.lease/this.state.remainingYearsTo95 <= 1)){
                this.proratedCalculation()
            }
            return true;
            // End of EHG-Singles with FT-SC above 21
        }else if(
            // Start of EHG-Couple with FT above 21
            this.state.maritalStatus.includes('EHG-Family') &&
            this.state.currentAge >= 21 &&
            this.state.firstTimeBuyers.includes('All First-Timers') &&
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 0 && this.state.income < 1500)
        )
        {
            this.setState({
                grantMonies:  80000,
                grantMoniesResult: "$80000",
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            })
            if((this.state.lease/this.state.remainingYearsTo95 <= 1)){
                this.proratedCalculation()
            }
            return true;
        }else if(
            this.state.maritalStatus.includes('EHG-Family') &&
            this.state.currentAge >= 21 &&
            this.state.firstTimeBuyers.includes('All First-Timers') &&
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 1500 && this.state.income < 2000)
        )
        {
            this.setState({
                grantMonies:  75000,
                grantMoniesResult: "$75000",
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            })
            if((this.state.lease/this.state.remainingYearsTo95 <= 1)){
                this.proratedCalculation()
            }
            return true;
        }else if(
            this.state.maritalStatus.includes('EHG-Family') &&
            this.state.currentAge >= 21 &&
            this.state.firstTimeBuyers.includes('All First-Timers') &&
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 2000 && this.state.income < 2500)
        )
        {
            this.setState({
                grantMonies:  70000,
                grantMoniesResult: "$70000",
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            })
            if((this.state.lease/this.state.remainingYearsTo95 <= 1)){
                this.proratedCalculation()
            }
            return true;
        }else if(
            this.state.maritalStatus.includes('EHG-Family') &&
            this.state.currentAge >= 21 &&
            this.state.firstTimeBuyers.includes('All First-Timers') &&
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 2500 && this.state.income < 3000)
        )
        {
            this.setState({
                grantMonies:  65000,
                grantMoniesResult: "$65000",
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            })
            if((this.state.lease/this.state.remainingYearsTo95 <= 1)){
                this.proratedCalculation()
            }
            return true;
        }else if(
            this.state.maritalStatus.includes('EHG-Family') &&
            this.state.currentAge >= 21 &&
            this.state.firstTimeBuyers.includes('All First-Timers') &&
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 3000 && this.state.income < 3500)
        )
        {
            this.setState({
                grantMonies:  60000,
                grantMoniesResult: "$60000",
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            })
            if((this.state.lease/this.state.remainingYearsTo95 <= 1)){
                this.proratedCalculation()
            }
            return true;
        }else if(
            this.state.maritalStatus.includes('EHG-Family') &&
            this.state.currentAge >= 21 &&
            this.state.firstTimeBuyers.includes('All First-Timers') &&
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 3500 && this.state.income < 4000)
        )
        {
            this.setState({
                grantMonies:  55000,
                grantMoniesResult: "$55000",
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            })
            if((this.state.lease/this.state.remainingYearsTo95 <= 1)){
                this.proratedCalculation()
            }
            return true;
        }else if(
            this.state.maritalStatus.includes('EHG-Family') &&
            this.state.currentAge >= 21 &&
            this.state.firstTimeBuyers.includes('All First-Timers') &&
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 4000 && this.state.income < 4500)
        )
        {
            this.setState({
                grantMonies:  50000,
                grantMoniesResult: "$50000",
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            })
            if((this.state.lease/this.state.remainingYearsTo95 <= 1)){
                this.proratedCalculation()
            }
            return true;
        }else if(
            this.state.maritalStatus.includes('EHG-Family') &&
            this.state.currentAge >= 21 &&
            this.state.firstTimeBuyers.includes('All First-Timers') &&
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 4500 && this.state.income < 5000)
        )
        {
            this.setState({
                grantMonies:  45000,
                grantMoniesResult: "$45000",
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            })
            if((this.state.lease/this.state.remainingYearsTo95 <= 1)){
                this.proratedCalculation()
            }
            return true;
        }else if(
            this.state.maritalStatus.includes('EHG-Family') &&
            this.state.currentAge >= 21 &&
            this.state.firstTimeBuyers.includes('All First-Timers') &&
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 5000 && this.state.income < 5500)
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
        }else if(
            this.state.maritalStatus.includes('EHG-Family') &&
            this.state.currentAge >= 21 &&
            this.state.firstTimeBuyers.includes('All First-Timers') &&
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 5500 && this.state.income < 6000)
        )
        {
            this.setState({
                grantMonies:  35000,
                grantMoniesResult: "$35000",
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            })
            if((this.state.lease/this.state.remainingYearsTo95 <= 1)){
                this.proratedCalculation()
            }
            return true;
        }else if(
            this.state.maritalStatus.includes('EHG-Family') &&
            this.state.currentAge >= 21 &&
            this.state.firstTimeBuyers.includes('All First-Timers') &&
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 6000 && this.state.income < 6500)
        )
        {
            this.setState({
                grantMonies:  30000,
                grantMoniesResult: "$30000",
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            })
            if((this.state.lease/this.state.remainingYearsTo95 <= 1)){
                this.proratedCalculation()
            }
            return true;
        }else if(
            this.state.maritalStatus.includes('EHG-Family') &&
            this.state.currentAge >= 21 &&
            this.state.firstTimeBuyers.includes('All First-Timers') &&
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 6500 && this.state.income < 7000)
        )
        {
            this.setState({
                grantMonies:  25000,
                grantMoniesResult: "$25000",
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            })
            if((this.state.lease/this.state.remainingYearsTo95 <= 1)){
                this.proratedCalculation()
            }
            return true;
        }else if(
            this.state.maritalStatus.includes('EHG-Family') &&
            this.state.currentAge >= 21 &&
            this.state.firstTimeBuyers.includes('All First-Timers') &&
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 7000 && this.state.income < 7500)
        )
        {
            this.setState({
                grantMonies:  20000,
                grantMoniesResult: "$20000",
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            })
            if((this.state.lease/this.state.remainingYearsTo95 <= 1)){
                this.proratedCalculation()
            }
            return true;
        }else if(
            this.state.maritalStatus.includes('EHG-Family') &&
            this.state.currentAge >= 21 &&
            this.state.firstTimeBuyers.includes('All First-Timers') &&
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 7500 && this.state.income < 8000)
        )
        {
            this.setState({
                grantMonies:  15000,
                grantMoniesResult: "$15000",
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            })
            if((this.state.lease/this.state.remainingYearsTo95 <= 1)){
                this.proratedCalculation()
            }
            return true;
        }else if(
            this.state.maritalStatus.includes('EHG-Family') &&
            this.state.currentAge >= 21 &&
            this.state.firstTimeBuyers.includes('All First-Timers') &&
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 8000 && this.state.income < 8500)
        )
        {
            this.setState({
                grantMonies:  10000,
                grantMoniesResult: "$10000",
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            })
            if((this.state.lease/this.state.remainingYearsTo95 <= 1)){
                this.proratedCalculation()
            }
            return true;
        }else if(
            this.state.maritalStatus.includes('EHG-Family') &&
            this.state.currentAge >= 21 &&
            this.state.firstTimeBuyers.includes('All First-Timers') &&
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 8500 && this.state.income < 9000)
        )
        {
            this.setState({
                grantMonies:  5000,
                grantMoniesResult: "$5000",
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            })
            if((this.state.lease/this.state.remainingYearsTo95 <= 1)){
                this.proratedCalculation()
            }
            return true;
            // End of EHG-Couple with FT above 21
        }
        else{
            this.setState({
                grantMoniesResult: this.state.errorMessage
            })
            return true;
        }
        
    }

    toCheck = () => {
        if
        ( 
            this.state.maritalStatus === "EHG-Family" &&
            this.state.firstTimeBuyers ===  "One First-Timer, One Second-Timer"
            
        )
        {
            this.setState({ qualifiedGrantResults: this.state.otherQualifiedGrants1 })
            return true;
        }
        else if 
        (
            this.state.maritalStatus === "EHG-Singles" &&
            this.state.firstTimeBuyers === "All First-Timers" 
        )
        {
            this.setState({ qualifiedGrantResults: this.state.otherQualifiedGrants2 })
            return true;
        }
        else if 
        (
            this.state.maritalStatus !== "Other" &&
            this.state.firstTimeBuyers === "All First-Timers" 
        )
        {
            this.setState({ qualifiedGrantResults: this.state.otherQualifiedGrants })
            return true;
        }
        else
        {
            this.setState({ qualifiedGrantResults: this.state.otherQualifiedGrants3 })
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
        const { step } = this.state;
        const { maritalStatus,currentAge,lease,firstTimeBuyers, employmentStatus, income,grantMonies,qualifiedGrantResults,otherQualifiedGrants,otherQualifiedGrants1,otherQualifiedGrants2,otherQualifiedGrants3,remainingYearsTo95,proRatedVariable,errorMessage,grantMoniesStr,grantMoniesResult} = this.state;
        const values = { maritalStatus,currentAge,lease,firstTimeBuyers, employmentStatus, income,grantMonies,qualifiedGrantResults,otherQualifiedGrants,otherQualifiedGrants1,otherQualifiedGrants2,otherQualifiedGrants3,remainingYearsTo95,proRatedVariable,errorMessage,grantMoniesStr,grantMoniesResult};

        switch(step){
            default:
                return(
                    <EHGPersonalDetails 
                    nextStepEHG={this.nextStepEHG}
                    handleChange={this.handleChange}
                    values={values}
                    />
                )
            case 2:
                return(
                    <EHGConfirm
                    nextStepEHG={this.nextStepEHG}
                    prevStepEHG={this.prevStepEHG}
                    handleChange={this.handleChange}
                    values={values}
                    />
                )
            case 3:
                return(
                    <EHGResults
                    backToHomeEHG={this.backToHomeEHG}
                    values={values}
                    />
                )

        }
    }
}

export default UserFormEHG
