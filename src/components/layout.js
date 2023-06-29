import * as React from 'react'
import GlobalStyles from '../styles/GlobalStyles'
import Header from './header'

const Layout = ({ children }) => {
    
    return (
        <>
        <GlobalStyles></GlobalStyles>
        <Header></Header>
        {children}</>
    )
}

export default Layout