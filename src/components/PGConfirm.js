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
        const { values:{maritialStatus, firstLocation, secondLocation} } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title = "Confirmation"/>
                    <List>
                        <ListItem
                            primaryText = "Your marital status"
                            secondaryText = { maritialStatus }
                        />
                        <ListItem
                            primaryText = "Postal Code of intended purchased DBSS flat"
                            secondaryText = { firstLocation }
                        />
                        <ListItem
                            primaryText = "Postal Code of your parents' or child's place of residence"
                            secondaryText = { secondLocation }
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
