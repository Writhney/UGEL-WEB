import './App.css';
import Slider from './components/Slider';
import 'bootstrap/dist/css/bootstrap.min.css';
import BasicButtons from './components/BasicButtons';
import Release from './components/Release';
import News from './components/News';
import Video from './components/Video';
import VirtualPlatforms from './components/VirtualPlatforms';
import Footer from './components/Footer';
import Header from './components/Header';


function App() {
  return (
    <>
    <Slider/>
    <BasicButtons/>
    <Header/>
    <Release/>
    <News/>
    <Video/>
    <VirtualPlatforms/>
    <Footer/>
    
    </>

  );
}

export default App;
