import { useStaticQuery, graphql } from "gatsby";

function UseImagePath(src) {
  const data = useStaticQuery(graphql`
    query ($src: String){
      file(relativePath: { eq: $src }) {
        childImageSharp {
          fluid {
            aspectRatio
            base64
            sizes
            src
            srcSet
          }
        }
      }
    }
  `, {src});

  return data.file.childImageSharp.fluid;
}

export default UseImagePath;
