import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List,ListItem } from 'material-ui/List';
import RaisedButton from  'material-ui/RaisedButton'

export class FGResults extends Component {

    backToHome = e =>{
        e.preventDefault();
        this.props.backToHome();
    }

    render() {
        const { values:{currentAge, lease} } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title = "Results Page"/>
                    <List>
                        <ListItem
                            primaryText = "Your amount grant of grants you are eligable for"
                            secondaryText = { currentAge }
                        />
                        <ListItem
                            primaryText = "You also qualify for these other grants"
                            secondaryText = { lease }
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

export default FGResults
