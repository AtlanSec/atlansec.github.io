import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Seo from '../../components/seo'

const BlogPage = ({ data }) => {
  return (
    <>
    <Seo 
    title="Blog"
    description="Atlansec Blog de Ciberseguridad">
    </Seo>
      <ul>
      {
        data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2>
              <Link to={`/blog/${node.frontmatter.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
            <p>Posted: {node.frontmatter.date}</p>
            <p>{node.excerpt}</p>
          </article>
        ))
      }
      </ul>
    </>
    
  )
}

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC }}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
        excerpt
      }
    }
  }
`

export default BlogPage