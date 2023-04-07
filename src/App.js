import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import About from './Components/Pages/About/About';
import Videos from './Components/Pages/Videos/Videos';
import VideoSlider from './Components/Pages/VideosSlider/VideoSlider';
import FeedBack from './Components/Pages/FeedBack/FeedBack';
import Footer from './Components/Footer/Footer';
import Contact from './Components/Pages/Contact/Contact';
import SingleVideo from './Components/Pages/Singlevideo/SingleVideo';
import Detailspage from './Components/Pages/Detailspage/Detailspage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/single' element={<SingleVideo />} />
          <Route path='/details' element={<Detailspage />} />
        </Routes>
        {/* <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/videos' element={<Videos />} />
          <Route path='/categories' element={<VideoSlider />} />
          <Route path='/feedBack' element={<FeedBack />} />
        </Routes> */}
        {/* <About /> */}
        {/* <Videos /> */}
        {/* <VideoSlider /> */}
        {/* <FeedBack /> */}
        {/* <Contact /> */}
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;
