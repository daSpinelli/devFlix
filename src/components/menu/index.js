import React from 'react';
import Logo from '../../assets/img/LogoMain.png'
import './Menu.css'
import Button from '../button';
import { Link } from 'react-router-dom';

//import ButtonLink from './components/ButtonLink';

// Todo componente precisa iniciar com letra maiúscula
function Menu() {
    return (
        <nav className = "Menu">
            <Link to = "/">
                <img className = "Logo" src = {Logo} alt = "devFlix" />
            </Link>

            <Button as = {Link} className = "ButtonLink" to = "/add-new/video">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;