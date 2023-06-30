import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'

const Seo = ({ title , description }) => {
  const {site} = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);
  
  const seo = {
    title: title ? `${title} - ${site.siteMetadata.title}` : site.siteMetadata.title,
    description: description || site.siteMetadata.description,
  }

  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name='description' content={seo.description}></meta>
    </Helmet>
  )
}

export default Seo