import * as React from "react";
import { useStaticQuery, graphql } from 'gatsby'
import Layout from "../components/layout"

// markup
const IndexPage = () => {

  const data = useStaticQuery(graphql`
query {
  site {
    siteMetadata {
      title
    }
  }
}
`)

  return (
    <Layout pageTitle="首页">
      <div>这是首页内容</div>
      { data.site.siteMetadata.siteUrl }
    </Layout>
  )
}

export default IndexPage
