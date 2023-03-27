import { Component } from 'react';
import css from './ImageGalleryItem.module.css';


class ImageGalleryItem extends Component {
  render() {
    return this.props.photos.map(photo => (
      <li key={photo.id} className={css.ImageGalleryItem}>
        <img
          src={photo.webformatURL}
          alt={photo.tags}
          onClick={() => {
            this.props.onClick(photo.largeImageURL);
          }}
          className={css.ImageGalleryItemImage}
        />
      </li>
    ));
  }
}

export default ImageGalleryItem;
