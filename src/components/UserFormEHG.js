import React, { Component } from 'react'
import EHGPersonalDetails from './EHGPersonalDetails'
import EHGConfirm from './EHGConfirm'
import EHGResults from './EHGResults'



export class UserFormEHG extends Component {

    state={
        step: 1,
        maritialStatus: '',
        currentAge: null,
        lease: null,
        firstTimeBuyers: '',
        employmentStatus: '',
        income: null,
        remainingYearsTo95: null,
        proRatedVariable: 0,
        grantMonies: '$1,000,000',
        otherQualifiedGrants: 'Proximity Grant Scheme',
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
            maritialStatus: null,
            currentAge: null,
            lease: null,
            firstTimeBuyers: null,
            employmentStatus: null,
            income: null,
            remainingYearsTo95: null,
            proRatedVariable: 0,
            grantMonies: '$1,000,000',
            otherQualifiedGrants: 'Proximity Grant Scheme',
            open:false,
            setOpen:false,
            })
    }

    proratedCalculation = () =>{
        const { grantMonies,proRatedVariable } = this.state;
        this.setState({
            grantMonies: grantMonies * proRatedVariable.toFixed(2)
        })
    }

    toCalculate = () => {
        // start of EHG-singles with first-timers above 35
        if(
            this.state.maritialStatus.includes('EHG-Singles') &&
            this.state.currentAge >= 35 &&
            this.state.firstTimeBuyers.includes('All First-Timers') &&
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 0 && this.state.income < 750)
        )
        {
            this.setState({
                grantMonies: 40000,
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            })
            if((this.state.lease/this.state.remainingYearsTo95 <= 1)){
                this.proratedCalculation()
            }
            return true;
        }else if(
            this.state.maritialStatus.includes('EHG-Singles') &&
            this.state.currentAge >= 35 &&
            this.state.firstTimeBuyers.includes('All First-Timers') &&
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 750 && this.state.income < 1000)
        )
        {
            this.setState({
                grantMonies: 37500,
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            })
            if((this.state.lease/this.state.remainingYearsTo95 <= 1)){
                this.proratedCalculation()
            }
            return true;
        }else if(
            this.state.maritialStatus.includes('EHG-Singles') &&
            this.state.currentAge >= 35 &&
            this.state.firstTimeBuyers.includes('All First-Timers') &&
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 1000 && this.state.income < 1250)
        )
        {
            this.setState({
                grantMonies: 35000,
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            })
            if((this.state.lease/this.state.remainingYearsTo95 <= 1)){
                this.proratedCalculation()
            }
            return true;
        }else if(
            this.state.maritialStatus.includes('EHG-Singles') &&
            this.state.currentAge >= 35 &&
            this.state.firstTimeBuyers.includes('All First-Timers') &&
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 1250 && this.state.income < 1500)
        )
        {
            this.setState({
                grantMonies: 32500,
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            })
            if((this.state.lease/this.state.remainingYearsTo95 <= 1)){
                this.proratedCalculation()
            }
            return true;
        }else if(
            this.state.maritialStatus.includes('EHG-Singles') &&
            this.state.currentAge >= 35 &&
            this.state.firstTimeBuyers.includes('All First-Timers') &&
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 1500 && this.state.income < 1750)
        )
        {
            this.setState({
                grantMonies: 30000,
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            })
            if((this.state.lease/this.state.remainingYearsTo95 <= 1)){
                this.proratedCalculation()
            }
            return true;
        }else if(
            this.state.maritialStatus.includes('EHG-Singles') &&
            this.state.currentAge >= 35 &&
            this.state.firstTimeBuyers.includes('All First-Timers') &&
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 1750 && this.state.income < 2000)
        )
        {
            this.setState({
                grantMonies: 27500,
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            })
            if((this.state.lease/this.state.remainingYearsTo95 <= 1)){
                this.proratedCalculation()
            }
            return true;
        }else if(
            this.state.maritialStatus.includes('EHG-Singles') &&
            this.state.currentAge >= 35 &&
            this.state.firstTimeBuyers.includes('All First-Timers') &&
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 2000 && this.state.income < 2250)
        )
        {
            this.setState({
                grantMonies: 25000,
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            })
            if((this.state.lease/this.state.remainingYearsTo95 <= 1)){
                this.proratedCalculation()
            }
            return true;
        }else if(
            this.state.maritialStatus.includes('EHG-Singles') &&
            this.state.currentAge >= 35 &&
            this.state.firstTimeBuyers.includes('All First-Timers') &&
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 2250 && this.state.income < 2500)
        )
        {
            this.setState({
                grantMonies: 22500,
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            })
            if((this.state.lease/this.state.remainingYearsTo95 <= 1)){
                this.proratedCalculation()
            }
            return true;
        }else if(
            this.state.maritialStatus.includes('EHG-Singles') &&
            this.state.currentAge >= 35 &&
            this.state.firstTimeBuyers.includes('All First-Timers') &&
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 2500 && this.state.income < 2750)
        )
        {
            this.setState({
                grantMonies: 20000,
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            })
            if((this.state.lease/this.state.remainingYearsTo95 <= 1)){
                this.proratedCalculation()
            }
            return true;
        }else if(
            this.state.maritialStatus.includes('EHG-Singles') &&
            this.state.currentAge >= 35 &&
            this.state.firstTimeBuyers.includes('All First-Timers') &&
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 2750 && this.state.income < 3000)
        )
        {
            this.setState({
                grantMonies: 17500,
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            })
            if((this.state.lease/this.state.remainingYearsTo95 <= 1)){
                this.proratedCalculation()
            }
            return true;
        }else if(
            this.state.maritialStatus.includes('EHG-Singles') &&
            this.state.currentAge >= 35 &&
            this.state.firstTimeBuyers.includes('All First-Timers') &&
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 3000 && this.state.income < 3250)
        )
        {
            this.setState({
                grantMonies: 15000,
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            })
            if((this.state.lease/this.state.remainingYearsTo95 <= 1)){
                this.proratedCalculation()
            }
            return true;
        }else if(
            this.state.maritialStatus.includes('EHG-Singles') &&
            this.state.currentAge >= 35 &&
            this.state.firstTimeBuyers.includes('All First-Timers') &&
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 3250 && this.state.income < 3500)
        )
        {
            this.setState({
                grantMonies: 12500,
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            })
            if((this.state.lease/this.state.remainingYearsTo95 <= 1)){
                this.proratedCalculation()
            }
            return true;
        }else if(
            this.state.maritialStatus.includes('EHG-Singles') &&
            this.state.currentAge >= 35 &&
            this.state.firstTimeBuyers.includes('All First-Timers') &&
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 3500 && this.state.income < 3750)
        )
        {
            this.setState({
                grantMonies: 10000,
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            })
            if((this.state.lease/this.state.remainingYearsTo95 <= 1)){
                this.proratedCalculation()
            }
            return true;
        }else if(
            this.state.maritialStatus.includes('EHG-Singles') &&
            this.state.currentAge >= 35 &&
            this.state.firstTimeBuyers.includes('All First-Timers') &&
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 3750 && this.state.income < 4000)
        )
        {
            this.setState({
                grantMonies: 7500,
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            })
            if((this.state.lease/this.state.remainingYearsTo95 <= 1)){
                this.proratedCalculation()
            }
            return true;
        }else if(
            this.state.maritialStatus.includes('EHG-Singles') &&
            this.state.currentAge >= 35 &&
            this.state.firstTimeBuyers.includes('All First-Timers') &&
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 4000 && this.state.income < 4250)
        )
        {
            this.setState({
                grantMonies: 5000,
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            })
            if((this.state.lease/this.state.remainingYearsTo95 <= 1)){
                this.proratedCalculation()
            }
            return true;
        }else if(
            this.state.maritialStatus.includes('EHG-Singles') &&
            this.state.currentAge >= 35 &&
            this.state.firstTimeBuyers.includes('All First-Timers') &&
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 4250 && this.state.income < 4500)
        )
        {
            this.setState({
                grantMonies: 2500,
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
            this.state.maritialStatus.includes('EHG-Family') &&
            this.state.currentAge >= 21 &&
            this.state.firstTimeBuyers.includes('One First-Timer, One Second-Timer') &&
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 0 && this.state.income < 750)
        )
        {
            this.setState({
                grantMonies: 40000,
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            })
            if((this.state.lease/this.state.remainingYearsTo95 <= 1)){
                this.proratedCalculation()
            }
            return true;
        }else if(
            this.state.maritialStatus.includes('EHG-Family') &&
            this.state.currentAge >= 21 &&
            this.state.firstTimeBuyers.includes('One First-Timer, One Second-Timer') &&
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 750 && this.state.income < 1000)
        )
        {
            this.setState({
                grantMonies: 37500,
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            })
            if((this.state.lease/this.state.remainingYearsTo95 <= 1)){
                this.proratedCalculation()
            }
            return true;
        }else if(
            this.state.maritialStatus.includes('EHG-Family') &&
            this.state.currentAge >= 21 &&
            this.state.firstTimeBuyers.includes('One First-Timer, One Second-Timer') &&
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 1000 && this.state.income < 1250)
        )
        {
            this.setState({
                grantMonies: 35000,
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            })
            if((this.state.lease/this.state.remainingYearsTo95 <= 1)){
                this.proratedCalculation()
            }
            return true;
        }else if(
            this.state.maritialStatus.includes('EHG-Family') &&
            this.state.currentAge >= 21 &&
            this.state.firstTimeBuyers.includes('One First-Timer, One Second-Timer') &&
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 1250 && this.state.income < 1500)
        )
        {
            this.setState({
                grantMonies: 32500,
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            })
            if((this.state.lease/this.state.remainingYearsTo95 <= 1)){
                this.proratedCalculation()
            }
            return true;
        }else if(
            this.state.maritialStatus.includes('EHG-Family') &&
            this.state.currentAge >= 21 &&
            this.state.firstTimeBuyers.includes('One First-Timer, One Second-Timer') &&
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 1500 && this.state.income < 1750)
        )
        {
            this.setState({
                grantMonies: 30000,
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            })
            if((this.state.lease/this.state.remainingYearsTo95 <= 1)){
                this.proratedCalculation()
            }
            return true;
        }else if(
            this.state.maritialStatus.includes('EHG-Family') &&
            this.state.currentAge >= 21 &&
            this.state.firstTimeBuyers.includes('One First-Timer, One Second-Timer') &&
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 1750 && this.state.income < 2000)
        )
        {
            this.setState({
                grantMonies: 27500,
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            })
            if((this.state.lease/this.state.remainingYearsTo95 <= 1)){
                this.proratedCalculation()
            }
            return true;
        }else if(
            this.state.maritialStatus.includes('EHG-Family') &&
            this.state.currentAge >= 21 &&
            this.state.firstTimeBuyers.includes('One First-Timer, One Second-Timer') &&
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 2000 && this.state.income < 2250)
        )
        {
            this.setState({
                grantMonies: 25000,
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            })
            if((this.state.lease/this.state.remainingYearsTo95 <= 1)){
                this.proratedCalculation()
            }
            return true;
        }else if(
            this.state.maritialStatus.includes('EHG-Family') &&
            this.state.currentAge >= 21 &&
            this.state.firstTimeBuyers.includes('One First-Timer, One Second-Timer') &&
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 2250 && this.state.income < 2500)
        )
        {
            this.setState({
                grantMonies: 22500,
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            })
            if((this.state.lease/this.state.remainingYearsTo95 <= 1)){
                this.proratedCalculation()
            }
            return true;
        }else if(
            this.state.maritialStatus.includes('EHG-Family') &&
            this.state.currentAge >= 21 &&
            this.state.firstTimeBuyers.includes('One First-Timer, One Second-Timer') &&
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 2500 && this.state.income < 2750)
        )
        {
            this.setState({
                grantMonies: 20000,
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            })
            if((this.state.lease/this.state.remainingYearsTo95 <= 1)){
                this.proratedCalculation()
            }
            return true;
        }else if(
            this.state.maritialStatus.includes('EHG-Family') &&
            this.state.currentAge >= 21 &&
            this.state.firstTimeBuyers.includes('One First-Timer, One Second-Timer') &&
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 2750 && this.state.income < 3000)
        )
        {
            this.setState({
                grantMonies: 17500,
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            })
            if((this.state.lease/this.state.remainingYearsTo95 <= 1)){
                this.proratedCalculation()
            }
            return true;
        }else if(
            this.state.maritialStatus.includes('EHG-Family') &&
            this.state.currentAge >= 21 &&
            this.state.firstTimeBuyers.includes('One First-Timer, One Second-Timer') &&
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 3000 && this.state.income < 3250)
        )
        {
            this.setState({
                grantMonies: 15000,
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            })
            if((this.state.lease/this.state.remainingYearsTo95 <= 1)){
                this.proratedCalculation()
            }
            return true;
        }else if(
            this.state.maritialStatus.includes('EHG-Family') &&
            this.state.currentAge >= 21 &&
            this.state.firstTimeBuyers.includes('One First-Timer, One Second-Timer') &&
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 3250 && this.state.income < 3500)
        )
        {
            this.setState({
                grantMonies: 12500,
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            })
            if((this.state.lease/this.state.remainingYearsTo95 <= 1)){
                this.proratedCalculation()
            }
            return true;
        }else if(
            this.state.maritialStatus.includes('EHG-Family') &&
            this.state.currentAge >= 21 &&
            this.state.firstTimeBuyers.includes('One First-Timer, One Second-Timer') &&
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 3500 && this.state.income < 3750)
        )
        {
            this.setState({
                grantMonies: 10000,
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            })
            if((this.state.lease/this.state.remainingYearsTo95 <= 1)){
                this.proratedCalculation()
            }
            return true;
        }else if(
            this.state.maritialStatus.includes('EHG-Family') &&
            this.state.currentAge >= 21 &&
            this.state.firstTimeBuyers.includes('One First-Timer, One Second-Timer') &&
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 3750 && this.state.income < 4000)
        )
        {
            this.setState({
                grantMonies: 7500,
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            })
            if((this.state.lease/this.state.remainingYearsTo95 <= 1)){
                this.proratedCalculation()
            }
            return true;
        }else if(
            this.state.maritialStatus.includes('EHG-Family') &&
            this.state.currentAge >= 21 &&
            this.state.firstTimeBuyers.includes('One First-Timer, One Second-Timer') &&
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 4000 && this.state.income < 4250)
        )
        {
            this.setState({
                grantMonies: 5000,
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            })
            if((this.state.lease/this.state.remainingYearsTo95 <= 1)){
                this.proratedCalculation()
            }
            return true;
        }else if(
            this.state.maritialStatus.includes('EHG-Family') &&
            this.state.currentAge >= 21 &&
            this.state.firstTimeBuyers.includes('One First-Timer, One Second-Timer') &&
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 4250 && this.state.income < 4500)
        )
        {
            this.setState({
                grantMonies: 2500,
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
            this.state.maritialStatus.includes('EHG-Family') &&
            this.state.currentAge >= 21 &&
            this.state.firstTimeBuyers.includes('All First-Timers') &&
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 0 && this.state.income < 1500)
        )
        {
            this.setState({
                grantMonies: 80000,
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            })
            if((this.state.lease/this.state.remainingYearsTo95 <= 1)){
                this.proratedCalculation()
            }
            return true;
        }else if(
            this.state.maritialStatus.includes('EHG-Family') &&
            this.state.currentAge >= 21 &&
            this.state.firstTimeBuyers.includes('All First-Timers') &&
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 1500 && this.state.income < 2000)
        )
        {
            this.setState({
                grantMonies: 75000,
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            })
            if((this.state.lease/this.state.remainingYearsTo95 <= 1)){
                this.proratedCalculation()
            }
            return true;
        }else if(
            this.state.maritialStatus.includes('EHG-Family') &&
            this.state.currentAge >= 21 &&
            this.state.firstTimeBuyers.includes('All First-Timers') &&
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 2000 && this.state.income < 2500)
        )
        {
            this.setState({
                grantMonies: 70000,
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            })
            if((this.state.lease/this.state.remainingYearsTo95 <= 1)){
                this.proratedCalculation()
            }
            return true;
        }else if(
            this.state.maritialStatus.includes('EHG-Family') &&
            this.state.currentAge >= 21 &&
            this.state.firstTimeBuyers.includes('All First-Timers') &&
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 2500 && this.state.income < 3000)
        )
        {
            this.setState({
                grantMonies: 65000,
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            })
            if((this.state.lease/this.state.remainingYearsTo95 <= 1)){
                this.proratedCalculation()
            }
            return true;
        }else if(
            this.state.maritialStatus.includes('EHG-Family') &&
            this.state.currentAge >= 21 &&
            this.state.firstTimeBuyers.includes('All First-Timers') &&
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 3000 && this.state.income < 3500)
        )
        {
            this.setState({
                grantMonies: 60000,
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            })
            if((this.state.lease/this.state.remainingYearsTo95 <= 1)){
                this.proratedCalculation()
            }
            return true;
        }else if(
            this.state.maritialStatus.includes('EHG-Family') &&
            this.state.currentAge >= 21 &&
            this.state.firstTimeBuyers.includes('All First-Timers') &&
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 3500 && this.state.income < 4000)
        )
        {
            this.setState({
                grantMonies: 55000,
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            })
            if((this.state.lease/this.state.remainingYearsTo95 <= 1)){
                this.proratedCalculation()
            }
            return true;
        }else if(
            this.state.maritialStatus.includes('EHG-Family') &&
            this.state.currentAge >= 21 &&
            this.state.firstTimeBuyers.includes('All First-Timers') &&
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 4000 && this.state.income < 4500)
        )
        {
            this.setState({
                grantMonies: 50000,
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            })
            if((this.state.lease/this.state.remainingYearsTo95 <= 1)){
                this.proratedCalculation()
            }
            return true;
        }else if(
            this.state.maritialStatus.includes('EHG-Family') &&
            this.state.currentAge >= 21 &&
            this.state.firstTimeBuyers.includes('All First-Timers') &&
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 4500 && this.state.income < 5000)
        )
        {
            this.setState({
                grantMonies: 45000,
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            })
            if((this.state.lease/this.state.remainingYearsTo95 <= 1)){
                this.proratedCalculation()
            }
            return true;
        }else if(
            this.state.maritialStatus.includes('EHG-Family') &&
            this.state.currentAge >= 21 &&
            this.state.firstTimeBuyers.includes('All First-Timers') &&
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 5000 && this.state.income < 5500)
        )
        {
            this.setState({
                grantMonies: 40000,
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            })
            if((this.state.lease/this.state.remainingYearsTo95 <= 1)){
                this.proratedCalculation()
            }
            return true;
        }else if(
            this.state.maritialStatus.includes('EHG-Family') &&
            this.state.currentAge >= 21 &&
            this.state.firstTimeBuyers.includes('All First-Timers') &&
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 5500 && this.state.income < 6000)
        )
        {
            this.setState({
                grantMonies: 35000,
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            })
            if((this.state.lease/this.state.remainingYearsTo95 <= 1)){
                this.proratedCalculation()
            }
            return true;
        }else if(
            this.state.maritialStatus.includes('EHG-Family') &&
            this.state.currentAge >= 21 &&
            this.state.firstTimeBuyers.includes('All First-Timers') &&
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 6000 && this.state.income < 6500)
        )
        {
            this.setState({
                grantMonies: 30000,
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            })
            if((this.state.lease/this.state.remainingYearsTo95 <= 1)){
                this.proratedCalculation()
            }
            return true;
        }else if(
            this.state.maritialStatus.includes('EHG-Family') &&
            this.state.currentAge >= 21 &&
            this.state.firstTimeBuyers.includes('All First-Timers') &&
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 6500 && this.state.income < 7000)
        )
        {
            this.setState({
                grantMonies: 25000,
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            })
            if((this.state.lease/this.state.remainingYearsTo95 <= 1)){
                this.proratedCalculation()
            }
            return true;
        }else if(
            this.state.maritialStatus.includes('EHG-Family') &&
            this.state.currentAge >= 21 &&
            this.state.firstTimeBuyers.includes('All First-Timers') &&
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 7000 && this.state.income < 7500)
        )
        {
            this.setState({
                grantMonies: 20000,
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            })
            if((this.state.lease/this.state.remainingYearsTo95 <= 1)){
                this.proratedCalculation()
            }
            return true;
        }else if(
            this.state.maritialStatus.includes('EHG-Family') &&
            this.state.currentAge >= 21 &&
            this.state.firstTimeBuyers.includes('All First-Timers') &&
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 7500 && this.state.income < 8000)
        )
        {
            this.setState({
                grantMonies: 15000,
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            })
            if((this.state.lease/this.state.remainingYearsTo95 <= 1)){
                this.proratedCalculation()
            }
            return true;
        }else if(
            this.state.maritialStatus.includes('EHG-Family') &&
            this.state.currentAge >= 21 &&
            this.state.firstTimeBuyers.includes('All First-Timers') &&
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 8000 && this.state.income < 8500)
        )
        {
            this.setState({
                grantMonies: 10000,
                remainingYearsTo95: 95 - this.state.currentAge,
                proRatedVariable: this.state.lease/(95 - this.state.currentAge)
            })
            if((this.state.lease/this.state.remainingYearsTo95 <= 1)){
                this.proratedCalculation()
            }
            return true;
        }else if(
            this.state.maritialStatus.includes('EHG-Family') &&
            this.state.currentAge >= 21 &&
            this.state.firstTimeBuyers.includes('All First-Timers') &&
            this.state.employmentStatus.includes('Yes') &&
            (this.state.lease >= 20 && this.state.lease <= 100) &&
            (this.state.income >= 8500 && this.state.income < 9000)
        )
        {
            this.setState({
                grantMonies: 5000,
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
        const { maritialStatus,currentAge,lease,firstTimeBuyers, employmentStatus, income,grantMonies,otherQualifiedGrants,remainingYearsTo95,proRatedVariable} = this.state;
        const values = { maritialStatus,currentAge,lease,firstTimeBuyers, employmentStatus, income,grantMonies,otherQualifiedGrants,remainingYearsTo95,proRatedVariable};

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
