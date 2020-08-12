import React, { Component } from 'react'
import FGPersonalDetails from './FGPersonalDetails'
import FGFinancialDetails from './FGFinancialDetails'
import FGConfirm from './FGConfirm'

export class UserForm extends Component {

    state={
        step: 1,
        citizenship: '',
        currentAge: null,
        firstTimeBuyers: '',
        lease: null,
        typeOfFlat: '',
        familyNucleus: 0,
        financialStatus: 0
    }

    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }

    nextStepEHG = () =>{
        const { step } = this.state;
        this.setState({
            step: step + 3
        });
    }

    nextStepPG = () =>{
        const { step } = this.state;
        this.setState({
            step: step + 5
        });
    }

    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    prevStepEHG = () =>{
        const { step } = this.state;
        this.setState({
            step: step - 3
        });
    }

    prevStepPG = () =>{
        const { step } = this.state;
        this.setState({
            step: step - 5
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
            familyNucleus: 1,
            financialStatus: 1
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
        const { citizenship, currentAge, firstTimeBuyers, lease, typeOfFlat, familyNucleus,financialStatus } = this.state;
        const values = { citizenship, currentAge, firstTimeBuyers, lease, typeOfFlat, familyNucleus, financialStatus };

        switch(step){
            case 1:
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
        }
    }
}

export default UserForm;
