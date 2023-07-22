// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import reportWebVitals from './reportWebVitals';
// import { BrowserRouter } from 'react-router-dom';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//    {/* <BrowserRouter basename={process.env.PUBLIC_URL}> */}
//     <App />
//     {/* </BrowserRouter> */}
//   </React.StrictMode>
// );

// reportWebVitals();

// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
