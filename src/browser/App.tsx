import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
// import logo from './logo.svg';
import { Home } from './views/Home';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Home />
      {/* <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header> */}
    </div>
  );
}

export function renderApp() {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root'),
  );

  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();
}
