import '@fontsource/roboto/300.css';
import { useState } from 'react'
import './App.css'
import {Box, TextField, Container, Button, Typography} from '@mui/material';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Loginform from './comps/Loginform';
import General from './comps/General';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={<Loginform/>} />
          <Route path="/general" element={<General/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
