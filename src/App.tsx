import firebase from 'firebase';
import { createContext, useState, useEffect } from 'react';

import { BrowserRouter, Route } from 'react-router-dom'

import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';
import { auth } from './services/firebase';

import { AuthContextProvider } from '../src/contexts/AuthContext';

import './styles/global.scss';


function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Route path="/" exact component={Home} />
        <Route path="/rooms/new" component={ NewRoom } />
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
