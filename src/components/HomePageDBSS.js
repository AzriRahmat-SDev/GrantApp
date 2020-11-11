import React, { Component } from 'react'
import { List,ListItem } from 'material-ui/List';
import AppBar from 'material-ui/AppBar';
import RaisedButton from  'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Link } from 'react-router-dom';

export class HomePageDBSS extends Component {
    render() {
        return (
            <MuiThemeProvider>
                        <React.Fragment>
                            <AppBar title="Eligibility Of Grant For DBSS Flats"/>
                                <List>
                                <ListItem primaryText="CPF Housing Grant Scheme"/>
                                    <Link to="/FGPersonalDetails">
                                        <RaisedButton
                                            label="CLICK HERE!"
                                            variant="outline"
                                            style={styles.button}
                                            //target="_blank"
                                        />
                                    </Link>
                                </List>
                                <List>
                                <ListItem primaryText="Enhance Housing Grant Scheme"/>
                                    <Link to="/EHGPersonalDetails">    
                                        <RaisedButton
                                            label="CLICK HERE!"
                                            variant="outline"
                                            style={styles.button}
                                        />
                                    </Link>
                                </List>
                                <List>
                                <ListItem primaryText="Proximity Grant Scheme"/>
                                        <Link to="/PGPersonalDetails">
                                            <RaisedButton
                                                label="CLICK HERE!"
                                                variant="outline"
                                                style={styles.button}
                                                href="/PGPersonalDetails"
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

export default HomePageDBSS
