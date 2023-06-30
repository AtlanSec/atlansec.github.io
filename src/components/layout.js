import React from 'react';
import Header from './header';
import GlobalStyles from '../styles/GlobalStyles';
import Footer from './footer';
import Search from './search/SearchModal';
import { SearchModalContextProvider } from '../contexts/searchModalContext';

function Layout({ children }) {
  return (
    <SearchModalContextProvider>
      <GlobalStyles />
      <Search />
      <Header />
      <main>{children}</main>
      <Footer />
    </SearchModalContextProvider>
  );
}

export default Layout;