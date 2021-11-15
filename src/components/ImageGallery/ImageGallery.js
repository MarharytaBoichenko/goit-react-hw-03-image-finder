import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';
import s from './ImageGallery.module.css';

export default function ItemGallery({ images, onImgClick }) {
  return (
    <ul className={s.gallery}>
      {images.map(({ id, webformatURL, largeImageURL, tags }) => {
        return (
          <li className={s.gallery__item} key={id}>
            <ImageGalleryItem
              webformatURL={webformatURL}
              onModal={onImgClick}
              tags={tags}
              largeImageURL={largeImageURL}
            />
          </li>
        );
      })}
    </ul>
  );
}

ItemGallery.propTypes = {
  images: PropTypes.array.isRequired,
  onImgClick: PropTypes.func.isRequired,
};
