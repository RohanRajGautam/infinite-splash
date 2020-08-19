import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import './styles.css';

const key = '2bSEzlBpFNe-kyUzTXyU8-J9-rcxqP7F4P0PEQW3URU';

const ImageGrid = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch(`https://api.unsplash.com/photos/?client_id=${key}&per_page=28`)
      .then((res) => res.json())
      .then((images) => setImages(images));
  });

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
    </div>
  );
};

const mapStateToProps = ({ isLoading, images, error }) => ({
  isLoading,
  images,
  error,
});

export default connect(mapStateToProps)(ImageGrid);
