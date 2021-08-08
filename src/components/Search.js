import React, { Component } from 'react'
import "./Search.css"


export default class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: 'Stock Info',
            displayName: 'Stock Info'
        }
    }
    handleSearch(parameter) {
        fetch(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${parameter}&apikey=KBFYBLWQ3Y65L92Y`)
            .then(response => response.json())
            .then(json => {
                try {
                    if (json.bestMatches[0]['2. name'] !== undefined) {
                        this.setState({ displayName: json.bestMatches[0]['2. name'] })
                        this.setState({ name: json.bestMatches[0]['1. symbol'] })
                        this.props.handler(json.bestMatches[0]['2. name'], json.bestMatches[0]['1. symbol']);
                    }
                }
                catch (err) {
                    this.setState({ displayName: "No results found", name: '' })
                }
            })
    }
    changeState(ticker, disnam) {
        this.setState({ name: ticker, displayName: disnam })
    }
    render() {
        return (
            <div className="Search">
                <h2>{this.state.displayName}</h2>
                <input onChange={(e) => { this.setState({ name: e.target.value }) }} type="text" placeholder="Search for stocks here..." />
                <button onClick={() => { this.handleSearch(this.state.name) }}>Search</button>
            </div>
        )
    }
}
