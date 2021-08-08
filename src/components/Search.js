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
        fetch(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${this.state.name}&apikey=CACFBGOGRJ9ZLNDH`)
            .then(response => response.json())
            .then(json => {
                try {
                    if (json.bestMatches[0]['2. name'] != undefined) {
                        this.setState({ displayName: json.bestMatches[0]['2. name'] })
                        this.setState({ name: json.bestMatches[0]['1. symbol'] })
                    }
                } 
                catch (err) {
                    console.log(err)
                    this.setState({ displayName: "No results found" })
                }
            })
    }
    render() {
        return (<div className="Search">
            <h2>{this.state.displayName}</h2>
            <input onChange={(e) => { this.setState({ name: e.target.value }) }} type="text" placeholder="Search for stocks here..." />
            <button onClick={() => { this.handleSearch() }}>Search</button>
        </div>
        )
    }
}
