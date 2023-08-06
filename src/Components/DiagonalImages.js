import React, { useEffect, useRef } from 'react';
import { Card, CardMedia } from '@mui/material';
import 'animate.css/animate.min.css';
import genDiagonal from '../utils';

const AnimateOnScroll = ({ imageList }) => {
  const scrollTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      scrollTimeoutRef.current = setTimeout(() => {
        const elements = document.querySelectorAll('.animate-image');
        elements.forEach((element) => {
          const rect = element.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
          if (isVisible) {
            element.classList.add('animate__animated', `animate__${element.dataset.animation}`);
            element.classList.remove('not-visible');
          } else {
            element.classList.remove('animate__animated', `animate__${element.dataset.animation}`);
            element.classList.add('not-visible');
          }
        });
      }, 100); // Set the delay to 200 milliseconds (adjust as needed)
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const positionedImages = genDiagonal(imageList);

  return (
    <div className='imageGrid'>
      {positionedImages.map((image) => (
        <div className='cardContainer' key={image.id} style={{ top: `${image.top}vw`, left: `${image.left}vw`, position: 'relative' }}>
          <Card className='imageCard' style={{ backgroundColor: 'transparent' }}>
            <CardMedia
              component="img"
              src={image.link}
              alt={`Image ${image.id}`}
              className={`animate-image ${image.aspect}`}
              style={{
                animationDuration: '3s',
                animationDelay:'0.2s'

              }}
              id={image.id}
              data-animation={image.animation}
            />
            {image.text && <h1 className='imageCard-text'>{image.text}</h1>}
          </Card>
        </div>
      ))}
    </div>
  );
};

export default AnimateOnScroll;
