import React, { Component } from 'react'

import './Header.css'

export class Header extends Component {
    render () {
        return (
            <div className="header">

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Ecom</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
            
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Shop</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Sell</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Favorites</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Profile</a>
                    </li>
                </ul>
                </div>
                <div className="input-group rounded">
                    <input type="search" className="form-control rounded searchbar" placeholder="Search" aria-label="Search"
                        aria-describedby="search-addon" />
                    <span className="input-group-text border-0" id="search-addon">
                    <i className="fas fa-search">search</i>
                    </span>
                </div>
            </nav>
            </div>
        )
    }
}

export default Header
