import React, { PureComponent } from 'react'
import photos from '../fixtures/image-index'

class Image extends PureComponent {
  render() {
    return (
      <img src={photos[this.props.photoId]} alt="hangman" />
    )
  }
}

export default Image
