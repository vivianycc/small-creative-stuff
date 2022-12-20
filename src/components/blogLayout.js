import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import {
  siteTitle,
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
} from "./home-layout.module.css";
import Header from "./home-layout";
import { MDXRenderer } from "gatsby-plugin-mdx";

const Layout = ({ data }) => {
  return (
    <div className={container}>
      <title>Blog | {data.site.siteMetadata.title}</title>
      <Header />

      <main>
        <h1 className={heading}>{data.mdx.frontmatter.title}</h1>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </main>
    </div>
  );
};

export const query = graphql`
  query getPost($id: String) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
      }
      body
    }
    site {
      id
      siteMetadata {
        title
      }
    }
  }
`;
export default Layout;
