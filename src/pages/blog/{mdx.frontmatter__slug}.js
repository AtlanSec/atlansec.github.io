import * as React from 'react'
import Seo from '../../components/seo'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import {SingleBlogStyles} from '../../styles/blog/SingleBlogStyles'
import PageSpace from '../../components/PageSpace'
import { Title } from "../../components/typography/Title";
import ParagraphText from '../../components/typography/ParagraphText'
import {FiCalendar , FiUser} from 'react-icons/fi'
import {BiCategory} from 'react-icons/bi'
import {Link} from  'gatsby'
import {MyPortableText} from '../../components/MyPortableText'

const BlogPost = ({ data, children }) => {
  const image = getImage(data.mdx.frontmatter.hero_image)
  return (
    <SingleBlogStyles>
      <PageSpace top={150} bottom={80}>
        <div className='container'>
          <div className='blog-header'>
            <GatsbyImage
              image={image}
              alt={data.mdx.frontmatter.hero_image_alt}
              style={{ maxWidth: '100%' }} // Adjust the value as needed
              quality={100} // Adjust the value as needed
              className='blog-cover-image'
            />
            <Title className="title">{data.mdx.frontmatter.title}</Title>
            <ParagraphText className="publishedAt">
              <FiCalendar></FiCalendar>
              {data.mdx.frontmatter.date}
            </ParagraphText>
            <ParagraphText className="categoriesText">
            <BiCategory/>
            <span key={data.mdx.frontmatter.slug}>
                {/* For making categories, see #13, last part video*/}
                <Link to={`/categories/${data.mdx.frontmatter.categories}`}>
                {data.mdx.frontmatter.categories}
                </Link>    
            </span>
          </ParagraphText>
        
          <ParagraphText className="categoriesText">
            <FiUser></FiUser>
              <span key={data.mdx.frontmatter.slug}>
                  {/* For making categories, see #13, last part video*/}
                  <Link to={`/authors/${data.mdx.frontmatter.author}`}>
                  {data.mdx.frontmatter.author}
                  </Link>    
              </span>
          </ParagraphText>
          </div>
          <hr className='hr'></hr>
          <div className='body'>
            <MyPortableText value={data.mdx.body}></MyPortableText>
          </div>
        </div>
      </PageSpace>
    </SingleBlogStyles>
  )
}

export const query = graphql`
query ($id: String) {
  mdx(id: {eq: $id}) {
    frontmatter {
      title
      author
      slug
      categories
      date(formatString: "MMMM D, YYYY")
      hero_image_alt
      hero_image {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
    body
  }
}
`

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />


export default BlogPost