import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List,ListItem } from 'material-ui/List';
import RaisedButton from  'material-ui/RaisedButton'

export class PGResults extends Component {

    backToHome = e =>{
        e.preventDefault();
        this.props.backToHomePG();
    }

    render() {

        const { values:{grantMonies, qualifiedGrantResults} } = this.props;

        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title = "Results Page"/>
                    <List>
                        <ListItem
                            primaryText = "Your amount of grants you are eligible for"
                            secondaryText = { grantMonies }
                        />
                        <ListItem
                            primaryText = "You also qualify for these other grants"
                            secondaryText = { qualifiedGrantResults }
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
        )
    }
}

const styles = {
    button: {
        margin: 15
    }
}

export default PGResults
