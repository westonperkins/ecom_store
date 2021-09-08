import React from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import './Main.css'

import Filter from './filter/Filter'
import Listings from './listings/Listings'
// import ListingDetail from '../listingDetail/ListingDetail'

const Main = () => {
    return (
        <div>
            <h2 className="title">Listings</h2>
            <hr></hr>

            <div className='layout'>
                <Filter />
                <Listings />
                {/* <Switch>
                        <Route exact path='/shop/listing/:id/' component={ListingDetail} />
                </Switch> */}
            </div>
        </div>
    )
}

export default Main
