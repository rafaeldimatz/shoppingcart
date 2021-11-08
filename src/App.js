import React from 'react';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Products from './components/Products';
import Login from './pages/Login';
function App() {
  return (
  
    
<Router>
<Routes>
    <Route exact path="/" element={<Login/>} />
    <Route exact path="/products" element={<Products/>}/>
  </Routes>
</Router>
  
  );
}

export default App;