import { useState, useEffect, useCallback } from 'react';
import MemoryCard from '../components/MemoryCard';

const GameBoard = () => {
    const [error, setError] = useState(null);
    const [isLoading, setisLoading] = useState(false);
    const [cards, setCards] = useState([]);
    const [cardOne, setCardOne] = useState(null);
    const [cardTwo, setCardTwo] = useState(null);
    const [turns, setTurns] = useState(0);
    const [points, setPoints] = useState(0);
    const [disabled, setDisabled] = useState(false);
    const [gameIsFinished, setGameIsFinished] = useState(false);
    const initialGameInfo = <p className='text-light'>To start the game, click on any two of the cards!</p>;
    const [gameInfo, setGameInfo] = useState(initialGameInfo);

    /*
     * Checks if the user has selected two consecutive cards (cardOne, cardTwo)
     * If the selected cards match, 
     *   (1) A point is added to points;
     *   (2) Card statuses are updated, to give value 'matched' for the matching cards;
     *   (3) Card deck is updated;
     *   (4) The turn is reset;
     *   (5) The game status (if game is finished or not) is updated
     * Else, the turn is reset
     */
    useEffect(() => {
        if (cardOne && cardTwo && cardOne.id !== cardTwo.id) {
            setDisabled(true);
            if (cardOne.cardDuplicate === cardTwo.cardDuplicate) {
                cardOne.status = 'matched';
                cardTwo.status = 'matched';
                setPoints(prevPoints => prevPoints + 1);
                setCards([...cards]);
                setTimeout(() => resetTurn(), 1000);
                const gameStatus = checkIfGameIsFinished();
                setGameIsFinished(gameStatus);
            } else {
                setTimeout(() => resetTurn(), 1000);
            }
        }
    }, [cardOne, cardTwo]);

    /*
     * Updates game information according to changes in game status (gameIsFinished, turns, points):
     * If the game is not finished and the user has made at least 1 turn or
     * If the game is finished    
     */
    useEffect(() => {
        if (turns && !gameIsFinished) {
            setGameInfo(<div><span className='badge rounded-pill text-bg-secondary py-2 m-1'>Turns made: {turns}</span>
                <span className='badge rounded-pill text-bg-secondary py-2 m-1'>Matches collected: {points}</span></div>);
        } else if (turns && gameIsFinished) {
            setGameInfo(<p className='text-success bg-dark font-weight-bold'>Hooray, you won! Turns made in the game: {turns}</p>);
        }
    }, [gameIsFinished, turns, points])

    /*
     * Resets the game board with new cards;
     *   (1) Sets the loading to true and resets any error / existing cards;
     *   (2) Fetches the images
     *   (3) Updates the images to create a shuffledCards array of objects, where each card has id, cardDuplicate, status and imageSrc properties
     *   (4) Updates the cards with shuffledCards
     *   (5) Resets any game properties
     */
    const fetchImages = useCallback(async () => {
        setisLoading(true);
        setError(null);
        setCards([]);
        try {
            const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=8`);
            if (!response.ok) throw Error('Something went wrong!');
            const data = await response.json();
            const urls = data.map(dataRow => dataRow.url);
            const cardArray = [];
            for (let i = 0; i < 8; i++) {
                cardArray.push({ id: Math.random().toString(16), cardDuplicate: i, status: '', imageSrc: urls[i] }, { id: Math.random().toString(16), cardDuplicate: i, status: '', imageSrc: urls[i] });
            };
            const shuffledCards = cardArray.sort(() => Math.random() - 0.5);
            setDisabled(false);
            setCards(shuffledCards);
            setCardOne(null);
            setCardTwo(null);
            setTurns(0);
            setPoints(0);
            setGameInfo(initialGameInfo);
            setGameIsFinished(false);
        } catch (error) {
            setError(error.message);
        }
        setisLoading(false);
    }, []);

    /*
     * Executed when the DOM is loaded
     */
    useEffect(() => {
        fetchImages();
    }, [fetchImages]);

    /**
     * If the cards are not disabled, sets cards cardOne or cardTwo when they are clicked
     * @param {object} card 
     * @param {boolean} disabled 
     */
    const cardClickedHandler = (card, disabled) => {
        if (!disabled) cardOne ? setCardTwo(card) : setCardOne(card);
    }

    /**
     * Resets the turn by deselecting the cards, incrementing turns and removing the disabled attribute
     */
    const resetTurn = () => {
        setCardOne(null);
        setCardTwo(null);
        setTurns(prevTurn => prevTurn + 1);
        setDisabled(false);
    }

    /**
     * Checks if all cards have status: 'matched'
     * @returns {boolean}
     */
    const checkIfGameIsFinished = () => {
        return cards.every(card => card.status === 'matched');
    }

    let cardDeck;
    if (cards.length > 0) {
        cardDeck = cards.map((card, index) => {
            return <MemoryCard
                key={index}
                card={card}
                cardClickedHandler={cardClickedHandler}
                cardIsFlipped={card.id === cardOne?.id || card.id === cardTwo?.id || card.status === 'matched'}
                disabled={disabled}
            />;
        });
    }
    else if (error) {
        cardDeck = <p className='text-light'>{error}</p>;
    } else if (isLoading) {
        cardDeck = <div className='col'>
            <div className='spinner-border text-success text-center' role='status'>
                <span className='visually-hidden'>Loading the images, please wait...</span>
            </div>
        </div>;
    } else if (!isLoading && cards.length === 0 && !error) {
        cardDeck = <p className='text-light'>Found no images, come back later...</p>;
    }

    return <section className='container-fluid text-center py-2'>
        <div className='row pt-4'>
            <div className='col'>
                <button className='btn btn-dark' onClick={fetchImages}>Start new game</button>
            </div>
        </div>
        <div className='row py-2'>
            <div className='col'>
                {gameInfo}
            </div>
        </div>
        <div className='row'>
            <div className='col-12 col-md-2 col-xl-3 col-xxl-4'></div>
            <div className='col-12 col-md-8 col-xl-6 col-xxl-4'>
                <div className='row'>
                    {cardDeck}
                </div>
            </div>
            <div className='col-12 col-md-2 col-xl-3 col-xxl-4'></div>
        </div>
    </section>
}

export default GameBoard;