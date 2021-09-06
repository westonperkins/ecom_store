import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"

import './App.css'
import "bootstrap/dist/js/bootstrap.min.js";



import Header from './header/Header.js';
import Main from './main/Main.js';

import { Provider } from 'react-redux';
import store from '../store';

class App extends Component {
    render() {
        return (            
            <Provider store={store}>
                <Header/>
                <br></br>
                <Main/>
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