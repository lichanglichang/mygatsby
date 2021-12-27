import * as React from "react";
import Layout from "../component/layout";
import * as aboutStyle from "../styles/about.css";
const About = () => {
  console.log(aboutStyle);
  return (
    <Layout>
      <main>
        <title>我的校园</title>
        <p className="blogTitle">我的校园</p>
      </main>
    </Layout>
  );
};

export default About;
