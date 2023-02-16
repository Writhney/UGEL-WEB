import './App.css';
import Slider from './components/Slider';
import 'bootstrap/dist/css/bootstrap.min.css';
import BasicButtons from './components/BasicButtons';
import Release from './components/Release';
import News from './components/News';
import Video from './components/Video';



function App() {
  return (
    <>
    <Slider/>
    <BasicButtons/>
    <Release/>
    <News/>
    <Video/>
    </>

  );
}

export default App;
