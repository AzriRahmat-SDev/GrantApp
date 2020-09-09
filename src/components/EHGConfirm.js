import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List,ListItem } from 'material-ui/List';
import RaisedButton from  'material-ui/RaisedButton'

export class EHGConfirm extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStepEHG();
    };
    back = e => {
        e.preventDefault();
        this.props.prevStepEHG();
    };

    render() {
        const { values:{maritalStatus,currentAge,lease,firstTimeBuyers,income} } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title = "Confirmation"/>
                    <List>
                        <ListItem
                            primaryText = "Based On Your Marital You Will Be Categorized Under"
                            secondaryText = { maritalStatus }
                        />
                        <ListItem
                            primaryText = "Your Age"
                            secondaryText = { "You're " + currentAge + " years old" }
                        />
                        <ListItem
                            primaryText = "The Remaining Lease Of Your Intended Flat To Purchase "
                            secondaryText = { lease + " years of lease left" }
                        />
                        <ListItem
                            primaryText = "Are You First Time Buyer?"
                            secondaryText = { firstTimeBuyers }
                        />
                        <ListItem
                            primaryText = "Your Average Household Income Are As Follows "
                            secondaryText = { "$" + income }
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
    margin: 15,
    marginTop: 2,
    primary: true
    },
    formControl: {
    margin: 1,
    minWidth: 120,
    }
}

export default EHGConfirm
