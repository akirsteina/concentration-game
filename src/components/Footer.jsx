
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';

const Footer = () => {
    return <footer className='container-fluid py-2'>
        <div className='row align-items-center'>
            <div className='col-sm-6 col-12 text-center'>
                <p className='m-1 text-center'>&copy; 2023 The Concentration game</p>
            </div>
            <div className='col-sm-6 col-12 text-center'>
                <p className='m-1 text-center'>Contact us:</p>
                <div className='text-center'>
                    <a href='mailto:email@email.com' className='icon-link'><FontAwesomeIcon icon={faEnvelope} className='px-2' /></a>
                    <a href='tel:12345' className='icon-link'><FontAwesomeIcon icon={faPhone} className='px-2' /></a>
                </div>
            </div>
        </div>
    </footer>;
}

export default Footer;
