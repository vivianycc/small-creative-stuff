import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { container } from "./home-layout.module.css";
import Header from "./home-layout";

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <div className={container}>
      <title>
        {pageTitle} | {data.site.siteMetadata.title}
      </title>

      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
