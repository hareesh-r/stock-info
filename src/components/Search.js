import React, { Component } from 'react'
import "./Search.css"

export default class Search extends Component {
    render() {
        return (
            <div className="Search">
                <h2>Stock Name</h2>
                <input type="text" placeholder="Search for stocks here..." />
                <button>Search</button>
            </div>
        )
    }
}
