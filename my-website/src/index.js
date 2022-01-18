import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function Homepage(){
  return (
    <h1>Dane is coool</h1>
  );
}
const yell = <Homepage/>;
ReactDOM.render(
  yell,
  document.getElementById('root')
);
reportWebVitals();
