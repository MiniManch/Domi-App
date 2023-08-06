import React, { useRef } from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import 'animate.css/animate.min.css';
import '../Style/About.css';
import imageList from '../Data/imagesLinks.json';
import AnimateOnScrollWrapper from './Wrappers/AnimateOnScrollWrapper';

const About = () => {
  const aboutRef = useRef(null);

  return (
    <div className="about-container">
      <AnimateOnScrollWrapper ref={aboutRef} className="about-card" animation="fadeInLeft" delay={1.5}>
        <div className="about-content-wrapper">
          <CardMedia
            component="img"
            src={imageList[6]['link']}
            alt="Artist"
            className="about-image"
          />
          <CardContent className="about-content">
            <Typography variant="h5" gutterBottom>
              About the Artist
            </Typography>
            <Typography variant="body1">
              Your text goes here. Describe the artist and their work in this section.
            </Typography>
          </CardContent>
        </div>
      </AnimateOnScrollWrapper>
    </div>
  );
};

export default About;
