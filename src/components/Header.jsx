
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimney, faChessBoard, faQuestion, faInfo } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = () => {
    return <header>
        <h1 className='text-center text-light h5 lead pt-2 mb-0'>The Concentration Game</h1>
        <nav className='navbar navigation pt-0'>
            <NavLink to='/' className='nav-home text-center' title='Home'>
                <FontAwesomeIcon icon={faHouseChimney} className='d-md-none' />
                <p className='d-md-inline d-none'>Home</p>
            </NavLink>
            <ul className='nav-items navbar-nav d-flex flex-row p-0 px-2 m-0'>
                <li className='nav-item px-2 text-center'>
                    <NavLink to='/game' title='The Game'>
                        <FontAwesomeIcon icon={faChessBoard} className='d-md-none' />
                        <p className='d-md-inline d-none'>The Game</p>
                    </NavLink>
                </li>
                <li className='nav-item px-2 text-center'>
                    <NavLink to='/instructions' title='Instructions'>
                        <FontAwesomeIcon icon={faQuestion} className='d-md-none' />
                        <p className='d-md-inline d-none'>Instructions</p>
                    </NavLink>
                </li>
                <li className='nav-item px-2 text-center'>
                    <NavLink to='/about' title='About us'>
                        <FontAwesomeIcon icon={faInfo} className='d-md-none' />
                        <p className='d-md-inline d-none'>About us</p>
                    </NavLink></li>
            </ul>
        </nav>
    </header>
}

export default Header;
