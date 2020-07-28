import React from 'react';
import Logo from '../../assets/img/LogoMain.png'
import './Menu.css'
import Button from '../button';

//import ButtonLink from './components/ButtonLink';

// Todo componente precisa iniciar com letra maiúscula
function Menu() {
    return (
        <nav className = "Menu">
            <a href = "/">
                <img className = "Logo" src = {Logo} alt = "devFlix" />
            </a>

            <Button as = "a" className = "ButtonLink" href = "/">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;