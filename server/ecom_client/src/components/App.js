import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"

import Listings from './listings/Listings.js';
import Header from './render/Header.js';

import { Provider } from 'react-redux';
import store from '../store';

class App extends Component {
    render() {
        return (            
            <Provider store={store}>
                <Header/>
                <Listings/>
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