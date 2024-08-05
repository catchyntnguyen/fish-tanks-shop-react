import React from 'react';
import 'jquery-migrate';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel';
import '../assets/js/main';
import '../assets/css/login.css';
import '../assets/css/signup.css';

import { BrowserRouter } from 'react-router-dom';
import AppRoutes from '../routes/router';

function App() {

  return (
      <AppRoutes />
  );
}

export default App;
