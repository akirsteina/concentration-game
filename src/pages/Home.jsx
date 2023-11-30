import './Home.css';

const Home = () => {
    return <section className='home p-3 homepage d-flex align-items-center justify-content-center'>
        <div className='row justify-content-center align-self-center'>
            <div className='col-12 mx-auto text-center'>
                <a id='homepage-title-link' href='/game'>Let the games begin!</a>
            </div>
        </div>
    </section>;
}

export default Home;
