import logo from '../../assets/logo.png'
import { Container, Menu, Li } from './styles'
import { Link, useLocation }from 'react-router-dom'
import { useState } from 'react'

function Header () {
    const {pathname} = useLocation()
    const [changeBackground, setChangeBackground] = useState(false)

    window.onscroll = () => {
        if (window.pageYOffset > 145) {
          setChangeBackground(true);
        }
        if (window.pageYOffset <= 145) {
          setChangeBackground(false);
        }
      };
    return(
        <>
        <Container changeBackground={changeBackground}>
            < img src={logo} alt='logo-dev-movies'/>
            <Menu>
                <Li isActive={pathname === '/'}>
                    <Link to={'/'}>Home</Link>
                </Li>
                <Li isActive={pathname.includes('movies')}>
                    <Link to='/movies'>Filmes</Link>
                </Li>
                <Li isActive={pathname.includes('series')}>
                    <Link to='/series'>Séries</Link>
                </Li>
            </Menu>
        </Container>
        
        </>
        )
}

export default Header