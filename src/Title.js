import Food from './icons_assets/restauranfood.jpg';
import './Title.css';
import {useNavigate} from 'react-router-dom';

const Title=()=>{

    const nevigate = useNavigate();    

    return (
        <div className="titleBox">
            <div className="titleBackground">
                <div className="restaurantDesc">
                    <div className="nameLocation">
                        <h1 className="name">Little Lemon</h1>
                        <h2 className="location">Chicago</h2>
                    </div>
                    <p className="description">We are a family owned Mediterranean restaurant,
                    focused on traditional recipes served with a modern twist</p>
                    <button className="btn" onClick={() => {nevigate("/reservations")}}>
                    Reserve a Table
                    </button>
                </div>
            </div>
            <div className='food'>
                <img id="foodPic" src={Food} alt="little lemon food"/>
            </div>
        </div>
    )
}

export default Title;