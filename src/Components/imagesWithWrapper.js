import React, { useEffect, useRef } from 'react';
import { Card, CardMedia } from '@mui/material';
import 'animate.css/animate.min.css';
import genDiagonal from '../utils';
import AnimateOnScrollWrapper from './Wrappers/AnimateOnScrollWrapper';

const AnimateOnScroll = ({ imageList }) => {
  const positionedImages = genDiagonal(imageList);

  return (
    <div className='imageGrid'>
      {positionedImages.map((image) => (
        <div className='cardContainer' key={image.id} style={{ top: `${image.top}vw`, left: `${image.left}vw`, position: 'relative' }}>
          <AnimateOnScrollWrapper className='imageCard' animation="fadeIn" delay={3}>
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
              {image.text && <h1 className='imageCard-text'>{image.text}</h1>}
            </Card>
          </AnimateOnScrollWrapper>
        </div>
      ))}
    </div>
  );
};

export default AnimateOnScroll;
