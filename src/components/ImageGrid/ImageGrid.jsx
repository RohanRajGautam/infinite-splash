import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Button from '../Button';

import { loadImages } from '../../actions';

import './styles.css';

const ImageGrid = ({ loadImages, images, isLoading, error }) => {
  useEffect(() => {
    loadImages();
  }, [loadImages]);

  return (
    <div className='content'>
      <section className='grid'>
        {images.map((image) => (
          <div
            key={image.id}
            className={`item item-${Math.ceil(image.height / image.width)}`}
          >
            <img src={image.urls.small} alt={image.user.username} />
          </div>
        ))}
      </section>
      {error && <div className='error'>{JSON.stringify(error)}</div>}
      <Button onClick={() => !isLoading && loadImages()} loading={isLoading}>
        Load More
      </Button>
    </div>
  );
};

const mapStateToProps = ({ isLoading, images, error }) => ({
  isLoading,
  images,
  error,
});

const mapDispatchToProps = (dispatch) => ({
  loadImages: () => dispatch(loadImages()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ImageGrid);
