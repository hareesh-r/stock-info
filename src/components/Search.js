import React, { Component } from 'react'
import "./Search.css"

export default class Search extends Component {
    constructor() {
        super();
        this.state = {
            name: "AMZN",
            displayName: "Amazon"
        }
    }
    handleSearch() {
        this.setState({ displayName: this.state.name })
        console.log(this.state.name);
    }
    render() {
        return (
            <div className="Search">
                <h2>{this.state.displayName}</h2>
                <input onChange={(e) => { this.setState({ name: e.target.value }) }} type="text" placeholder="Search for stocks here..." />
                <button onClick={() => this.handleSearch()}>Search</button>
            </div>
        )
    }
}
