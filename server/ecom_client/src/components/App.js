import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'


import './App.css'
import "bootstrap/dist/js/bootstrap.min.js";

import {Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

import Header from './header/Header.js';
import Main from './main/Main.js';
import Register from './user/Register'
import ListingDetail from './listingDetail/ListingDetail';
import AddListingForm from './addListing/AddListingForm';
import Alerts from './Alerts.js/Alerts';

import { Provider } from 'react-redux';
import store from '../store';


const alertOptions = {
    timeout: 3000,
    position: 'top center'
}

class App extends Component {
    render() {
        return (            
            <Provider store={store}>
                <AlertProvider template={AlertTemplate}{...alertOptions}>
                <Router>
                    <Header/>
                    <Alerts />
                    <br></br>
                    <Switch>
                        <Route exact path='/shop/' component={Main} />
                        <Route exact path='/register/' component={Register} />
                        <Route exact path='/shop/listing/:id/' component={ListingDetail} />
                        <Route exact path='/sell/new/' component={AddListingForm} />
                    </Switch>
                </Router>
                </AlertProvider>
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