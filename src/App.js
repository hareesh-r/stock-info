import React, { Component } from 'react'
import Graph from './components/Graph';
import PopCompanies from './components/PopCompanies';
import Search from "./components/Search"
import Sidebar from './components/Sidebar';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      searchWord: '',
      ticker: ''
    }
  }
  handler = (word,ticker) => {
    this.setState({searchWord: word,ticker:ticker})
  }


  componentDidUpdate(){
    this.refs.child.changeState(this.state.ticker,this.state.searchWord)
  }

  render() {

    // const DAILY = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${this.state.searchWord}&apikey=CACFBGOGRJ9ZLNDH`

    // const WEEKLY = `https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=${this.state.searchWord}apikey=CACFBGOGRJ9ZLNDH`

    // const MONTHLY = `https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${this.state.searchWord}apikey=CACFBGOGRJ9ZLNDH`

    // const GLOBAL_QUOTE = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${this.state.searchWord}&apikey=CACFBGOGRJ9ZLNDH`

    // const AUTO_COMPLETE = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${this.state.searchWord}&apikey=CACFBGOGRJ9ZLNDH`

    return (
      <div>
        <div className="main">
          <Search ref="child" searchWord={this.state.searchWord}/>
          <Graph />
          <PopCompanies handler={this.handler}/>
        </div>
        <Sidebar />
      </div>
    )
  }
}

export default App
