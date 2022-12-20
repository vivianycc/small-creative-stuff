import React from "react";
import { Link, graphql } from "gatsby";
import { container } from "./home-layout.module.css";
import Header from "./home-layout";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Work = ({ data, pageContext }) => {
  console.log(data, pageContext);
  const image = getImage(data.mdx.frontmatter.hero_image);

  return (
    <div className={container}>
      <title>Stuff</title>

      <Header />
      <main>
        <p>{data.mdx.frontmatter.date}</p>
        <GatsbyImage image={image} alt={data.mdx.frontmatter.hero_image_alt} />
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </main>
    </div>
  );
};
export const query = graphql`
  query getWork($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date
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
`;

export default Work;
