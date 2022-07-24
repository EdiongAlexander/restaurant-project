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
        <div className="wines">
        <div className="starter-r  pastries">
            <div className="header-r">
                <p className="head">Pastries & Drinks</p>
                <p className="subtitle">We have assorted patries and drinks</p>
                <img src="Avocado.png" alt="Avocado" className="avocado"/>
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

const Reservation = () =>{
    return(
        <div className="reservation">
            <div className="starter-r">
                <div className="header-r">
                    <p className="head">Make a Reservation</p>
                    <p className="subtitle touch">Get in Touch!</p>
                </div>
            </div>

            <div className="forms">
                <form action="">
                    <div className="form-flex">
                    <input type="date" className="inputs" placeholder="16/22/2021"/>
                    <select name="time" id="time" className="inputs">
                        <option value="8am">8AM</option>
                        <option value="9am">9AM</option>
                        <option value="9am">9AM</option>
                        <option value="10am">10AM</option>
                        <option value="11am">11AM</option>
                        <option value="12pm">12PM</option>
                        <option value="1pm">1PM</option>
                        <option value="2pm">2PM</option>
                        <option value="3pm">3PM</option>
                        <option value="4pm">4PM</option>
                        <option value="5pm">5PM</option>
                        <option value="6pm">6PM</option>
                        <option value="7pm">7PM</option>
                        <option value="8pm">8PM</option>
                    </select>
                    <select name="count" id="count" className="inputs">
                        <option value="1">1 Person</option>
                        <option value="2">2 Persons</option>
                        <option value="3">3 Persons</option>
                        <option value="4">4 Persons</option>
                        <option value="5">5 Persons</option>
                    </select>
                    </div>
                    <input type="submit" value="Book Now" className="book"/>
                </form>
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