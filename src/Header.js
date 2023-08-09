import Logo from './icons_assets/Logo.svg'
import './Header.css'
import {Link} from 'react-router-dom';

function Header(props) {
    return (
        <div className="header">
            <div className="logo">
                <img id="logoPic" src={Logo} alt="little lemon"/>
            </div>
            <nav className="nav">
                    <Link to="/" className="nav-item">Home</Link>
                    <Link to="/about" className="nav-item">About</Link>
                    <Link to="/menu" className="nav-item">Menu</Link>
                    <Link to="/reservations" className="nav-item">Reservations</Link>
                    <Link to="/order-online" className="nav-item">Order Online</Link>
                    <Link to="/login" className="nav-item">Login</Link>
            </nav>
            
        </div>
    )
}

export default Header;