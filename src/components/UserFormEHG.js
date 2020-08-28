import React, { Component } from 'react'
import EHGPersonalDetails from './EHGPersonalDetails'
import EHGConfirm from './EHGConfirm'
import EHGResults from './EHGResults'



export class UserFormEHG extends Component {

    state={
        step: 1,
        maritialStatus: null,
        currentAge: null,
        lease: null,
        firstTimeBuyers: 'Yes',
        employmentStatus: null,
        income: null,
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
            income: null
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
        const { maritialStatus,currentAge,lease,firstTimeBuyers,grantMonies,otherQualifiedGrants,income } = this.state;
        const values = { maritialStatus,currentAge,lease,firstTimeBuyers,grantMonies,otherQualifiedGrants,income };

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
