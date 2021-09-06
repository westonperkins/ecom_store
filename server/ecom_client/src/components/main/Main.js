import React from 'react'

import './Main.css'

import Filter from './filter/Filter'
import Listings from './listings/Listings'

const Main = () => {
    return (
        <div>
            <h2 className="title">Listings</h2>
            <hr></hr>

            <div className='layout'>
                <Filter />
                
                <Listings />
            </div>
        </div>
    )
}

export default Main
