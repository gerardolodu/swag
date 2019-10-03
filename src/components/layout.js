import React from 'react'
import PropTypes from 'prop-types'
import { Content, Footer } from '../styles/components'

import Header from './header'
import './layout.css'

const Layout = ({ children }) => (
  <>
    <Header />
    <div>
      <Content>{children}</Content>
      <Footer>Made with ❤️</Footer>
    </div>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
