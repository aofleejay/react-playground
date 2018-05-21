import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const Card = ({ title, body }) => (
  <Fragment>
    <p id="card-title">{title}</p>
    <p id="card-body">{body}</p>
  </Fragment>
)

Card.defaultProps = {
  title: 'Anonymous',
  body: '',
}

Card.propTypes = {
  title: PropTypes.string,
  body: (props, propName, componentName) => {
    if (props[propName].length > 300) {
      return new Error(
        'Invalid prop `' + propName + '` supplied to' +
        ' `' + componentName + '`. Validation failed.'
      );
    }
  },
}

export default Card
