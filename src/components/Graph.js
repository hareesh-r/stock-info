import React, { Component } from 'react'
import "./Graph.css"
import { Line, Bar } from "react-chartjs-2";

export default class Graph extends Component {
    constructor() {
        super();
        this.state = {
            gradient: "",
        }
    }
    componentDidMount() {
        var ctx = document.getElementById('canvas').getContext("2d")
        var gradient = ctx.createLinearGradient(1, 2, 3, 400)
        gradient.addColorStop(0, 'rgb(146,203,175,1)')
        gradient.addColorStop(1, 'rgb(146,203,175,0.4)')
        this.setState({ gradient })
    }
    render() {

        return (
            <div className="Graph">
                <Line
                    id="canvas"
                    height={300}
                    width={700}
                    data={{
                        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
                        datasets: [
                            {
                                fill: true,
                                cubicInterpolationMode: "monotone",
                                label: `Graph Name`,
                                data: [5, 10, 5, 15, 20, 9, 16, 5, 3, 47, 92, 1, 34, 52, 19],
                                backgroundColor: this.state.gradient,
                                borderColor: [
                                    '#92CBAF',
                                ],
                                borderWidth: 2,
                            },
                        ],
                    }}
                    options={{
                        maintainAspectRatio: false,
                        scales: {
                            y: {
                                beginAtZero: true,
                            }, animation: {
                                duration: 0
                            }
                        }
                    }}
                />
            </div>
        )
    }
}
