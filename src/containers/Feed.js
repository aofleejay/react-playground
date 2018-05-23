import React, { Component } from 'react'
import axios from 'axios'
import Feed from '../components/Feed'
// import { createPost, postsDatabase } from '../libs/firebase'

const POLLING_INTERVAL = 5000

class FeedContainer extends Component {
  state = { posts: [], inputText: '' }

  componentDidMount() {
    this.fetchPosts()
    this.intervalId = setInterval(this.fetchPosts, POLLING_INTERVAL)
  }

  componentWillUnmount() {
    if (this.intervalId) {
      clearInterval(this.intervalId)
    }
  }

  // subscribePosts = () => {
  //   postsDatabase.on('value', (snapshot) => {
  //     snapshot.forEach((childSnapshot) => {
  //       const childKey = childSnapshot.key;
  //       const childData = childSnapshot.val();
  //       const newPost = { id: childKey, ...childData }
  //       this.setState({ posts: [newPost, ...this.state.posts] });
  //     });
  //   });
  // }

  fetchPosts = () => {
    return axios.get('http://localhost:5000/posts?_sort=id&_order=desc')
      .then(response => { this.setState({ posts: response.data }) })
      .catch(error => { this.setState({ error }) })
  }

  createPost = ({ body, title = 'Anonymous' }) => {
    return axios.post('http://localhost:5000/posts', { body, title })
      .then(response => { this.setState({ posts: [response.data, ...this.state.posts], inputText: '' }) })
      .catch(error => { this.setState({ error, inputText: '' }) })
  }

  onChangeText = (event) => {
    this.setState({ inputText: event.target.value })
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.createPost({ body: event.target.text.value })
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
