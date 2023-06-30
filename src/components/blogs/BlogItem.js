import React from "react";
import {BlogItemStyles} from '../../styles/blog/BlogItemStyles'
import {Link} from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Title } from "../typography/Title";
import ParagraphText from "../typography/ParagraphText";

function BlogItem({ title , path , categories , image , publishedAt }) {
    return  (
    <BlogItemStyles>
        <Link to={`/blog/${path}`}>
            <GatsbyImage
            image={getImage(image)}
            className="img">
            </GatsbyImage>
        </Link>
        <Link to={`/blog/${path}`}>
            <Title>{title}</Title>
        </Link>
        <ParagraphText className="categoriesText">
            <span key={path}>
                {/* For making categories, see #13, last part video*/}
                <Link to={`/categories/${categories}`}>
                {categories}
                </Link>    
            </span>
        </ParagraphText>
        {publishedAt && (
            <ParagraphText>
                {publishedAt}
            </ParagraphText>
        )}
        
    </BlogItemStyles>
  )
}

export default BlogItem;