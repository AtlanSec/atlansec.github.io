import React from 'react'
import LogoStyles from '../styles/LogoStyles'
import { StaticImage } from 'gatsby-plugin-image';


function Logo() {
    return (
    <LogoStyles to='/'>
        
        <StaticImage src="../images/logo.svg" alt="Logo" />
    </LogoStyles>
    );
};

export default Logo
