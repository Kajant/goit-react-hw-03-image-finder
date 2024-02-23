import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem'

const ImageGallery = ({ galleryArray }) => {
    return (
        <>
            <ul className={css.ImageGallery}>
                {galleryArray.map(({ webformatURL, tags, id, largeImageURL }) =>
                    <ImageGalleryItem url={webformatURL} alt={tags} key={id} largeImageURL={largeImageURL} />)}
            </ul>
        </>
    )
}

ImageGallery.propTypes = {
    galleryArray: PropTypes.array.isRequired,
};

export default ImageGallery;