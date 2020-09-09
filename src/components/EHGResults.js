import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List,ListItem } from 'material-ui/List';
import RaisedButton from  'material-ui/RaisedButton'

export class EHGResults extends Component {

    backToHome = e =>{
        e.preventDefault();
        this.props.backToHomeEHG();
    }

    render() {
        
    const {values: {grantMoniesResult, otherQualifiedGrants}} = this.props;

        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title = "Results Page"/>
                    <List>
                        <ListItem
                            primaryText = "Your amount of grants you are eligible for"
                            secondaryText = { grantMoniesResult }
                        />
                        <ListItem
                            primaryText = "You might also qualify for these other grants"
                            secondaryText = { otherQualifiedGrants }
                        />
                    </List>
                    <RaisedButton
                        label="Back to Home"
                        primary={true}
                        style={styles.button}
                        onClick={this.backToHome}
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

export default EHGResults
