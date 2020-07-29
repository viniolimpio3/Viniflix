import React from 'react';
import logo from '../../assets/logo.png';

import {Link} from 'react-router-dom';
import ButtonLink from '../ButtonLink';
import { NavStyle, StyledButton } from './style';

const Header = () =>{
    return(
        <nav>
            <NavStyle>

                <Link to="/">
                    <img src={logo} alt="ViniFlix" title="ViniFlix"/>
                </Link>
                <StyledButton>
                    <ButtonLink href="">
                        Novo Vídeo
                    </ButtonLink>
                </StyledButton>
                    
                
            </NavStyle>
        </nav>
    );
}
export default Header;