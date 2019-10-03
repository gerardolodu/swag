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
      <Footer>
        © {new Date().getFullYear()}, Built with love
        <span rol="img" aria-label="heart-emoji">
          ❤️
        </span>
      </Footer>
    </div>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
