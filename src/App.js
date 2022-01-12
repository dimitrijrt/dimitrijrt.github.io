
import React from 'react';
import Home from './pages/Home';
import Contact from './pages/Conatct';
import Compétences from './pages/Compétences';
import NotFound from './pages/NotFound';
import {BrowserRouter,Route,Routes} from 'react-router-dom';

const App = () => {
  return (
    
      <>
      <BrowserRouter>
      

      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/contact" exact element={<Contact/>} />
        <Route path="/competences" exact element={<Compétences/>} />
        <Route path="*"   element={<NotFound/>} />     
      </Routes> 
      </BrowserRouter>
      
      </>

    
    
  );
};

export default App;
