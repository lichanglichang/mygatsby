import * as React from "react";
import {Link, useStaticQuery, graphql} from "gatsby";

const Layout = ({pageTitle, children}) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  console.log(data);
  return (
    <div>
      <title>
        {pageTitle} | {data.site.siteMetadata.title}
      </title>
      <header>
        <Link to="/">星黛露</Link>|<Link to="/about">金高银</Link>
      </header>
      {children}
    </div>
  );
};

export default Layout;
