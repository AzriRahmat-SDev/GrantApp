import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List,ListItem } from 'material-ui/List';
import RaisedButton from  'material-ui/RaisedButton'

export class FGConfirm extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { values:{citizenship, currentAge, firstTimeBuyers, typeOfFlat, familyNucleus} } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title = "Confirmation"/>
                    <List>
                        <ListItem
                            primaryText = "The Combination Of Your Citizenship Are"
                            secondaryText = { citizenship }
                        />
                        <ListItem
                            primaryText = "Your Age"
                            secondaryText = { "You're " + currentAge + " years old"}
                        />
                        <ListItem
                            primaryText = "Are You First Time Buyer?"
                            secondaryText = { firstTimeBuyers }
                        />
                        <ListItem
                            primaryText = "The Type Of Flat That You Have Selected Is"
                            secondaryText = { typeOfFlat }
                        />
                        <ListItem
                            primaryText = "Based On Your Family Nucleus You Will Be Categorized Under"
                            secondaryText = { familyNucleus }
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
