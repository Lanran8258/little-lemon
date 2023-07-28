import GreekSalad from './icons_assets/greek salad.jpg'
import Bruchetta from './icons_assets/bruchetta.jpg'
import lemonDessert from './icons_assets/lemon dessert.jpg'
import './Card.css';
import Delivery from './icons_assets/bike.png'

const Card=()=>{
    return (
        <div className="cardContainer">
            <div className="cards">
                <section className="card">
                        <img className="foodPic" src={GreekSalad} alt="greek salad picture"/>
                    <div className="dishAndPrice">
                        <h2 className="dish">Greek Salad</h2>
                        <h2 className="price">$12.99</h2>
                    </div>
                    <div className="dishDescContainer">
                        <p className="dishDescription">The famous greek salad of crispy lettuce, peppers, ovlives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons</p>
                    </div>
                    
                    <div className="delivery">
                        <a className="deliveryText">Order a Delivery</a>
                        <img className="deliveryPic" src={Delivery} alt="delivery"/>
                    </div>
                </section>
                <section className="card">
                    <img className="foodPic" src={Bruchetta} alt="bruchetta picture"/>
                    <div className="dishAndPrice">
                        <h2 className="dish">Bruchetta</h2>
                        <h2 className="price">$5.99</h2>
                    </div>
                    <div className="dishDescContainer">
                        <p className="dishDescription">Our Bruchetta is make from grilled bread that has been smeared with garlic and seasoned with salt and olive oil</p>
                    </div>
                    <div className="delivery">
                        <a className="deliveryText">Order a Delivery</a>
                        <img className="deliveryPic" src={Delivery} alt="delivery"/>
                    </div>
                </section>
                <section className="card">
                    <img className="foodPic" src={lemonDessert} alt="lemon dessert picture"/>
                    <div className="dishAndPrice">
                        <h2 className="dish">Lemon Dessert</h2>
                        <h2 className="price">$5.00</h2>
                    </div>
                    <div className="dishDescContainer">
                        <p className="dishDescription">This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined</p>
                    </div>
                    <div className="delivery">
                        <a className="deliveryText">Order a Delivery</a>
                        <img className="deliveryPic" src={Delivery} alt="delivery"/>
                    </div>
                </section>
                </div>
        </div>
    )
}
export default Card;