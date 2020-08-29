import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List,ListItem } from 'material-ui/List';
import RaisedButton from  'material-ui/RaisedButton'

export class FGConfirm extends Component {

    continue = e => {
        e.preventDefault();
        //Process form here (data sent to back end api)
        this.props.nextStep();
    };
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { values:{citizenship, currentAge, firstTimeBuyers, lease, typeOfFlat, familyNucleus,financialStatus} } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title = "Confirmation"/>
                    <List>
                        <ListItem
                            primaryText = "The Combination Of Your Citizenships Are"
                            secondaryText = { citizenship }
                        />
                        <ListItem
                            primaryText = "Your Age"
                            secondaryText = { currentAge + " years old"}
                        />
                        <ListItem
                            primaryText = "Are You First Time Buyer?"
                            secondaryText = { firstTimeBuyers }
                        />
                        <ListItem
                            primaryText = "Remaining Lease of Flat"
                            secondaryText = { lease }
                        />
                        <ListItem
                            primaryText = "The Type Of Flat That You Have Selected Is"
                            secondaryText = { typeOfFlat }
                        />
                        <ListItem
                            primaryText = "Your Family Nucleus"
                            secondaryText = { familyNucleus }
                        />
                        <ListItem
                            primaryText = "Your Combined Household Monthly Income is"
                            secondaryText = { financialStatus }
                        />
                    </List>
                    <RaisedButton
                        label="Continue"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    />
                    <RaisedButton
                        label="Back"
                        primary={false}
                        style={styles.button}
                        onClick={this.back}
                    />
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

export default FGConfirm
