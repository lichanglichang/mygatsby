import * as React from "react";
import {Link} from "gatsby";

const Layout = ({children}) => {
  return (
    <div>
      <header>
        <Link to="/">
          <span>首页</span>
        </Link>
        <Link to="/about">关于学校</Link>
      </header>
      {children}
    </div>
  );
};

export default Layout;
