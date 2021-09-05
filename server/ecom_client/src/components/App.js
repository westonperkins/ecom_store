import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"

import './App.css'

import "bootstrap/dist/js/bootstrap.min.js";


import Listings from './listings/Listings.js';
import Header from './header/Header.js';
import Filter from './filter/Filter.js';

import { Provider } from 'react-redux';
import store from '../store';

class App extends Component {
    render() {
        return (            
            <Provider store={store}>
                <Header/>
                <div className="main">
                <Filter/>
                <Listings/>
                </div>
            </Provider>
        )
    }
}

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('app')
);

export default App;