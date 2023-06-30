import * as React from 'react'
import GlobalStyles from '../styles/GlobalStyles'
import Header from './header'
import Footer from './footer'
import { SearchModalContextProvider } from '../contexts/searchModalContext';

function Layout({ children }) {
    return (
      <SearchModalContextProvider>
        <GlobalStyles />
        <Header />
        <main>{children}</main>
        <Footer />
      </SearchModalContextProvider>
    );
  }

export default Layout