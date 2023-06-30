import React from "react";
import {FooterStyles} from '../styles/FooterStyles';
import Logo from "./logo"
import ParagraphText from "./typography/ParagraphText";
import { menu } from '../constants/menu'
import { Link } from "gatsby";
import { socialLinks } from "../constants/socialLinks";

function Footer() {
    return(
        <FooterStyles>
            <div className="container">
                <Logo/>
                <ParagraphText className="footer__text"> Asociacion de Ciberseguridad Atlansec</ParagraphText>
                <ul className="footer__menuList">
                    {menu.map(item => (
                        <li key={item.path}>
                            <Link to={item.path}>{item.title}</Link>
                        </li>
                    ))}
                </ul>
                <ul className="footer__socialList">
                    {socialLinks.map(item => (
                        <li key={item.path}>
                            <a href={item.url}>{item.icon}</a>
                        </li>
                    ))}
                </ul>
                <ParagraphText className="copyright">
                    @ Atlansec Creative {new Date().getFullYear()} All Rights reserved
                </ParagraphText>
            </div>
        </FooterStyles>
    )
}

export default Footer;