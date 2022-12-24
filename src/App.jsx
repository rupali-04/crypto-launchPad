import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
        <Route path="/" element={<HomePage/>}/>
        </Routes>
      </Router>
  </ChakraProvider>
  );
}

export default App;
