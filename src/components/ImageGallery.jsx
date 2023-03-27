import { Component } from 'react';
import css from './ImageGallery.module.css';

class ImageGallery extends Component {
  render() {
    return <ul className={css.ImageGallery}>{this.props.children}</ul>;
  }
}

export default ImageGallery;
