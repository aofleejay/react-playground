import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const Layout = (props) => (
  <Fragment>
    <header>Header</header>
    <div>{props.children}</div>
    <footer>Footer</footer>
  </Fragment>
)

Layout.propTypes = {
  children: PropTypes.node,
}

Layout.defaultProps = {
  children: null,
}

export default Layout
