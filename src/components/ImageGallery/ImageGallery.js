import { Component } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { getImages } from 'services/api';
import { Gallery } from './ImageGallery.styled';
import { toast } from 'react-toastify';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';

export class ImageGallery extends Component {
  state = {
    query: '',
    images: [],
    totalHits: 0,
    isLoading: false,
    page: 1,
    error: null,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { images, totalHits, query, page } = this.state;
    if (prevProps.query !== this.props.query) {
      this.setState(prev => ({
        ...prev,
        images: [],
        page: 1,
        query: this.props.query,
      }));
    }

    if (prevProps.query !== query || (prevState.page !== page && page !== 1)) {
      try {
        this.setState({ isLoading: true });
        const imageList = await getImages(this.props.query, page);
        if (imageList.totalHits === 0) {
          return (
            toast.error('Заптувана тематика відсутня в фонді фото!'),
            {
              theme: 'colored',
            }
          );
        }
        this.setState({
          images: [...this.state.images, ...imageList.hits],
          isLoading: false,
          totalHits: imageList.totalHits,
        });
      } catch {
        this.setState({ error: 'Перезавантажте сторінку!!!' });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  render() {
    const { images, error, isLoading } = this.state;
    return (
      <>
        <Gallery>
          {images.map(image => (
            <ImageGalleryItem image={image} key={image.id} />
          ))}
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
