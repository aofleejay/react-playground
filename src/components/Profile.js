import React, { Component } from 'react'
import { Upload, Button, Icon } from 'antd'

class Profile extends Component {
  uploadFile = (info) => {
    console.log(info.file.size)
  }

  render() {
    return (
      <Upload onChange={this.uploadFile}>
        <Button>
          <Icon type="upload" />
          Click to Upload
        </Button>
      </Upload>
    )
  }
}

export default Profile
