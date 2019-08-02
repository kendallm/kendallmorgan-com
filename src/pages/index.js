import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import SocialLinks from "../components/social-links"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 class="title">Kendall Morgan</h1>
    <h2 class="sub-title">Software Engineeer</h2>
    <SocialLinks />
  </Layout>
)

export default IndexPage
