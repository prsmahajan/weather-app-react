import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Weather from './Weather';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Weather defaultCity='Amritsar'/>
    <div className='footer'>This application was made by
    <a href='https://github.com/prsmahajan/' target='_blank' rel='noopener noreferrer'> Paras </a> 
    with ❤️<br/>You can check this repo at <a href='https://github.com/prsmahajan/weather-app-react' className='github'>Github</a></div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
