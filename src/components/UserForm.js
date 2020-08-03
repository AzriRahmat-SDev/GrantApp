import React, { Component } from 'react'
import FGPersonalDetails from './FGPersonalDetails'
import FGFinancialDetails from './FGFinancialDetails'

export class UserForm extends Component {

    state={
        step: 1,
        citizenship: '',
        currentAge: '',
        firstTimeBuyers: '',
        lease:'',
        typeOfFlat:''
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
            citizenship: "SCSC",
            currentAge: '',
            firstTimeBuyers: '',
            lease:'',
            typeOfFlat:'',
        })
    }

    handleChange = input => e => {
        this.setState({[input]: e.target.value})
    };

    render() {
        const { step } = this.state;
        const { citizenship, currentAge, firstTimeBuyers, lease, typeOfFlat } = this.state;
        const values = { citizenship, currentAge, firstTimeBuyers, lease, typeOfFlat };

        switch(step){
            case 1:
                return(
                    <FGPersonalDetails
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    value={values}
                    />
                );
            case 2:
                return(
                    <FGFinancialDetails
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    value={values}
                    />
                );
        }
    }
}

export default UserForm;
