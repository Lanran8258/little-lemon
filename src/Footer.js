import FooterLogo from './icons_assets/Logo.svg';
import './Footer.css';

function Footer(props) {
    return (
        <div className="footer">
        <img className="footerLogo" src={FooterLogo} alt="little lemon"/>
        <p className="footerText">Copyright Little Lemon</p>
        </div>
    )
}

export default Footer;