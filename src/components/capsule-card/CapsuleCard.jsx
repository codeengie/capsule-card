import { useRef } from 'react';
import './CapsuleCard.scss';
import Discount from '../discount/Discount.jsx';
import Stats from '../stats/Stats.jsx';
import Tags from '../tags/Tags.jsx';
import Flag from '../flag/Flag.jsx';
import Button from "../button/Button.jsx";

const CapsuleCard = (props) => {
    let videoRef = useRef(null);

    // Set flag status
    const setFlagStatus = (id) => {
        const owned = props.udata.owned.includes(id);
        const wishlist = props.udata.wishlist.includes(id);
        let status = undefined; // Setting `undefined` so default prop value is used

        // I know I can use a Ternary Operator but this appears easier to read especially if logic gets complex
        if (owned) status = 'Owned';
        if (wishlist) status = 'On Wishlist';
        return status;
    }

    // Function to handle video play on mouse over
    const handleVideoPlay = () => {
        videoRef.current.play();
    }

    // Function to handle video reset on mouse out
    const handleVideoReset = () => {
        videoRef.current.pause(); // Pause the video
        videoRef.current.currentTime = 0; // Reset playback position to the start
    }

    const handleAddToCart = () => {
        console.log('Add To Cart');
    }

    return (
        <div className="capsule-card" onMouseOver={handleVideoPlay} onMouseOut={handleVideoReset}>
            <Flag className="capsule-card__flag" status={setFlagStatus(props.gdata.gid)}/>
            <a className="capsule-card__link" href="#">
                <img className="capsule-card__poster" src={`${import.meta.env.BASE_URL}images/${props.gdata.media.poster}`} alt="Main capsule card image"/>
            </a>
            <div className="capsule-card__content">
                {/* Display a screenshot or video */}
                <div className="capsule-card__media">
                    <video className="capsule-card__video" ref={videoRef}>
                        <source src={`${import.meta.env.BASE_URL}videos/${props.gdata.media.video}`} type="video/webm"/>
                    </video>
                </div>
                <div className="capsule-card__info">
                    <h1 className="capsule-card__title">{props.gdata.title}</h1>
                    <Stats className="capsule-card__stats" reviews={props.gdata.reviews}/>
                    <Tags className="capsule-card__tags" tags={props.gdata.tags}/>
                    <Button className="capsule-card__button" onClick={handleAddToCart}>Add To Cart</Button>
                </div>
            </div>
            <Discount className="capsule-card__discount" discount={props.gdata.discount} price={props.gdata.price}/>
        </div>
    )
}

export default CapsuleCard;