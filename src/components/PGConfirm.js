import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List,ListItem } from 'material-ui/List';
import RaisedButton from  'material-ui/RaisedButton'

export class PGConfirm extends Component {

    continue = e => {
        e.preventDefault();
        //Process form here (data sent to back end api)
        this.props.nextStepPG();
    };
    back = e => {
        e.preventDefault();
        this.props.prevStepPG();
    };

    render() {
        const { values:{maritalStatus,currentAge,citizenship,houseHoldStatus,proximityType} } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title = "Confirmation"/>
                    <List>
                        <ListItem
                            primaryText = "Your Current Age"
                            secondaryText = { "You're " + currentAge + " years old" }
                        />
                        <ListItem
                            primaryText = "At Least 1 Of Your Family Members Is A Singaporean Or A Singaporean Permanent Resident"
                            secondaryText = { "You have answered " + citizenship }
                        />
                        <ListItem
                            primaryText = "Based On Your Marital Status You Will Be Categorized Under"
                            secondaryText = { maritalStatus }
                        />
                        <ListItem
                            primaryText = "You have chosen to"
                            secondaryText = { proximityType }
                        />
                        <ListItem
                            primaryText = "Have you received a Proximity Housing Grant before? "
                            secondaryText = { "You have answered " + houseHoldStatus }
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
    button:{
        margin:15
    }
}

export default PGConfirm
