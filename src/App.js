import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './Pages/Home';
import ReleaseList from './Pages/ReleaseList';
import NewsList from './Pages/NewsList';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';


function App() {
  return (
    <>
    <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/NOTICIAS" element={<NewsList/>}/>
          <Route path="/COMUNICADOS" element={<ReleaseList/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>
    
    
    </>

  );
}

export default App;
