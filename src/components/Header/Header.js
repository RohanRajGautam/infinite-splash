import React from 'react';
import './styles.css';

const Header = () => {
  return (
    <>
      <div className='header'>Infinite Splash!</div>
      <div className='subtitle'>
        Made with{' '}
        <span role='img' aria-label='love'>
          💖
        </span>{' '}
        by{' '}
        <a
          href='https://rohangautam.com.np/'
          target='_blank'
          rel='noopener noreferrer'
        >
          Rohan Gautam
        </a>{' '}
      </div>
    </>
  );
};

export default Header;
