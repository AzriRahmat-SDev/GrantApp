import '../App.css';
import React, { Component } from 'react'
import { List,ListItem } from 'material-ui/List';
import AppBar from 'material-ui/AppBar';
import RaisedButton from  'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export class HomePage extends Component { 
    
    render() {
        return (
            <MuiThemeProvider>
                        <React.Fragment>
                            <AppBar title="Welcome To The Homepage Of This App"/>
                                <List>
                                <ListItem primaryText="Housing Grant For DBSS Flats?"/>
                                        <RaisedButton
                                            label="CLICK HERE!"
                                            variant="outline"
                                            style={styles.button}
                                            href="/GrantApp/HomePageDBSS"
                                            //target="_blank"
                                        />
                                </List>
                                <List>
                                <ListItem primaryText="Housing Grant For HDB(BTO) Flats?"/>
                                        <RaisedButton
                                            label="CLICK HERE!"
                                            variant="outline"
                                            style={styles.button}
                                            href="/HomepageBTO"
                                            //target="_blank"
                                        />
                                </List>
                                <List>
                                <ListItem primaryText="Housing Grant For EC Flats?"/>
                                        <RaisedButton
                                            label="CLICK HERE!"
                                            variant="outline"
                                            style={styles.button}
                                            href="/HomepageEC"
                                            //target="_blank"
                                        />
                                </List>
                        </React.Fragment>
            </MuiThemeProvider>
        )
    }
}
        const styles = {
            button: {
                margin: 15,
                marginTop: 2,
                primary: true,
                size:"small"
            },
            formControl: {
                margin: 1,
                minWidth: 120,
            }
    
}

export default HomePage

