import './App.css';
import Header from './Header.js';
import Title from './Title.js';
import Special from './Special.js';
import Footer from './Footer.js';
import Card from './Card.js';
import Homepage from './Homepage.js';
import BookingPage from './BookingPage.js';
import {Routes, Route} from 'react-router-dom';
import SignInPage from './SignInPage.js';
import {useReducer} from 'react';



function App() {

  return (
    <div className="APP">
      <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/reservations" element={<BookingPage />} />
          <Route path="/signIn" element={<SignInPage />} />
      </Routes>
    </div>
  );
}

export default App;
