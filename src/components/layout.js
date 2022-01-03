import * as React from "react";
import {Link}  from "gatsby";
const Layout = ({pageTitle,children})=>{
    return (
        <div>
            这是一个可公用的组件
            <title>{pageTitle}</title>
      <nav>
        <ul>
          <li><Link to="/">主页</Link></li>
          <li><Link to="/news">新闻</Link></li>
        </ul>
      </nav>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
        </div>
    )
}
export default Layout;