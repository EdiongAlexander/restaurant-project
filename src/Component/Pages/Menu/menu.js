import React from "react";
import "./menu.css"
import Layout from "../../Navigation/layout";
import Header from "../../Navigation/Header/header"
import Sidebar from "../../Navigation/Sidebar/sidebar";

const Jumbo = () => {
    return (
        <div className="jumbo">
            <Header />
            <Sidebar />
            <div className="intro">
                <p className="large">View Our <br /> New Menu</p>
                <p className="small">The freshest ingredients for you everyday</p>
            </div>
        </div>

    )
}

const Starters = () => {
    return (
        <div>
            <div className="starter">
                <div className="header">
                    <p className="head">Starters</p>
                    <p className="subtitle">Checkout our Delicous starter meals :) </p>
                </div>
                <img src="Blueberry.png" alt="blueberry" className="blueberry" />
            </div>

            <div className="food">
                <img src="Image-plate.png" alt="plate" className="plate"/>
                <div className="listing">
                    <div className="list">
                        <p className="price">$20</p>
                        <p className="food-name">Grilled Okra and Tomatoes</p>
                        <p className="food-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>

                    <div className="list">
                        <p className="price">$18</p>
                        <p className="food-name">Cucumber Salad</p>
                        <p className="food-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>

                    <div className="list">
                        <p className="price">$12</p>
                        <p className="food-name">Basil Pancakes</p>
                        <p className="food-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Mains = () => {
    return(
        <div>
        <div className="starter-r">
            <div className="header-r">
                <p className="head">Mains</p>
                <p className="subtitle">Our Main dishes are just Delicous! </p>
            </div>
        </div>

        <div className="food-r">
            <div className="listing">
                <div className="list">
                    <p className="price">$20</p>
                    <p className="food-name">Deep Sea Snow White Cod Fillet</p>
                    <p className="food-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>

                <div className="list">
                    <p className="price">$22</p>
                    <p className="food-name">Stake With Rosemary Butter</p>
                    <p className="food-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>

                <div className="list">
                    <p className="price">$20</p>
                    <p className="food-name">Stakes With Grilled Kimchi</p>
                    <p className="food-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
            <img src="Image-main.png" alt="plate" className="plate-r"/>
        </div>
    </div>
    )
}

const Pastries = () => {
    return(
        <div>
        <div className="starter-r">
            <div className="header-r">
                <p className="head">Pastries & Drinks</p>
                <p className="subtitle">We have assorted patries and drinks</p>
            </div>
        </div>

        <div className="food">
            <img src="Image-pastries.png" alt="plate" className="plate"/>
            <div className="listing">
                <div className="list">
                    <p className="price">$158</p>
                    <p className="food-name">Wine Pairing</p>
                    <p className="food-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>

                <div className="list">
                    <p className="price">$168</p>
                    <p className="food-name">Natural Wine Pairing</p>
                    <p className="food-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>

                <div className="list">
                    <p className="price">$90</p>
                    <p className="food-name">Whiskey Flyer</p>
                    <p className="food-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
        </div>
    </div>
    )
}


const Menu = () => {
    return (
        <Layout>
            <Jumbo />
            <Starters />
            <Mains />
            <Pastries />
        </Layout>
    )
}

export default Menu;