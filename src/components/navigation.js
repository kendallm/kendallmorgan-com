import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Navigation = ({ siteTitle }) => (
  <header class="bg-black-90 fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
    <nav class="f6 fw6 ttu tracked">
      <Link to="/" class="link dim white dib mr3" href="#" title="Home">
        Home
      </Link>
      <a class="link dim white dib mr3" href="#" title="About">
        About
      </a>
      <a class="link dim white dib mr3" href="#" title="Store">
        Store
      </a>
      <a class="link dim white dib" href="#" title="Contact">
        Contact
      </a>
    </nav>
  </header>
)

export default Navigation
