import React, { Component } from 'react'
import "./Search.css"

export default class Search extends Component {
    render() {
        return (
            <div className="Search">
                <input type="text" placeholder="Search for stocks here..." />
                <button>Search</button>
            </div>
        )
    }
}
