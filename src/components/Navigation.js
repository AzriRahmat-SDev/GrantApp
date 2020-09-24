import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom'

function Navigation() {

    const NavigationStyles = {
        color: 'white'
    }
    // const ButtonStyle = {
    //     color: 'aqua'
    // }
  return (
    <nav>
            <ul className="nav-Links">
                {/* <button style={ButtonStyle}> */}
                {/* </button> */}
                <Link style={NavigationStyles} to="#">
                    <li>Housing Grants For HDB Flats</li>
                </Link>
                <Link style={NavigationStyles} to="/FGPersonalDetails">
                    <li>Housing Grants For DBSS Flats</li>
                </Link>
                <Link style={NavigationStyles} to="/FGPersonalDetails">
                    <li>CPF Housing Grant</li>
                </Link>
                <Link style={NavigationStyles} to="/EHGPersonalDetails">
                    <li>Enhance CPF Housing Grant</li>
                </Link>
                <Link style={NavigationStyles} to="/PGPersonalDetails">
                    <li>Proximity Grant</li>
                </Link>
            </ul>
    </nav>
  );
}



export default Navigation;
