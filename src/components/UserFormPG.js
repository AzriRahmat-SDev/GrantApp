import React, { Component } from 'react'
import PGPersonalDetails from './PGPersonalDetails'
import PGConfirm from './PGConfirm';
import PGResults from './PGResults'


export class UserFormPG extends Component {

    state={
        step: 1,
        maritialStatus: null,
        firstLocation: null,
        secondLocation: null,
        grantMonies: '$1,000,000',
        otherQualifiedGrants: 'Proximity Grant Scheme',
        open:false,
        setOpen:false,
    }

    nextStepPG = () =>{
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
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
            maritialStatus: null,
            firstLocation: null,
            secondLocation: null,
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
        const { maritialStatus,firstLocation,secondLocation,grantMonies,otherQualifiedGrants } = this.state;
        const values = { maritialStatus,firstLocation,secondLocation,grantMonies,otherQualifiedGrants };

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
