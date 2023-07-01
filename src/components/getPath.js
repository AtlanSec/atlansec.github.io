import { useStaticQuery, graphql } from "gatsby";
import {getImage} from "gatsby-plugin-image";

function UseImagePath(src) {
    const data = useStaticQuery(graphql`
    query ImageQuery($src: String) {
      file(relativePath: { eq: $src }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `, { src });

  return getImage(data.file.childImageSharp);
}

export default UseImagePath;
