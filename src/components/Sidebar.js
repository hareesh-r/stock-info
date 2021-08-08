import React, { Component } from 'react'
import "./Sidebar.css"
import logo from "../img/logo.png"

export default class Sidebar extends Component {

    constructor() {
        super();
    }
    activeDay() {
        fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${this.props.tickerName}&apikey=CACFBGOGRJ9ZLNDH`)
            .then(response => response.json())
            .then(json => {
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
        fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${this.props.tickerName}&apikey=CACFBGOGRJ9ZLNDH`)
            .then(response => response.json())
            .then(json => {
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
        fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=${this.props.tickerName}&apikey=CACFBGOGRJ9ZLNDH`)
            .then(response => response.json())
            .then(json => {
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
        fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${this.props.tickerName}&apikey=CACFBGOGRJ9ZLNDH`)
            .then(response => response.json())
            .then(json => {
                console.log(json)
            })
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
            </div>
        )
    }
}
