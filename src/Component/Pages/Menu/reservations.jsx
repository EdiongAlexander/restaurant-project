import React from "react";

const Reservation = () => {
    return (
        <div className="reservation">
            <div className="starter-r">
                <div className="header-r">
                    <p className="head reserve">Make a Reservation</p>
                    <p className="subtitle touch">Get in Touch!</p>
                </div>
            </div>

            <div className="forms">
                <form action="">
                    <div className="form-flex">
                        <input type="date" className="inputs" placeholder="16/22/2021" />
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
                    <input type="submit" value="Book Now" className="book" />
                </form>
            </div>
        </div>
    )
}


export default Reservation;