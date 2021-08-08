import React, { Component } from 'react'
import Graph from './components/Graph';
import PopCompanies from './components/PopCompanies';
import Search from "./components/Search"
import Sidebar from './components/Sidebar';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      searchWord: 'Stock Info',
      ticker: 'Stock Info',
      datapoints: [],
      datapoints2: [],
    }
  }
  handler = (word, ticker) => {
    this.setState({ searchWord: word, ticker: ticker })
  }
  setDatapoints = (datapoints) => {
    this.setState({ datapoints: datapoints })
  }
  setDatapoints2 = (datapoints2) => {
    this.setState({ datapoints2: datapoints2 })
  }
  componentDidUpdate() {
    this.refs.child.changeState(this.state.ticker, this.state.searchWord)
  }
  render() {
    return (
      <div>
        <div className="main">
          <Search ref="child" handler={this.handler} searchWord={this.state.searchWord} />
          <Graph graphname={this.state.ticker} datapoints={this.state.datapoints} datapoints2={this.state.datapoints2} />
          <PopCompanies handler={this.handler} />
        </div>
        <Sidebar tickerName={this.state.ticker} setDatapoints2={this.setDatapoints2} setDatapoints={this.setDatapoints} />
      </div>
    )
  }
}
export default App
