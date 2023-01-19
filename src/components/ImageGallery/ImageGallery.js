import { Gallery } from './ImageGallery.styled';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images, onClick }) => {
  return (
    <>
      <Gallery>
        {images.map(image => (
          <ImageGalleryItem image={image} key={image.id} onClick={onClick} />
        ))}
      </Gallery>
    </>
  );
};
