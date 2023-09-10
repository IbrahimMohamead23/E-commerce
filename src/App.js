import './App.css';
import React from 'react';
import NavComponent from './Component/Navbar/NavComponent';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Component/HomePage/HomePage';
import ProdactDetalse from './Component/DetalseProdact/ProdactDetalse';
import Login from './Component/Login/Login';
import Rejestar from './Component/Login/Rejestar';
import Cart from './Component/Cart/Cart';
import AllProduct from './Component/ProdactsList/AllProduct';
import Footer from './Component/Footer/Footer';

// import About from './Component/HomePage/About';
const LazeLoding = React.lazy(() => import('./Component/HomePage/About'));


const App = () => {

  return (
    <div className="App">
       <NavComponent/>

       <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/product' element={<AllProduct/>}/>
          <Route path='/prodact/:prodactId' element={<ProdactDetalse/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/rejestar' element={<Rejestar/>}/>
          <Route path='/about' element={
          <React.Suspense fallback={<h1 className='text-center'>Loding...</h1>}>
             <LazeLoding/>
          </React.Suspense>
          }/>
        
       </Routes>

       <Footer/>
       <Cart/>

    </div>
  );
}

export default App;
