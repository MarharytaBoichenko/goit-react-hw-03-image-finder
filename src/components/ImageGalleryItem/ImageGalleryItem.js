import s from './ImageGalleryItem.module.css';
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
