import { Component } from 'react';
import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  render() {
    const { webformatURL, tags } = this.props.image;
    return (
      <GalleryItem>
        <GalleryItemImage src={webformatURL} alt={tags} />
      </GalleryItem>
    );
  }
}
