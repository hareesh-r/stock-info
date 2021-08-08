import React, { Component } from 'react'
import "./Sidebar.css"
import logo from "../img/logo.png"

export default class Sidebar extends Component {

    constructor(){
        super();
    }
    activeDay(){
        console.log("asdfsdf")
        document.getElementById("week").classList.remove("activated");
        document.getElementById("month").classList.remove("activated");
        document.getElementById("info").classList.remove("activated");
        document.getElementById("day").classList.add("activated");
    }
    activeMonth(){
        document.getElementById("week").classList.remove("activated");
        document.getElementById("day").classList.remove("activated");
        document.getElementById("info").classList.remove("activated");
        document.getElementById("month").classList.add("activated");
    }
    activeWeek(){
        document.getElementById("day").classList.remove("activated");
        document.getElementById("month").classList.remove("activated");
        document.getElementById("info").classList.remove("activated");
        document.getElementById("week").classList.add("activated");
    }
    activeInfo(){
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
                    <div id="day" onClick={()=>this.activeDay()}>Day View</div>
                    <div id="week" onClick={()=>this.activeWeek()}>Weekly View</div>
                    <div id="month" onClick={()=>this.activeMonth()}>Monthly View</div>
                    <div id="info" onClick={()=>this.activeInfo()}>Info</div>
                </div>
            </div>
        )
    }
}
