import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 class="title">Kendall Morgan</h1>
    <h2 class="sub-title">Software Engineeer</h2>

    <ul class="navigation">
      <li>
        <a href="http://github.com/kendallm">
          Code
        </a>
      </li>
      <li>
        <a href="http://www.linkedin.com/in/kendalljm">
          Resume
        </a>
      </li>
      <li >
        <Link to="/projects/">Projects</Link>
      </li>
    </ul>
  </Layout>
)

export default IndexPage
