import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {CssBaseline, Box} from "@mui/material";
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home';
import About from './pages/About';
import Education from './pages/Education';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  
  return (
    <>
      <CssBaseline />
      <Router>
        <Box 
          sx={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}
        >
          <Navbar />
          <Box component='main' sx={{ flexGrow: 1 }}>
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/about' element={<About />}/>
              <Route path='/education' element={<Education />}/>
              <Route path='/skills' element={<Skills />}/>
              <Route path='/projects' element={<Projects />}/>
              <Route path='/contact' element={<Contact />}/>
            </Routes>
            
          </Box>
          
          <Footer />
        </Box>
        
      </Router>
      
    </>
  )
}

export default App
// test
