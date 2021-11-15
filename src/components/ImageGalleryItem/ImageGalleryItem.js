import s from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';
export default function ImageGalleryItem({
  webformatURL,
  onModal,
  largeImageURL,
  tags,
}) {
  return (
    <img
      className={s.galleryItemImage}
      onClick={() => onModal(largeImageURL)}
      src={webformatURL}
      alt={tags}
    />
  );
}
ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  onModal: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
