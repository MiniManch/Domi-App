import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import '../Style/Header.css'; 

const useStyles = makeStyles((theme) => ({
  header: {
    position: 'absolute',
    top: '5vw',
    right: '2vw',
    zIndex: 1000,
    padding: theme.spacing(2),
    borderRadius: theme.spacing(1),
    boxShadow: theme.shadows[3],
    color: theme.palette.primary.contrastText,
    fontFamily: 'Azeret Mono !important', 

  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classNames('header', classes.header)}>
    <h1>Dominique Lopez Rokah</h1>
    <p className="description">
      <span className="indent-0">An abstract painter who enjoys experimenting with acrylics on canvas.</span>
      <br />
      <span className="indent-1">I have a passion for art and I express myself through colors and shapes.</span>
      <br />
      <span className="indent-2">My artworks are influenced by nature, emotions, and different cultures.</span>
      <br />
      <span className="indent-3">I invite you to explore my gallery and the stories behind my paintings.</span>
    </p>
  </div>
  );
};

export default Header;
