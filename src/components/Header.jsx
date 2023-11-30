
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimney, faChessBoard, faQuestion, faInfo } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = () => {
    return <nav className='navbar navigation'>
        <NavLink to='/' className='nav-home text-center' title='Home'>
            <FontAwesomeIcon icon={faHouseChimney} className='d-md-none' />
            <p className='d-md-inline d-none'>Home</p>
        </NavLink>
        <ul className='nav-items navbar-nav d-flex flex-row p-0 px-2 m-0'>
            <li className='nav-item p-2 text-center'>
                <NavLink to='/game' title='The Game'>
                    <FontAwesomeIcon icon={faChessBoard} className='d-md-none' />
                    <p className='d-md-inline d-none'>The Game</p>
                </NavLink>
            </li>
            <li className='nav-item p-2 text-center'>
                <NavLink to='/instructions' title='Instructions'>
                    <FontAwesomeIcon icon={faQuestion} className='d-md-none' />
                    <p className='d-md-inline d-none'>Instructions</p>
                </NavLink>
            </li>
            <li className='nav-item p-2 text-center'>
                <NavLink to='/about' title='About us'>
                    <FontAwesomeIcon icon={faInfo} className='d-md-none' />
                    <p className='d-md-inline d-none'>About us</p>
                </NavLink></li>
        </ul>
    </nav>
}

export default Header;
