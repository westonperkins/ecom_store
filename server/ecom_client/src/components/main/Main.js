import React from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import './Main.css'

import Filter from './filter/Filter'
import Listings from './listings/Listings'
import SearchBar from '../searchBar/SearchBar'
// import ListingDetail from '../listingDetail/ListingDetail'

const Main = () => {
    return (
        <div>

                {/* <Filter />÷≈ */}
            <div className='layout'>
                <Listings />
                {/* <SearchBar/> */}
            </div>
        </div>
    )
}

export default Main
