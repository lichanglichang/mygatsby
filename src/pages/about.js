import * as React from "react";
import Layout from "../component/layout";
import {StaticImage} from "gatsby-plugin-image";
import * as aboutStyle from "../styles/about.css";
import {graphql} from "gatsby";
import {MDXRenderer} from "gatsby-plugin-mdx";

const About = ({data}) => {
  console.log(aboutStyle);
  return (
    <Layout pageTitle="金高银">
      <main>
        <p className="blogTitle">金高银图片！</p>
        <StaticImage
          alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
          src="../images/img2.jpg"
          width={200}
          height={200}
        />
        {data.allMdx.nodes.map(node => (
          <article key={node.id}>
            <h2>{node.frontmatter.title}</h2>
            <p>Posted: {node.frontmatter.date}</p>
            <MDXRenderer>{node.body}</MDXRenderer>
          </article>
        ))}
      </main>
    </Layout>
  );
};
export const query = graphql`
  query {
    allMdx {
      nodes {
        frontmatter {
          title
        }
        id
        body
      }
    }
  }
`;
export default About;
