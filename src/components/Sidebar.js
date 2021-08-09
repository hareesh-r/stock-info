import React, { Component } from 'react'
import "./Sidebar.css"
import logo from "../img/logo.png"

export default class Sidebar extends Component {

    constructor() {
        super();
        this.state = {
            infoOBJ: [{
                "Global Quote": {
                    "01. symbol": "ZOMATO.BSE",
                    "02. open": "135.7000",
                    "03. high": "136.2000",
                    "04. low": "130.1000",
                    "05. price": "131.2000",
                    "06. volume": "2172173",
                    "07. latest trading day": "2021-08-06",
                    "08. previous close": "134.8500",
                    "09. change": "-3.6500",
                    "10. change percent": "-2.7067%"
                }
            }],
            show: false,
        }
    }
    activeDay() {
        fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${this.props.tickerName}&apikey=KBFYBLWQ3Y65L92Y`)
            .then(response => response.json())
            .then(json => {
                console.log(json)
                try {
                    if (json.Information === "Thank you for using Alpha Vantage! Our standard API call frequency is 5 calls per minute and 500 calls per day. Please visit https://www.alphavantage.co/premium/ if you would like to target a higher API call frequency.") {
                        alert("Please try to connect to a VPN");
                    }else if(json.Note === "Thank you for using Alpha Vantage! Our standard API call frequency is 5 calls per minute and 500 calls per day. Please visit https://www.alphavantage.co/premium/ if you would like to target a higher API call frequency."){
                        alert("Please try again in a minute");
                    }
                } catch (e) {
                    console.log(e)
                }
                var arr = []
                var arr2 = []
                for (var key in json["Time Series (Daily)"]) {
                    arr.push(key)
                    arr2.push(json["Time Series (Daily)"][key]["2. high"])
                }
                this.props.setDatapoints(arr.reverse())
                this.props.setDatapoints2(arr2.reverse())

            })
        document.getElementById("week").classList.remove("activated");
        document.getElementById("month").classList.remove("activated");
        document.getElementById("info").classList.remove("activated");
        document.getElementById("day").classList.add("activated");
    }
    activeMonth() {
        fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${this.props.tickerName}&apikey=KBFYBLWQ3Y65L92Y`)
            .then(response => response.json())
            .then(json => {
                console.log(json)
                try {
                    if (json.Information === "Thank you for using Alpha Vantage! Our standard API call frequency is 5 calls per minute and 500 calls per day. Please visit https://www.alphavantage.co/premium/ if you would like to target a higher API call frequency.") {
                        alert("Please try to connect to a VPN");
                    }else if(json.Note === "Thank you for using Alpha Vantage! Our standard API call frequency is 5 calls per minute and 500 calls per day. Please visit https://www.alphavantage.co/premium/ if you would like to target a higher API call frequency."){
                        alert("Please try again in a minute");
                    }
                } catch (e) {
                    console.log(e)
                }
                var arr = []
                var arr2 = []
                for (var key in json["Monthly Time Series"]) {
                    arr.push(key)
                    arr2.push(json["Monthly Time Series"][key]["2. high"])
                }
                this.props.setDatapoints(arr.reverse())
                this.props.setDatapoints2(arr2.reverse())
            })
        document.getElementById("week").classList.remove("activated");
        document.getElementById("day").classList.remove("activated");
        document.getElementById("info").classList.remove("activated");
        document.getElementById("month").classList.add("activated");
    }
    activeWeek() {
        fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=${this.props.tickerName}&apikey=KBFYBLWQ3Y65L92Y`)
            .then(response => response.json())
            .then(json => {
                console.log(json)
                try {
                    if (json.Information === "Thank you for using Alpha Vantage! Our standard API call frequency is 5 calls per minute and 500 calls per day. Please visit https://www.alphavantage.co/premium/ if you would like to target a higher API call frequency.") {
                        alert("Please try to connect to a VPN");
                    }else if(json.Note === "Thank you for using Alpha Vantage! Our standard API call frequency is 5 calls per minute and 500 calls per day. Please visit https://www.alphavantage.co/premium/ if you would like to target a higher API call frequency."){
                        alert("Please try again in a minute");
                    }
                } catch (e) {
                    console.log(e)
                }
                var arr = []
                var arr2 = []
                for (var key in json["Weekly Time Series"]) {
                    arr.push(key)
                    arr2.push(json["Weekly Time Series"][key]["2. high"])
                }
                this.props.setDatapoints(arr.reverse())
                this.props.setDatapoints2(arr2.reverse())
            })
        document.getElementById("day").classList.remove("activated");
        document.getElementById("month").classList.remove("activated");
        document.getElementById("info").classList.remove("activated");
        document.getElementById("week").classList.add("activated");
    }
    activeInfo() {
        if (!this.state.show) {
            fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${this.props.tickerName}&apikey=KBFYBLWQ3Y65L92Y`)
                .then(response => response.json())
                .then(json => {
                    console.log(json)
                    try {
                        if (json.Information === "Thank you for using Alpha Vantage! Our standard API call frequency is 5 calls per minute and 500 calls per day. Please visit https://www.alphavantage.co/premium/ if you would like to target a higher API call frequency.") {
                            alert("Please try to connect to a VPN");
                            this.setState({
                                infoOBJ: [{
                                    "Global Quote": {
                                        "01. symbol": "ZOMATO.BSE",
                                        "02. open": "135.7000",
                                        "03. high": "136.2000",
                                        "04. low": "130.1000",
                                        "05. price": "131.2000",
                                        "06. volume": "2172173",
                                        "07. latest trading day": "2021-08-06",
                                        "08. previous close": "134.8500",
                                        "09. change": "-3.6500",
                                        "10. change percent": "-2.7067%"
                                    }
                                }]
                            })
                        }else if(json.Note === "Thank you for using Alpha Vantage! Our standard API call frequency is 5 calls per minute and 500 calls per day. Please visit https://www.alphavantage.co/premium/ if you would like to target a higher API call frequency."){
                            alert("Please try again in a minute");
                        }else{
                            this.setState({ infoOBJ: json })
                            this.setState({ show: true })
                        }
                    } catch (e) {
                        console.log(e)
                    }
                })
        } else {
            this.setState({ show: false })
        }
        document.getElementById("week").classList.remove("activated");
        document.getElementById("month").classList.remove("activated");
        document.getElementById("day").classList.remove("activated");
        document.getElementById("info").classList.add("activated");
    }
    render() {
        return (
            <div>
                <div className="sidenav">
                    <span className="logo">
                        <img src={logo} alt="" />
                    </span>
                    <div id="day" onClick={() => this.activeDay()}>Day View</div>
                    <div id="week" onClick={() => this.activeWeek()}>Weekly View</div>
                    <div id="month" onClick={() => this.activeMonth()}>Monthly View</div>
                    <div id="info" onClick={() => this.activeInfo()}>Info</div>
                </div>

                {
                    this.state.show && (
                        <div className="content">
                            The Stock {this.state.infoOBJ["Global Quote"]["01. symbol"]} was opened with {this.state.infoOBJ["Global Quote"]["02. open"]}$ which hit the highest of {this.state.infoOBJ["Global Quote"]["03. high"]}$ and lowest of {this.state.infoOBJ["Global Quote"]["04. low"]}$ today with an average price of {this.state.infoOBJ["Global Quote"]["05. price"]}$ <br />. The Volume of {this.state.infoOBJ["Global Quote"]["01. symbol"]} is {this.state.infoOBJ["Global Quote"]["06. volume"]} . Yesterday it was closed with {this.state.infoOBJ["Global Quote"]["08. previous close"]}$ . The stock changed by {this.state.infoOBJ["Global Quote"]["10. change percent"]} today
                        </div>
                    )
                }

            </div>
        )
    }
}
