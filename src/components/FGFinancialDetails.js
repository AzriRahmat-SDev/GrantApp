import React, { Component } from 'react'
import {MuiThemeProvider, AppBar} from "@material-ui/core";

export class FGFinancialDetails extends Component {
    
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { values,handleChange } = this.props;
                return (
                    <MuiThemeProvider>
                        <React.Fragment>
                            <AppBar title = "Enter Personal Details"/>
                        </React.Fragment>
                    </MuiThemeProvider>
                );
            }
        }

const styles = {
    button: {
        margin: 15
    }
}

export default FGFinancialDetails
