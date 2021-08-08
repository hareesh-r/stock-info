import React, { Component } from 'react'
import "./PopCompanies.css"

export default class PopCompanies extends Component {

    componentDidMount() {
        const slider = document.querySelector(".scroll");
        let isDown = false;
        let startX;
        let scrollLeft;

        slider.addEventListener("mousedown", e => {
            isDown = true;
            slider.classList.add("active");
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });
        slider.addEventListener("mouseleave", () => {
            isDown = false;
            slider.classList.remove("active");
        });
        slider.addEventListener("mouseup", () => {
            isDown = false;
            slider.classList.remove("active");
        });
        slider.addEventListener("mousemove", e => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = x - startX;
            slider.scrollLeft = scrollLeft - walk;
        });
    }

    render() {

        return (
            <div className="PopCompanies scroll">
                <div>Facebook</div>
                <div>Apple</div>
                <div>Netflix</div>
                <div>Tesla</div>
                <div>Tata</div>
                <div>MicroSoft</div>
                <div>Amazon</div>
                <div>Zomato</div>
                <div>Airtle</div>
                <div>Vodafone</div>
                <div>Reliance</div>
                <div>Samsung</div>
                <div>Infosys</div>
                <div>TCS</div>
                <div>HDFC Bank</div>
                <div>Nestle</div>
                <div>Mindtree</div>
                <div>ONGC</div>
                <div>ITC</div>
                <div>Asian Paints</div>
            </div>
        )
    }
}
