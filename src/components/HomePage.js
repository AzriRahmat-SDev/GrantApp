import '../App.css';
import React, { Component } from 'react'
import { List,ListItem } from 'material-ui/List';
import AppBar from 'material-ui/AppBar';
import RaisedButton from  'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Link } from 'react-router-dom';

export class HomePage extends Component { 
    
    render() {
        return (
            <MuiThemeProvider>
                        <React.Fragment>
                            <AppBar title="Welcome To The Homepage Of This App"/>
                                <List>
                                <ListItem primaryText="Housing Grant For DBSS Flats?"/>
                                        <Link to="/HomePageDBSS">
                                            <RaisedButton
                                            label="CLICK HERE!"
                                            variant="outline"
                                            style={styles.button}
                                            //target="_blank"
                                        />
                                        </Link>
                                </List>
                                <List>
                                <ListItem primaryText="Housing Grant For HDB(BTO) Flats?"/>
                                        <Link to="/HomepageBTO">
                                        <RaisedButton
                                            label="CLICK HERE!"
                                            variant="outline"
                                            style={styles.button}
                                            //target="_blank"
                                        />
                                        </Link>
                                </List>
                                <List>
                                <ListItem primaryText="Housing Grant For EC Flats?"/>
                                        <Link to="/HomepageEC">
                                        <RaisedButton
                                            label="CLICK HERE!"
                                            variant="outline"
                                            style={styles.button}
                                            //target="_blank"
                                        />
                                        </Link>
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

