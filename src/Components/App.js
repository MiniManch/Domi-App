import '../Style/App.css';
import Navbar from './Navbar';
import DiagonalImages from './DiagonalImages';
import DiagonalImagesInverted from './DiagonalImagesInverted';
import About from './About';
import Header from './Header';
import 'animate.css/animate.min.css';
import imageList from '../Data/imagesLinks.json'
import Images from './imagesWithWrapper';

const firstThreeImages = imageList.slice(0, 3);
const lastThreeImages = imageList.slice(3, 6);

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <DiagonalImages imageList = {lastThreeImages} /> */}
      <Images imageList={lastThreeImages} />
      <Header /> 
      {/* <DiagonalImagesInverted imageList={firstThreeImages} /> */}
      <About />
    </div>
  );
}

export default App;



