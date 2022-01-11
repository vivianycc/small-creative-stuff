import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import HomeLayout from "../components/home-layout";
import { graphql, Link } from "gatsby";

export const query = graphql`
  query getWorks {
    allMdx(
      filter: { frontmatter: { posttype: { eq: "work" } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          title
          posttype
          hero_image {
            childImageSharp {
              gatsbyImageData
            }
          }
          hero_image_alt
        }
        id
        slug
      }
    }
  }
`;

// markup
const IndexPage = ({ data }) => {
  console.log(data);

  return (
    <HomeLayout pageTitle="Home Page">
      {data.allMdx.nodes.map((node) => {
        const image = getImage(node.frontmatter.hero_image);
        return (
          <Link to={`/work/${node.slug}`}>
            <GatsbyImage
              image={image}
              alt={node.frontmatter.hero_image_alt}
              key={node.id}
            />
          </Link>
        );
      })}
    </HomeLayout>
  );
};

export default IndexPage;
