import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from "redux";
import {Provider} from "react-redux";
import water from "./reducers/water";


var store = createStore(water);
var destination = document.querySelector("#root");

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>,
 destination
);
//registerServiceWorker();
