import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {CssBaseline, Box} from "@mui/material";
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home';
import About from './pages/About';

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
            </Routes>
            
          </Box>
          
          <Footer />
        </Box>
        
      </Router>
      
    </>
  )
}

export default App
