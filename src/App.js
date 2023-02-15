import logo from './logo.svg';
import './App.css';
import Slider from './components/Slider.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import BasicButtons from './components/BasicButtons';
import Release from './components/Release';

function App() {
  return (
    <>
    <Slider/>
    <BasicButtons/>
    <Release/>
    </>

  );
}

export default App;
