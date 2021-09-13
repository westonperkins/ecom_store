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
import Login from './user/Login';
import ListingDetail from './listingDetail/ListingDetail';
import AddListingForm from './addListing/AddListingForm';
import Alerts from './Alerts.js/Alerts';
import Private from './routes/Private';
import Profile from './profile/Profile';
import CheckoutForm from './checkout/CheckoutForm';

import { Provider } from 'react-redux';
import store from '../store';
import { loadUser } from '../actions/auth';

import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'
const stripePromise = loadStripe(process.env.STRIPE_PUBLISHABLE_KEY)

const alertOptions = {
    timeout: 3000,
    position: 'top center'
}

class App extends Component {
    componentDidMount() {
        store.dispatch(loadUser())
        console.log(process.env)
    }

    render() {
        return (            
            <Provider store={store}>
                <AlertProvider template={AlertTemplate}{...alertOptions}>
                <Router>
                    <Header/>
                    <Alerts />
                    <br></br>
                    <Elements stripe={stripePromise}>
                    <Switch>
                        <Private exact path='/shop/' component={Main} />
                        <Route exact path='/register/' component={Register} />
                        <Route exact path='/login/' component={Login} />
                        <Private exact path='/shop/listing/:id/' component={ListingDetail} />
                        <Private exact path='/sell/new/' component={AddListingForm} />
                        <Private exact path='/profile' component={Profile}/>
                        <Private exact path='/checkout' component={CheckoutForm}/>
                    </Switch>
                    </Elements>
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