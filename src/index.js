import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './css/index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <App title = "HappyDrink"/>,
     document.getElementById('root')
);
registerServiceWorker();

