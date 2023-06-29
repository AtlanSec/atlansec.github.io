/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  pathPrefix: "/github.atlansec.io/public",
  siteMetadata: {
    title: `atlansec.github.io`,
    siteUrl: `https://www.atlansec.es`,
    description: `Blog de Ciberseguridad de Atlansec`
  },
  plugins: [
  `gatsby-plugin-image`,
  `gatsby-plugin-sharp`,
  `gatsby-transformer-sharp`, // Needed for dynamic images
  'gatsby-plugin-react-svg',
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