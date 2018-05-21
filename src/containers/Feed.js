import React, { Component } from 'react'
import axios from 'axios'
import Feed from '../components/Feed'

class FeedContainer extends Component {
  state = { posts: [], inputText: '' }

  componentDidMount() {
    this.fetchPosts()
  }

  fetchPosts = () => {
    return axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(posts => { this.setState({ posts: posts.data }) })
      .catch(error => { this.setState({ error }) })
  }

  onChangeText = (event) => {
    this.setState({ inputText: event.target.value })
  }

  onSubmit = (event) => {
    event.preventDefault()
    alert(event.target.text.value)
  }

  render() {
    return (
      <Feed
        posts={this.state.posts}
        inputText={this.state.inputText}
        onChangeText={this.onChangeText}
        onSubmit={this.onSubmit}
      />
    )
  }
}

export default FeedContainer
