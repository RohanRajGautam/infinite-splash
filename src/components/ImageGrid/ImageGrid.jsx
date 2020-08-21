import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Button from '../Button';

import { loadImages } from '../../actions';

import './styles.css';
import Stats from '../Stats';

const ImageGrid = ({ loadImages, images, isLoading, error, imagesStats }) => {
  useEffect(() => {
    loadImages();
  }, [loadImages]);

  return (
    <div className='content'>
      <section className='grid'>
        {images.map((image, index) => (
          <div
            key={index}
            className={`item item-${Math.ceil(image.height / image.width)}`}
          >
            <Stats stats={imagesStats[image.id]} />
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

const mapStateToProps = ({ isLoading, images, error, imagesStats }) => ({
  isLoading,
  images,
  error,
  imagesStats,
});

const mapDispatchToProps = (dispatch) => ({
  loadImages: () => dispatch(loadImages()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ImageGrid);
