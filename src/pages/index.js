import React from 'react'
import { Link } from 'gatsby'

import { Layout, SEO } from '../components'

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/thanks">Go to thanks</Link>
  </>
)

export default IndexPage
