import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Auth/Login';
import Signup from './Auth/Signup';
import Home from './Components/Home';
import Preview from './Components/Preview';
import Error from './Error/Error';

function Routing ()
{
  return (
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/Signup' element={ <Signup /> } />
      <Route path='/Login' element={ <Login /> } />
      <Route path='/Preview/:id' element={ <Preview /> } />
      <Route path='/*' element={ <Error /> } />
    </Routes>
  );
}

export default Routing;