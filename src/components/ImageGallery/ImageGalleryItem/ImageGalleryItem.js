import PropTypes from 'prop-types';
import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ img, onClick }) => {
  const { webformatURL, largeImageURL, tags } = img;
  const handleClick = () => onClick(largeImageURL);

  return (
    <GalleryItem>
      <GalleryItemImage
        onClick={handleClick}
        src={webformatURL}
        alt={tags}
        loading="lazy"
      />
    </GalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  img: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};
