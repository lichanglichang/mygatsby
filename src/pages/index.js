import * as React from "react";
import Layout from "../component/layout";
import {StaticImage} from "gatsby-plugin-image";
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
        <title>星黛露</title>
        <h1>星黛露图片！</h1>
      </main>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/img1.jpg"
        width={200}
        height={200}
      />
    </Layout>
  );
};

export default IndexPage;
