import React from 'react'
import PropTypes from 'prop-types'
import { Layout, Card } from './common'

const Feed = ({ posts, inputText, onChangeText, onSubmit }) => (
  <Layout>
    <form id="post-form" onSubmit={onSubmit}>
      <input
        id="input-text"
        type="text"
        name="text"
        value={inputText}
        maxLength={10}
        onChange={onChangeText}
      />
      <input
        id="submit-button"
        type="submit"
        value="send"
      />
    </form>
    { posts.map(({ id, title, body }) => (
      <Card
        key={id}
        title={title}
        body={body}
      />
    ))}
  </Layout>
)

Feed.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    })
  ),
  inputText: PropTypes.string,
  onChangeText: PropTypes.func,
  onSubmit: PropTypes.func,
}

Feed.defaultProps = {
  posts: [],
  inputText: '',
  onChangeText: () => {},
  onSubmit: () => {},
}

export default Feed
