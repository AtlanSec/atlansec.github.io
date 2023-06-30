/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Atlansec`,
    siteUrl: `https://www.atlansec.es`,
    description: `Blog de Ciberseguridad de Atlansec`
  },
  plugins: [
  `gatsby-plugin-react-helmet`,
  `gatsby-plugin-image`,
  `gatsby-plugin-sharp`,
  `gatsby-transformer-sharp`, // Needed for dynamic images
  'gatsby-plugin-react-svg',
  'gatsby-plugin-styled-components',
  `gatsby-plugin-mdx`,
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: `blog`,
      path: `${__dirname}/blog`,
    }
  },
  ]
};