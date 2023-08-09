import Logo from './icons_assets/Logo.svg';
import Menu from './icons_assets/menuIcon.svg';
import Basket from './icons_assets/Basket.svg';

const GeneralHeader=()=> {
    return (
        <>
            <img id="MenuPic" src={Menu} alt="little lemon"/>
            <img id="logoPic" src={Logo} alt="little lemon"/>
            <img id="BasketPic" src={Basket} alt="little lemon"/>
        </>
    )  
}

export default GeneralHeader;

