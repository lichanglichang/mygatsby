import * as React from "react";
import Layout from "../component/layout";
import {StaticImage} from "gatsby-plugin-image";
import {graphql} from "gatsby";
const IndexPage = ({data}) => {
  return (
    <Layout pageTitle="星黛露">
      <main>
        <h1>星黛露图片！</h1>
      </main>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/img1.jpg"
        width={200}
        height={200}
      />
      <ul>
        {data.allFile.nodes.map(node => (
          <li key={node.name}>{node.name}</li>
        ))}
      </ul>
    </Layout>
  );
};
export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`;
export default IndexPage;
