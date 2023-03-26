import { Component } from 'react';

class ImageGalleryItem extends Component {
  render() {
    return this.props.photos.map(photo => (
      <li key={photo.id} className="gallery-item">
        <img src={photo.webformatURL} alt="" />
      </li>
    ));
  }
}

export default ImageGalleryItem;
