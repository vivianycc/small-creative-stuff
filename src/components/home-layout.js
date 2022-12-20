import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Header from "./header";
import { container, imgGrid } from "./home-layout.module.css";

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
      <main>
        <div className={imgGrid}>{children}</div>
      </main>
    </div>
  );
};

export default Layout;
