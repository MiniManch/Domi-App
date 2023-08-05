import React, { useEffect, useRef } from 'react';
import { Grid, Card, CardMedia } from '@mui/material';
import 'animate.css/animate.min.css';

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
      }, 200); // Set the delay to 200 milliseconds (adjust as needed)
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Grid className='imageGrid' container spacing={3}>
      {imageList.map((image) => (
        <Grid  item xs={12} sm={6} md={4} key={image.id}>
          <Card style={{ backgroundColor: 'transparent' }}>
            <CardMedia
              component="img"
              src={image.link}
              alt={`Image ${image.id}`}
              className={`animate-image ${image.aspect}`}
              style={{
                animationDuration: '3s',
              }}
              id={image.id}
              data-animation={image.animation}
            />
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default AnimateOnScroll;
