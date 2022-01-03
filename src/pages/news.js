import * as React from "react";
import {Link}  from "gatsby";
import Layout from "../components/layout"

const NewsPage = () => {
  return (
    <Layout pageTitle="新闻">
      <div>新闻内容</div>
      <Link to="/">返回</Link>
    </Layout>
  )
}

export default NewsPage