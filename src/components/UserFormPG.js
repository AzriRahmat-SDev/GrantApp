import React, { Component } from 'react'
import PGPersonalDetails from './PGPersonalDetails'
import PGConfirm from './PGConfirm';


export class UserFormPG extends Component {

    state={
        step: 1,
        maritialStatus: null
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
        const { maritialStatus } = this.state;
        const values = { maritialStatus };

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

        }
    }
}

export default UserFormPG
