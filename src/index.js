import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

let dialogsData = [
    { id: 1, name: "Masha" },
    { id: 2, name: "Maxim" },
    { id: 3, name: "Alexey" },
    { id: 4, name: "Sasha" },
    { id: 5, name: "Vlad" },
    { id: 6, name: "Valera" }
]