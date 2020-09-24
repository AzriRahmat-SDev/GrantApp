import React, { Component } from 'react'
import PGPersonalDetails from './PGPersonalDetails'
import PGConfirm from './PGConfirm';
import PGResults from './PGResults'


export class UserFormPG extends Component {

    state={
        step: 1,
        currentAge:null,
        citizenship:null,
        houseHoldStatus:null,
        maritalStatus: null,
        proximityType: null,
        grantMonies: '$1,000,000',
        qualifiedGrantResults:'',
        otherQualifiedGrants: 'CPF Housing Grant Scheme & Enhanced Housing Grant Scheme',
        otherQualifiedGrants1: 'CPF Half-Housing Grant Scheme',
        errorMessage: 'Sorry You Did Not Qualify For Enhanced Housing Grant',
        open:false,
        setOpen:false,
    }

    nextStepPG = () =>{
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
        this.toCalculate()
        this.toCheck()
    }
   prevStepPG = () =>{
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    backToHomePG = () =>{
        const { step } = this.state;
        this.setState({
            step: step/step,
            currentAge:null,
            citizenship:null,
            houseHoldStatus:null,
            maritalStatus: null,
            proximityType: null,
            grantMonies: '$1,000,000',
            qualifiedGrantResults:'',
            otherQualifiedGrants: 'CPF Housing Grant Scheme & Enhanced Housing Grant Scheme',
            otherQualifiedGrants1: 'CPF Half-Housing Grant Scheme',
            errorMessage: 'Sorry You Did Not Qualify For Enhanced Housing Grant',
            open:false,
            setOpen:false,
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

    toCalculate = () =>{
        if(
                this.state.currentAge >= 35 &&
                this.state.citizenship.includes("Yes") &&
                this.state.maritalStatus.includes("Singles grant") &&
                this.state.proximityType.includes("Live with your parents or/and children") &&
                this.state.houseHoldStatus.includes("No")
        )
        {
            this.setState({grantMonies: '$15000'})
            return true;
        }
        else if(
            this.state.currentAge >= 35 &&
            this.state.citizenship.includes("Yes") &&
            this.state.maritalStatus.includes("Singles grant") &&
            this.state.proximityType.includes("Live within 4km from your other family members") &&
            this.state.houseHoldStatus.includes("No")
        )
        {
            this.setState({grantMonies: '$10000'})
            return true;
        }
        else if(
            this.state.currentAge >= 21 &&
            this.state.citizenship.includes("Yes") &&
            this.state.maritalStatus.includes("Family grant") &&
            this.state.proximityType.includes("Live with your parents or/and children") &&
            this.state.houseHoldStatus.includes("No")
        )
        {
            this.setState({grantMonies: '$30000'})
            return true;
        }
        else if(
            this.state.currentAge >= 21 &&
            this.state.citizenship.includes("Yes") &&
            this.state.maritalStatus.includes("Family grant") &&
            this.state.proximityType.includes("Live within 4km from your other family members") &&
            this.state.houseHoldStatus.includes("No")
        )
        {
            this.setState({grantMonies: '$30000'})
            return true;
        }
        else{
            this.setState({
                grantMonies: this.state.errorMessage
            })
            return true;
        }
    }

    toCheck = () => {
        if
        ( 
            this.state.citizenship === "Yes" &&
            this.state.maritalStatus ===  "Singles grant"
            
        )
        {
            this.setState({ qualifiedGrantResults: this.state.otherQualifiedGrants1 })
            return true;
        }
        else
        {
            this.setState({ qualifiedGrantResults: this.state.otherQualifiedGrants })
            return true;
        }
    }

    render() {
        const { step } = this.state;
        const { maritalStatus,currentAge,citizenship,houseHoldStatus,proximityType,grantMonies,qualifiedGrantResults,otherQualifiedGrants,otherQualifiedGrants1,errorMessage } = this.state;
        const values = { maritalStatus,currentAge,citizenship,houseHoldStatus,proximityType,grantMonies,qualifiedGrantResults,otherQualifiedGrants,otherQualifiedGrants1,errorMessage };

        switch(step){
            default:
                return(
                    <PGPersonalDetails 
                    nextStepPG={this.nextStepPG}
                    handleChange={this.handleChange}
                    values={values}
                    />
                )
            case 2:
                return(
                    <PGConfirm
                    nextStepPG={this.nextStepPG}
                    prevStepPG={this.prevStepPG}
                    handleChange={this.handleChange}
                    values={values}
                    />
                )
            case 3:
                return(
                    <PGResults
                    backToHomePG={this.backToHomePG}
                    values={values}
                    />
                )

        }
    }
}

export default UserFormPG
