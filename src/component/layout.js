import * as React from "react";
import {Link} from "gatsby";

const Layout = ({children}) => {
  return (
    <div>
      <header>
        <Link to="/">星黛露</Link>|<Link to="/about">金高银</Link>
      </header>
      {children}
    </div>
  );
};

export default Layout;
