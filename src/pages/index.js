import * as React from "react";
import Layout from "../component/layout";

const IndexPage = () => {

//   const data = useStaticQuery(graphql`
// query {
//   site {
//     siteMetadata {
//       title
//     }
//   }
// }
// `)

  return (
    <Layout>
      <main>
        <title>我的博客</title>
        <h1>首页内容</h1>
      </main>
    </Layout>
  );
};

export default IndexPage;
