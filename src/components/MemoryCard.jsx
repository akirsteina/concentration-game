

import './MemoryCard.css';

const MemoryCard = ({ card, cardClickedHandler, cardIsFlipped, disabled }) => {
    return <div className={`col-3 p-1 p-lg-2 card-container text-center ${card.status === 'matched' ? 'matched' : ''}`}>
        <div className={`mx-auto card-inner-container shadow-sm ${cardIsFlipped ? 'flipped' : ''}`}>
            <div className='card-image-container front '>
                <img src={card.imageSrc} className='rounded card-image' alt='card front' />
            </div>
            <div className='card-image-container back'>
                <img
                    src='https://www.wallpaperboulevard.com/Images/product/navy-blue-lime-green-menagerie-animal-f-xpmb.jpg'
                    className='rounded card-image'
                    alt='card back'
                    onClick={() => cardClickedHandler(card, disabled)} />
            </div>
        </div>
    </div>
}

export default MemoryCard;




