import Logo from './icons_assets/Logo.svg'
import './Header.css'

let url = ""
function Header(props) {
    return (
        <div className="header">
            <div className="logo">
                <img id="logoPic" src={Logo} alt="little lemon"/>
            </div>
            <nav className="nav">
                <ul>
                    <li><a href={url}>Home</a></li>
                    <li><a href={url}>About</a></li>
                    <li><a href={url}>Menu</a></li>
                    <li><a href={url}>Reservations</a></li>
                    <li><a href={url}>Order Online</a></li>
                    <li><a href={url}>Login</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;