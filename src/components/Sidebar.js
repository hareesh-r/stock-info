import React, { Component } from 'react'
import "./Sidebar.css"

export default class Sidebar extends Component {
    render() {
        return (
            <div>
                <div class="sidenav">
                    <span className="logo">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAHXPluq6GtTRPDIHRv5kJPy86uFjp5sO7hg&usqp=CAU" alt="" />
                    </span>
                    <div>Day View</div>
                    <div>Weekly View</div>
                    <div>Monthly View</div>
                    <div>Info</div>
                </div>
            </div>
        )
    }
}
