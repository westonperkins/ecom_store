import React from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import './Main.css'

import Filter from './filter/Filter'
import Listings from './listings/Listings'
// import ListingDetail from '../listingDetail/ListingDetail'

const Main = () => {
    return (
        <div>

                <Filter />
            <div className='layout'>
                <Listings />
            </div>
        </div>
    )
}

export default Main
