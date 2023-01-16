import { Component } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { getImages } from 'services/api';
import { Gallery } from './ImageGallery.styled';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';

export class ImageGallery extends Component {
  state = {
    images: [],
    isLoading: false,
    error: null,
  };

  async componentDidMount() {
    try {
      this.setState({ isLoading: true });
      const images = await getImages();
      this.setState({ images });
    } catch {
      this.setState({ error: 'Перезавантажте сторінку!!!' });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  render() {
    const { images, error, isLoading } = this.state;
    return (
      <>
        <Gallery>
          {/* {images.map(image => (
            <ImageGalleryItem image={image} key={image.id} />
          ))} */}
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </Gallery>
        <ThreeDots
          wrapperStyle={{ justifyContent: 'center' }}
          isLoading={isLoading}
        />
      </>
    );
  }
}
