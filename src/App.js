import React, { Component } from 'react'

export class App extends Component {
  constructor(){
      super();
      this.state={
          searchWord: 'AAPL'
      }
  }

  getStocks(stockName){
    fetch(stockName)
      .then(response => response.json())
      .then(data => {
        this.setState({stocks: data});
      console.log(data);
    })
  }

  render() {

    const DAILY = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${this.state.searchWord}&apikey=CACFBGOGRJ9ZLNDH`

    const WEEKLY = `https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=${this.state.searchWord}apikey=CACFBGOGRJ9ZLNDH`

    const MONTHLY = `https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${this.state.searchWord}apikey=CACFBGOGRJ9ZLNDH`

    const GLOBAL_QUOTE = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${this.state.searchWord}&apikey=CACFBGOGRJ9ZLNDH`

    const AUTO_COMPLETE = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${this.state.searchWord}&apikey=CACFBGOGRJ9ZLNDH`

    return (
      <div>
        <h1>Hello, world!</h1>
        <input onChange={(e)=>this.setState({searchWord:e.target.value})} type="text"/>
        <button onClick={()=>this.getStocks(DAILY)}>Get Stocks</button>
        </div>
    )
  }
}

export default App
