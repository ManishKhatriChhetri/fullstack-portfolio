import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import {CssBaseline, Box} from "@mui/material";
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home';

function App() {
  
  return (
    <>
      <CssBaseline />
      <Router>
        <Box 
          sx={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}
        >
          <Navbar />
          <Box>
            <Home />
          </Box>
          
          <Footer />
        </Box>
        
      </Router>
      
    </>
  )
}

export default App
