import React from "react";
import "./menu.css"
import Layout from "../../Navigation/layout";
import Header from "../../Navigation/Header/header";
import Sidebar from "../../Navigation/Sidebar/sidebar";
import Dishes from "../../../static";
import Reservation from "./reservations";

const Jumbo = () => {
    return (
        <div className="jumbo">
            <div className="flex mt-6 w-full border border-solid border-[#186F3D]">
            <Header />
            <Sidebar />
            </div>
            <div className="">
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
                <img src="Image-plate.png" alt="plate" className="plate" />
                <div className="listing">
                    {Dishes.starters.map((item, key) => {
                        return (
                            <div className="list" key={key}>
                                <p className="price">{item.price}</p>
                                <p className="food-name">{item.dish}</p>
                                <p className="food-desc">{item.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

const Mains = () => {
    return (
        <div>
            <div className="starter-r">
                <div className="header-r">
                    <p className="head">Mains</p>
                    <p className="subtitle">Our Main dishes are just Delicous! </p>
                </div>
            </div>

            <div className="food-r">
                <div className="listing">
                {Dishes.mains.map((item, key) => {
                        return (
                            <div className="list" key={key}>
                                <p className="price">{item.price}</p>
                                <p className="food-name">{item.dish}</p>
                                <p className="food-desc">{item.description}</p>
                            </div>
                        )
                    })}
                </div>
                <img src="Image-main.png" alt="plate" className="plate-r" />
            </div>
        </div>
    )
}

const Pastries = () => {
    return (
        <div className="wines">
            <div className="starter-r  pastries">
                <div className="header-r">
                    <p className="head">Pastries & Drinks</p>
                    <p className="subtitle">We have assorted patries and drinks</p>
                    <img src="Avocado.png" alt="Avocado" className="avocado" />
                </div>
            </div>

            <div className="food">
                <img src="Image-pastries.png" alt="plate" className="plate" />
                <div className="listing">
                {Dishes.pastries.map((item, key) => {
                        return (
                            <div className="list" key={key}>
                                <p className="price">{item.price}</p>
                                <p className="food-name">{item.dish}</p>
                                <p className="food-desc">{item.description}</p>
                            </div>
                        )
                    })}
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
            <Reservation />
        </Layout>
    )
}

export default Menu;