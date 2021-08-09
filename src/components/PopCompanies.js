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
    sendName(popStock, popTicker) {
        this.props.handler(popStock, popTicker);
    }
    render() {
        return (
            <div className="PopCompanies scroll">
                <div onClick={() => { this.sendName("Facebook", 'FB2A.DEX') }}>Facebook</div>
                <div onClick={() => { this.sendName("Apple", 'AAPL') }}>Apple</div>
                <div onClick={() => { this.sendName("Netflix", 'NFLX') }}>Netflix</div>
                <div onClick={() => { this.sendName("Tesla", 'TSLA') }}>Tesla</div>
                <div onClick={() => { this.sendName("Tata", 'TSLA') }}>Tata</div>
                <div onClick={() => { this.sendName("MicroSoft", 'MSFT') }}>MicroSoft</div>
                <div onClick={() => { this.sendName("Amazon", 'AMZN') }}>Amazon</div>
                <div onClick={() => { this.sendName("Zomato", 'ZOMATO.BSE') }}>Zomato</div>
                <div onClick={() => { this.sendName("Airtel", 'BHARTI') }}>Airtel</div>
                <div onClick={() => { this.sendName("Vodafone", 'VOD') }}>Vodafone</div>
                <div onClick={() => { this.sendName("Reliance", 'RELIANCE.BSE') }}>Reliance</div>
                <div onClick={() => { this.sendName("Samsung", 'SMSN.LON') }}>Samsung</div>
                <div onClick={() => { this.sendName("Infosys", 'INFY') }}>Infosys</div>
                <div onClick={() => { this.sendName("TCS", 'TCS') }}>TCS</div>
                <div onClick={() => { this.sendName("HDFC Bank", 'HDB') }}>HDFC Bank</div>
                <div onClick={() => { this.sendName("Nestle", 'NESTLEIND.BSE') }}>Nestle</div>
                <div onClick={() => { this.sendName("Mindtree", '532819.BSE') }}>Mindtree</div>
                <div onClick={() => { this.sendName("ONGC", 'ONGC.BSE') }}>ONGC</div>
                <div onClick={() => { this.sendName("ITC", 'ITCB') }}>ITC</div>
                <div onClick={() => { this.sendName("Asian Paints", '500820.BSE') }}>Asian Paints</div>
            </div>
        )
    }
}
