import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './Pages/Home';
import ReleaseList from './Pages/ReleaseList';
import NewsList from './Pages/NewsList';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Institution from './Pages/Institution';
import Direction from './Pages/Direction';
import AreasManagement from './Pages/AreasManagement';
import AboutUs from './Pages/AboutUs';
import AdministrativeManagement from './SubPages/AdministrativeManagement';
import InstitutionalManagement from './SubPages/InstitutionalManagement';
import LegalAdvice from './SubPages/LegalAdvice';
import InstitutionalControl from './SubPages/InstitutionalControl';
import AdministrativeProcesses from './SubPages/AdministrativeProcesses';
import JobCallList from './Pages/JobCallList';
import EducationalManagement from './SubPages/EducationalManagement';
import Kinder from './DeepPages/Kinder';
import School from './DeepPages/School';



function App() {
  return (
    <>
    <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/NOTICIAS" element={<NewsList/>}/>
          <Route path="/COMUNICADOS" element={<ReleaseList/>}/>
          <Route path="/INSTITUCION" element={<Institution/>}/>
          <Route path="/DIRECCION" element={<Direction/>}/>
          <Route path="/AREASGESTION" element={<AreasManagement/>}/>
          <Route path="/CONTACTENOS" element={<AboutUs/>}/>
          <Route path="/CONVOCATORIAS" element={<JobCallList/>}/>
          <Route path="/AREASGESTION/GESTIONADMINISTRATIVA" element={<AdministrativeManagement/>}/>
          <Route path="/AREASGESTION/GESTIONINSTITUCIONAL" element={<InstitutionalManagement/>}/>
          <Route path="/AREASGESTION/ASESORIAJURIDICA" element={<LegalAdvice/>}/>
          <Route path="/AREASGESTION/CONTROLINSTITUCIONAL" element={<InstitutionalControl/>}/>
          <Route path="/AREASGESTION/PROCESOSADMINISTRATIVOS" element={<AdministrativeProcesses/>}/>
          <Route path="/AREASGESTION/GESTIONPEDAGOGICA" element={<EducationalManagement/>}/>
          <Route path="/AREASGESTION/GESTIONPEDAGOGICA/INICIAL" element={<Kinder/>}/>
          <Route path="/AREASGESTION/GESTIONPEDAGOGICA/PRIMARIA" element={<School/>}/>



        </Routes>
        <Footer/>
    </BrowserRouter>
    
    
    </>

  );
}

export default App;
