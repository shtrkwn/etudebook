import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CssBaseline, AppBar, Toolbar, Typography, Container } from '@mui/material';
import Home from './pages/Home';
import Play from './pages/Play';

const App: React.FC = () => (
  <BrowserRouter>
    <CssBaseline />
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div">
          Etudebook
        </Typography>
      </Toolbar>
    </AppBar>
    <Container sx={{ mt: 2 }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/play/:songId" element={<Play />} />
      </Routes>
    </Container>
  </BrowserRouter>
);

export default App;
