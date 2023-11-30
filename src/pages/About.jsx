
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './About.css';

const About = () => {
    return <section className='container my-5'>
    <div className='row py-2'>
      <div className='col'>
        <h2 className='text-center text-light mb-5' id='about-title'>About Us</h2>
      </div>
    </div>
    <div className='row justify-content-center'>
      <div className='col-md-8'>
        <div className='card text-bg-success text-white text-center'>
          <div className='card-body'>
            <h5 className='card-title'>Welcome to Our Colorful World</h5>
            <p className='card-text'>
              We are a vibrant team dedicated to bringing joy and creativity to everything we do.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className='row mt-5'>
      <div className="col-md-2"></div>
      <div className='col-sm-6 col-md-4 py-1'>
        <div className='card text-bg-dark'>
          <img
            src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3NjA4Mjc3NHx8ZW58MHx8fHx8'
            className='card-img-top rounded-circle mx-auto mt-3'
            alt='Team Member'
          />
          <div className='card-body text-center'>
            <h5 className='card-title'>Jerry Tom</h5>
            <p className='card-text'>
              <FontAwesomeIcon icon={faUser} className='text-success px-1'/>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
      <div className='col-sm-6 col-md-4 py-1'>
        <div className='card text-bg-dark'>
          <img
            src='https://images.unsplash.com/photo-1597589827317-4c6d6e0a90bd?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3F1YXJlfGVufDB8fDB8fHww'
            className='card-img-top rounded-circle mx-auto mt-3'
            alt='Team Member'
          />
          <div className='card-body text-center'>
            <h5 className='card-title'>Jane Doe</h5>
            <p className='card-text'>
              <FontAwesomeIcon icon={faUser} className='text-success px-1'/>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
      <div className="col-lg-2"></div>
    </div>
  </section>;
}

export default About;