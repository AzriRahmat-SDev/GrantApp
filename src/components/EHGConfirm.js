import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List,ListItem } from 'material-ui/List';
import RaisedButton from  'material-ui/RaisedButton'

export class EHGConfirm extends Component {

    continue = e => {
        e.preventDefault();
        //Process form here (data sent to back end api)
        this.props.nextStepEHG();
    };
    back = e => {
        e.preventDefault();
        this.props.prevStepEHG();
    };

    render() {
        const { values:{maritialStatus,currentAge,lease,firstTimeBuyers,income} } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title = "Confirmation"/>
                    <List>
                        <ListItem
                            primaryText = "Your maritial status"
                            secondaryText = { maritialStatus }
                        />
                        <ListItem
                            primaryText = "Your current age"
                            secondaryText = { currentAge }
                        />
                        <ListItem
                            primaryText = "The remaining lease of flat "
                            secondaryText = { lease }
                        />
                        <ListItem
                            primaryText = "First time buyer? "
                            secondaryText = { firstTimeBuyers }
                        />
                        <ListItem
                            primaryText = "Your average household income "
                            secondaryText = { income }
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
