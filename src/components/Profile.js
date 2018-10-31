import React, { useState } from 'react'
import Layout from './common/Layout'

const Profile = React.memo(() => {
  const [counter, setCounter] = useState(0)

  const decrease = () => {
    setCounter(counter - 1)
  }

  const increase = () => {
    setCounter(counter + 1)
  }

  return (
    <Layout>
      <button type="button" onClick={decrease}>-</button>
      <p>{counter}</p>
      <button type="button" onClick={increase}>+</button>
    </Layout>
  )
})

export default Profile
