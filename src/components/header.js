import React from "react";
import {useState} from "react";
import HeaderStyles from '../styles/HeaderStyles'
import { menu } from '../constants/menu'
import { Link } from "gatsby";
import {MdSearch , MdMenu, MdClose} from 'react-icons/md'
import Logo from "./logo"
import ActionButton from "./buttons/ActionButton";
import clsx from 'clsx'

function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const handleNavItemClick = () => {
        if (isNavOpen) {
            setIsNavOpen(false);
        }
    };

    return (
        <HeaderStyles>
            <div className="container">
                <div className="header__container">
                <div className="logo">
                    <Logo></Logo>
                </div>
                    <div className={clsx('nav__wrapper', isNavOpen && 'open')}>
                        <div className="mobileIcon">
                            <div className="searchIcon">
                                <div className="searchIcon__wrapper">
                                    <MdSearch />
                                </div> 
                            </div>
                                <ActionButton className='mobileMenuBtn'
                                onClick={() => setIsNavOpen(true)}
                                onKeyDown={() => setIsNavOpen(true)}
                                >
                                    <MdMenu/>
                                </ActionButton>
                        </div>
                        {isNavOpen && (
                    <div
                        aria-label="Close Menu"
                        role="button"
                        tabIndex={0}
                        className="mobileNavBg"
                        onKeyDown={() => setIsNavOpen(false)}
                        onClick={() => setIsNavOpen(false)}
                    />
                    )}
                    <nav>
                        <ActionButton className="mobileMenuCloseBtn"
                        onClick={() => setIsNavOpen(false)}
                        onKeyDown={() => setIsNavOpen(false)}
                        >
                            <MdClose></MdClose>
                        </ActionButton>
                        <ul>
                            {menu.map((item) => (
                                <li key={item.path}>
                                    <Link 
                                    to={item.path} 
                                    onClick={handleNavItemClick}>
                                        {item.title}
                                    </Link>
                                </li>
                            ))}

                            <li className="searchIcon">
                                <div className="searchIcon__wrapper">
                                    <MdSearch />
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
                </div>
            </div>
        </HeaderStyles>
    )
};

export default Header;