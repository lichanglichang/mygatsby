import * as React from "react";
import Layout from "../component/layout";
import {StaticImage} from "gatsby-plugin-image";
import * as aboutStyle from "../styles/about.css";
const About = () => {
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
      </main>
    </Layout>
  );
};

export default About;
