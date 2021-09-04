import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import {API} from '../App'

export const Test = () => {
    const [shopData, setShopData] = useState([])

    useEffect(() => {
        axios.get(`${API}/shop/`)
        .then(res => setShopData(res.data))
        // .then(res => console.log(res.data))
    }, [])
    console.log(shopData)

    return (
        <div>
            {shopData.map((items) => {
                return (
                    <ul>
                        <li>{items.title}</li>
                        <li>{items.sizes}</li>
                        <li>{items.category}</li>
                    </ul>
                )
            })}
        </div>
    )
}

export default Test