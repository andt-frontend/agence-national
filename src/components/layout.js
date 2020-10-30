import React from "react"
import PropTypes from "prop-types"
// import Header from "./header"
// import Footer from "./footer"
// import TopHeader from './entete'

import { GlobalStyle } from './global-styles'



const Layout = ({ children, current_path }) => {
  return (
    <React.Fragment>
      <GlobalStyle />
      {/* {current_path === "/" && <TopHeader />}
      <Header current_path={current_path} /> */}
      <main>
        {children}
      </main>
      {/* <Footer /> */}
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
