import React from "react";
import {HeroSectionStyles} from '../../styles/homePage/HeroSectionStyles';
import ParagraphText from "../typography/ParagraphText";
import Button from '../buttons/Button'
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image";

function HeroSection() {
    return (
        <HeroSectionStyles>
            <div className="container">
                <div className="hero__wrapper">
                    <div className="left">
                        <h1 className="hero__heading"> Atlansec </h1>
                        <ParagraphText> Asociación de Ciberseguridad </ParagraphText>
                        <Button to='/blog' tag={Link} className="hero__button"> Explorar Blogs</Button>
                    </div>
                    <div className="right">
                        <StaticImage 
                        class="hero__image" 
                        src="../../images/57860.webp"
                        alt="foto"
                        placeholder="blurred"
                        objectPosition="50% 30%">
                        </StaticImage>
                    </div>
                </div>
            </div>
        </HeroSectionStyles>
    )
}

export default HeroSection