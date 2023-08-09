import './BookingForm.css';
import Restaurant from './icons_assets/restaurant.jpg';
import Chef from './icons_assets/chef.jpg';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';


const BookingForm=()=>{
    

    const [date, setDate] = useState("");
    const [time, setTime] = useState("default");
    const [number, setNumber] = useState("default");
    const [occasion, setOccasion] = useState("default")
    const nevigate = useNavigate();
    const isValid = () => {
        if (time=="default" || occasion=="default" || number=="default" || date=="")
        {
            return false;
        }
        else {
            return true;
        }
    }
    

    return (
        <div className="background">
            <div className='container'>
                <div className="info">
                    <h1 className="name">Little Lemon</h1>
                    <h2 className="location">Chicago</h2>
                    <p>Find a table for any occasion</p>
                </div>

                <div className="reservationPics">
                    <img className="reservePic" src={Restaurant} alt="little lemon"/>
                    <img className="reservePic" src={Chef} alt="little lemon"/>
                </div>
                <div className="reserveInfo">
                    <Form className='form'>
                    <Form.Group className='dateTime'>
                        <div className='date'>
                        <input
                            className='data'                
                            type="date"
                            name="date"
                            selected={date} 
                            onChange={(date) => (setDate(date))} 
                        />
                        </div>
                        <div className='time'>
                            <select className='data' id="res-time" defaultValue={time} onChange={(time) => setTime(time)}>
                                <option value="default" disabled hidden>
                                Time
                                </option>
                                <option>17:00</option>
                                <option>18:00</option>
                                <option>19:00</option>
                                <option>20:00</option>
                                <option>21:00</option>
                                <option>22:00</option>
                            </select>
                        </div>
                    </Form.Group>
                    <Form.Group className='peopleNum'>
                        <input type="number" defaultValue={number} onChange={(number) => setNumber(number)} placeholder="Number of Diners" min="1" max="10" id="guests" className='data'/>
                    </Form.Group>
                    <Form.Group className='occasion'>
                        <select id="occasion" className='data' defaultValue={occasion} onChange={(occasion) => setOccasion(occasion)}>
                            <option value="default" disabled hidden>
                                    Occasion
                            </option>
                            <option>Birthday</option>
                            <option>Anniversary</option>
                        </select>
                    </Form.Group>
                    <button className='submitReserve' type="submit" onClick={() => {return (nevigate("/signIn"))}} disabled={!isValid()}>Make Your Reservation</button>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default BookingForm;