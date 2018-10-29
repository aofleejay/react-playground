import React, { PureComponent, lazy, Suspense } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Layout, Card } from './common'
import ThemeContext from '../contexts/Theme'
import * as COLORS from '../constants/colors'
const Trending = lazy(() => import('./Trending'))

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid ${COLORS.GREY_200};
`
Form.displayName = 'Form'

const TextInput = styled.input.attrs({
  type: 'text',
  required: true,
})`
  flex: 1;
  height: 30px;
  padding: 5px;
  color: ${COLORS.BLACK};
  border: 1px solid ${COLORS.GREY_200};
  border-radius: 5px;
  font-size: 14px;
  outline: none;
`
TextInput.displayName = 'TextInput'

const SubmitButton = styled.input.attrs({
  type: 'submit',
})`
  width: 100px;
  height: 30px;
  padding: 5px 15px;
  margin-left: 10px;
  border: none;
  border-radius: 100px;
  color: ${COLORS.WHITE};
  background-color: ${COLORS.GREY_300};
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  outline: none;
`
SubmitButton.displayName = 'SubmitButton'

class Feed extends PureComponent {
  static contextType = ThemeContext

  render() {
    const { posts, inputText, onChangeText, onSubmit } = this.props
    const theme = this.context

    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Layout>
          <Trending />
          <Form
            id="post-form"
            onSubmit={onSubmit}
          >
            <TextInput
              id="input-text"
              name="text"
              placeholder="What's happening?"
              value={inputText}
              maxLength={300}
              onChange={onChangeText}
            />
            <SubmitButton
              id="submit-button"
              value="Send"
            />
          </Form>
          { posts.map(({ id, title, body }) => (
            <Card
              key={id}
              title={title}
              body={body}
            />
          ))}
        </Layout>
      </Suspense>
    )
  }
}

Feed.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    body: PropTypes.string.isRequired,
  })),
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
