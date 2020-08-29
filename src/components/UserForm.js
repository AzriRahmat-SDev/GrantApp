import React, { Component } from 'react'
import FGPersonalDetails from './FGPersonalDetails'
import FGFinancialDetails from './FGFinancialDetails'
import FGConfirm from './FGConfirm'
import FGResults from './FGResults'

export class UserForm extends Component {

    state={
        step: 1,
        citizenship: '',
        currentAge: null,
        firstTimeBuyers: '',
        lease: null,
        typeOfFlat: 0,
        familyNucleus: null,
        financialStatus: null,
        grantMonies: "$1,000,000",
        otherQualifiedGrants: 'Proximity Grant Scheme',
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

    backToHome = () =>{
        const { step } = this.state;
        this.setState({
            step: step/step,
            citizenship: '',
            currentAge: 0,
            firstTimeBuyers: '',
            lease:'',
            typeOfFlat:'',
            familyNucleus: 0,
            financialStatus: 0,
            grantMonies: 100000,
            otherQualifiedGrants: 'Proximity Grant Scheme',
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
        const { citizenship, currentAge, firstTimeBuyers, lease, typeOfFlat, familyNucleus,financialStatus,grantMonies,otherQualifiedGrants } = this.state;
        const values = { citizenship, currentAge, firstTimeBuyers, lease, typeOfFlat, familyNucleus, financialStatus, grantMonies,otherQualifiedGrants };

        switch(step){
            default:
                return(
                    <FGPersonalDetails
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                    />
                );
            case 2:
                return(
                    <FGFinancialDetails
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    handleClose={this.handleClose}
                    handleOpen={this.handleOpen}
                    values={values}
                    />
                );
            case 3:
                return(
                    <FGConfirm
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    values={values}
                    />
                );
            case 4:
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
