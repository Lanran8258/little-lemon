import Food from './icons_assets/restauranfood.jpg'
import './Title.css'

const Title=()=>{
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
                    <button className="btn">Reverse a Table</button>
                </div>
            </div>
            <div className='food'>
                <img id="foodPic" src={Food} alt="little lemon food"/>
            </div>
        </div>
        
    )
}

export default Title;