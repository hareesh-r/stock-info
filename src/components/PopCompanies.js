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

    sendName(popStock){
        console.log(popStock + "from pop")
        this.props.handler(popStock);
    }

    render() {

        return (
            <div className="PopCompanies scroll">
                <div onClick={()=>{this.sendName("Facebook")}}>Facebook</div>
                <div onClick={()=>{this.sendName("Apple")}}>Apple</div>
                <div onClick={()=>{this.sendName("Netflix")}}>Netflix</div>
                <div onClick={()=>{this.sendName("Tesla")}}>Tesla</div>
                <div onClick={()=>{this.sendName("Tata")}}>Tata</div>
                <div onClick={()=>{this.sendName("MicroSoft")}}>MicroSoft</div>
                <div onClick={()=>{this.sendName("Amazon")}}>Amazon</div>
                <div onClick={()=>{this.sendName("Zomato")}}>Zomato</div>
                <div onClick={()=>{this.sendName("Airtel")}}>Airtel</div>
                <div onClick={()=>{this.sendName("Vodafone")}}>Vodafone</div>
                <div onClick={()=>{this.sendName("Reliance")}}>Reliance</div>
                <div onClick={()=>{this.sendName("Samsung")}}>Samsung</div>
                <div onClick={()=>{this.sendName("Infosys")}}>Infosys</div>
                <div onClick={()=>{this.sendName("TCS")}}>TCS</div>
                <div onClick={()=>{this.sendName("HDFC Bank")}}>HDFC Bank</div>
                <div onClick={()=>{this.sendName("Nestle")}}>Nestle</div>
                <div onClick={()=>{this.sendName("Mindtree")}}>Mindtree</div>
                <div onClick={()=>{this.sendName("ONGC")}}>ONGC</div>
                <div onClick={()=>{this.sendName("ITC")}}>ITC</div>
                <div onClick={()=>{this.sendName("Asian Paints")}}>Asian Paints</div>
            </div>
        )
    }
}
