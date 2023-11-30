const Instructions = () => {
    return <section className='container instructions'>
        <div className='row justify-content-center py-3'>
            <div className='col-md-8'>
                <div className='card'>
                    <div className='card-body'>
                        <h2 className='card-title mb-4 text-center font-weight-bold text-success'>
                            Concentration Game Instructions
                        </h2>
                        <p className='card-text'>
                            Welcome to the Concentration Game! Test and enhance your memory skills with this fun and challenging game.
                        </p>
                        <h5 className='card-subtitle mb-3 mt-4 text-muted'>How to Play:</h5>
                        <ol>
                            <li>Click on a card to reveal its image.</li>
                            <li>Try to find the matching card with the same image.</li>
                            <li>If the cards match, they stay face up. If not, they will flip back.</li>
                            <li>Continue until all pairs are matched.</li>
                        </ol>
                        <h5 className='card-subtitle mb-3 mt-4 text-muted'>Game Rules:</h5>
                        <ul>
                            <li>Test your memory and try to complete the game with the least number of moves.</li>
                            <li>Challenge yourself to finish the game in the shortest time possible.</li>
                        </ul>
                        <p className='card-text mt-4'>
                            Have fun and enjoy the Concentration Game!
                        </p>
                        <div className='text-center'>
                            <a href='./game' className='btn btn-success mt-3'>
                                Go to the Game
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>;
}

export default Instructions;
