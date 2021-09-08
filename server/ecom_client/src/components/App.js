import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'


import './App.css'
import "bootstrap/dist/js/bootstrap.min.js";



import Header from './header/Header.js';
import Main from './main/Main.js';
import Register from './user/Register'
import ListingDetail from './listingDetail/ListingDetail';
import AddListingForm from './addListing/AddListingForm';

import { Provider } from 'react-redux';
import store from '../store';


class App extends Component {
    render() {
        return (            
            <Provider store={store}>
                <Router>
                    <Header/>
                    <br></br>
                    <Switch>
                        <Route exact path='/shop/' component={Main} />
                        <Route exact path='/register/' component={Register} />
                        <Route exact path='/shop/listing/:id/' component={ListingDetail} />
                        <Route exact path='/sell/new/' component={AddListingForm} />
                    </Switch>
                </Router>
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