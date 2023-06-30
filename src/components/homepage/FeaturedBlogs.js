import { graphql , useStaticQuery } from "gatsby";
import React from "react";
import {FeaturedBlogsStyles} from  '../../styles/homePage/FeaturedBlogsStyles'
import { SectionTitle} from "../typography/Title";
import ParagraphText from "../typography/ParagraphText";
import BlogGrid from '../blogs/BlogGrid'

function FeaturedBlogs() {
    const data  = useStaticQuery(graphql`
    {
        allMdx(limit: 3) {
          nodes {
            frontmatter {
              date(formatString: "MMMM D, YYYY")
              title
              slug
              hero_image {
                childImageSharp {
                  gatsbyImageData
                }
              }
              categories
            }
            id
            excerpt
          }
        }
      }
    `)
    
    const recentBlogs  = data.allMdx.nodes
    return (     
        <FeaturedBlogsStyles>
            <SectionTitle>Blogs Recientes</SectionTitle>
            <ParagraphText className="featuredBlogs__text">
                Ultimos Blogs Publicados
            </ParagraphText>
        <BlogGrid blogs={recentBlogs}></BlogGrid>
        </FeaturedBlogsStyles>
    )
}

export default FeaturedBlogs;