import React, { Component } from 'react'
import EHGPersonalDetails from './EHGPersonalDetails'



export class UserFormEHG extends Component {

    state={
        step: 1,
        maritialStatus: null,
        currentAge: null,
        lease: null,
        firstTimeBuyers: null,
        employmentStatus: null,
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
        const { maritialStatus,currentAge,lease,firsrtTimeBuyers,grantMonies,otherQualifiedGrants } = this.state;
        const values = { maritialStatus,currentAge,lease,firsrtTimeBuyers,grantMonies,otherQualifiedGrants };

        switch(step){
            default:
                return(
                    <EHGPersonalDetails 
                    nextStepPG={this.nextStepPG}
                    handleChange={this.handleChange}
                    values={values}
                    />
                )
            // case 2:
            //     return(
            //         <EHGConfirm
            //         nextStepPG={this.nextStepPG}
            //         prevStepPG={this.prevStepPG}
            //         handleChange={this.handleChange}
            //         values={values}
            //         />
            //     )
            // case 3:
            //     return(
            //         <EHGResults
            //         backToHomePG={this.backToHomePG}
            //         values={values}
            //         />
            //     )

        }
    }
}

export default UserFormEHG
