import './CapsuleCard.scss';
import CapsuleVideo from '../../assets/videos/hogwarts-legacy.webm'
import Discount from "../discount/Discount.jsx";

const CapsuleCard = () => {
    return (
        <div className="capsule-card">
            <a className="capsule-card__link" href="#">
                <img className="capsule-card__poster" src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/990080/hero_capsule.jpg?t=1717689083" alt="Main capsule card image"/>
            </a>
            <div className="capsule-card__content">
                {/* Display a screenshot or video */}
                <div className="capsule-card__media">
                    <video className="capsule-card__video" autoPlay loop>
                        <source src={CapsuleVideo} type="video/webm"/>
                    </video>
                </div>
                <div className="capsule-card__info">
                    <h1 className="capsule-card__title">Hogwarts Legacy</h1>
                    <div className="capsule-card__stat">
                        <span className="capsule-card__review">Very Positive</span>
                        <span className="capsule-card__count">(193,563)</span>
                    </div>
                    <button>Add to Cart</button>
                </div>
            </div>
            <Discount className="capsule-card__discount"/>
        </div>
    )
}

export default CapsuleCard;