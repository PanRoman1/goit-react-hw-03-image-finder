import { Component } from 'react';
import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  render() {
    return (
      <GalleryItem>
        <GalleryItemImage src="" alt="" />
      </GalleryItem>
    );
  }
}
