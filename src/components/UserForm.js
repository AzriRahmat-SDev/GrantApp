import React, { Component } from 'react'
import FGPersonalDetails from './FGPersonalDetails'
import FGConfirm from './FGConfirm'
import FGResults from './FGResults'

export class UserForm extends Component {

    state={
        step: 1,
        citizenship: '',
        currentAge: null,
        firstTimeBuyers: '',
        lease: null,
        typeOfFlat: '',
        familyNucleus: '',
        financialStatus: null,
        grantMonies: '$1,000,000',
        otherQualifiedGrants: 'Proximity Grant Scheme',
        open:false,
        setOpen:false,
    }

    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
        this.toCalculate()
    }

    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    backToHome = () =>{
        const { step } = this.state;
        this.setState({
            step: step/step,
            citizenship: '',
            currentAge: null,
            firstTimeBuyers: '',
            lease:'',
            typeOfFlat:'',
            familyNucleus: '',
            financialStatus: null,
            grantMonies: '',
            otherQualifiedGrants: 'Proximity Grant Scheme'
        })
    }

    toCalculate = () =>{
        if(
            this.state.citizenship.includes('Other') &&
            this.state.currentAge >= 35 &&
            this.state.firstTimeBuyers.includes('All First-Timers') &&
            this.state.typeOfFlat.includes('2 to 4 room resale flat') &&
            this.state.familyNucleus.includes('Singles Grant')
        )
        {
            this.setState({grantMonies: '$25000'})
            return true;
        }
        else if (
            this.state.citizenship.includes('Other') &&
            this.state.currentAge >= 35 &&
            this.state.firstTimeBuyers.includes('All First-Timers') &&
            this.state.typeOfFlat.includes('5 Room or bigger resale flat') &&
            this.state.familyNucleus.includes('Singles Grant')
        )
        {
            this.setState({grantMonies: '$20000'})
            return true;
        }
        else if (
            this.state.citizenship.includes('Both Are Singaporean citizens') &&
            this.state.currentAge >=21 &&
            this.state.firstTimeBuyers.includes('All First-Timers') &&
            this.state.typeOfFlat.includes('2 to 4 room resale flat') &&
            this.state.familyNucleus.includes('Family Grant')
        )
        {
            this.setState({grantMonies: '$50000'})
            return true;
        }
        else if (
            this.state.citizenship.includes('Both Are Singaporean citizens') &&
            this.state.currentAge >=21 &&
            this.state.firstTimeBuyers.includes('All First-Timers') &&
            this.state.typeOfFlat.includes('5 Room or bigger resale flat') &&
            this.state.familyNucleus.includes('Family Grant')
        )
        {
            this.setState({grantMonies: '$40000'})
            return true;
        }
        else if (
            this.state.citizenship.includes('One Singaporean with a Singaporean permanent resident') &&
            this.state.currentAge >=21 &&
            this.state.firstTimeBuyers.includes('All First-Timers') &&
            this.state.typeOfFlat.includes('2 to 4 room resale flat') &&
            this.state.familyNucleus.includes('Family Grant')
        )
        {
            this.setState({grantMonies: '$40000'})
            return true;
        }
        else if (
            this.state.citizenship.includes('One Singaporean with a Singaporean permanent resident') &&
            this.state.currentAge >=21 &&
            this.state.firstTimeBuyers.includes('All First-Timers') &&
            this.state.typeOfFlat.includes('5 Room or bigger resale flat') &&
            this.state.familyNucleus.includes('Family Grant')
        )
        {
            this.setState({familyNucleus: 'Half-Family Grant'});
            this.setState({grantMonies: '$30000'})
            return true;
        }
        else if (
            this.state.citizenship.includes('Both Are Singaporean citizens') &&
            this.state.currentAge >=21 &&
            this.state.firstTimeBuyers.includes('One First-Timer, One Second-Timer') &&
            this.state.typeOfFlat.includes('2 to 4 room resale flat') &&
            this.state.familyNucleus.includes('Family Grant')
        )
        {
            this.setState({familyNucleus: 'Half-Family Grant'});
            this.setState({grantMonies: '$25000'})
            return true;
        }
        else if (
            this.state.citizenship.includes('Both Are Singaporean citizens') &&
            this.state.currentAge >=21 &&
            this.state.firstTimeBuyers.includes('One First-Timer, One Second-Timer') &&
            this.state.typeOfFlat.includes('5 Room or bigger resale flat') &&
            this.state.familyNucleus.includes('Family Grant')
        )
        {
            this.setState({familyNucleus: 'Half-Family Grant'});
            this.setState({grantMonies: '$20000'})
            return true;
        }
        else if (
            this.state.citizenship.includes('One Singaporean with a Singaporean permanent resident') &&
            this.state.currentAge >=21 &&
            this.state.firstTimeBuyers.includes('One First-Timer, One Second-Timer') &&
            this.state.typeOfFlat.includes('2 to 4 room resale flat') &&
            this.state.familyNucleus.includes('Family Grant')
        )
        {
            this.setState({familyNucleus: 'Half-Family Grant'});
            this.setState({grantMonies: '$20000'})
            return true;
        }
        else if (
            this.state.citizenship.includes('One Singaporean with a Singaporean permanent resident') &&
            this.state.currentAge >=21 &&
            this.state.firstTimeBuyers.includes('One First-Timer, One Second-Timer') &&
            this.state.typeOfFlat.includes('5 Room or bigger resale flat') &&
            this.state.familyNucleus.includes('Family Grant')
        )
        {
            this.setState({familyNucleus: 'Half-Family Grant'});
            this.setState({grantMonies: '$15000'})
            return true;
        }
        
        else{
            this.setState({grantMonies: 'Sorry, You Did Not Qualify For Any CPF Housing Grant'})
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
        const { citizenship, currentAge, firstTimeBuyers, lease, typeOfFlat, familyNucleus,financialStatus,grantMonies,otherQualifiedGrants } = this.state;
        const values = { citizenship, currentAge, firstTimeBuyers, lease, typeOfFlat, familyNucleus, financialStatus, grantMonies,otherQualifiedGrants };

        switch(step){
            default:
                return(
                    <FGPersonalDetails
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    handleClose={this.handleClose}
                    handleOpen={this.handleOpen}
                    values={values}
                    />
                );
            case 2:
                return(
                    <FGConfirm
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    values={values}
                    />
                );
            case 3:
                return(
                    <FGResults
                    backToHome={this.backToHome}
                    values={values}
                    />
                );
        }
    }
}

export default UserForm;
