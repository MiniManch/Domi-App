import '../Style/App.css';
import { Button, Typography, makeStyles } from '@mui/material';
import Navbar from './Navbar';
import Images from './Images';
import 'animate.css/animate.min.css';


const imageList = [
  {
    id: 'Hand',
    link: 'https://i.ibb.co/d5f3Xxh/Untitled-design.png',
    animation: 'fadeIn', 
    aspect:'square'
  },
  {
    id: 'Painting',
    link: 'https://i.ibb.co/rwzDWDm/woman-painting.jpg',
    animation: 'zoomIn', 
    aspect:'square'

  },
  {
    id: 'Brushes',
    link: 'https://i.ibb.co/p26D0Wt/c81b5db5-9c7c-448a-842e-c8387a5626a3.jpg',
    animation: 'zoomIn', 
    aspect:'square'

  }
];

function App() {
  return (
    <div className="App">
    <Navbar />
    <Images imageList = {imageList} />
    </div>
  );
}

export default App;

<a href="https://ibb.co/dBs9Wbd"><img src="" alt="c81b5db5-9c7c-448a-842e-c8387a5626a3" border="0" /></a>