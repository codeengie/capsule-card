import './CapsuleCard.scss';
import Discount from "../discount/Discount.jsx";
import Stats from "../stats/Stats.jsx";
import Tags from "../tags/Tags.jsx";

const CapsuleCard = (props) => {
    return (
        <div className="capsule-card">
            <a className="capsule-card__link" href="#">
                <img className="capsule-card__poster" src={`/images/${props.data.media.poster}`} alt="Main capsule card image"/>
            </a>
            <div className="capsule-card__content">
                {/* Display a screenshot or video */}
                <div className="capsule-card__media">
                    <video className="capsule-card__video" autoPlay loop>
                        <source src={`/videos/${props.data.media.video}`} type="video/webm"/>
                    </video>
                </div>
                <div className="capsule-card__info">
                    <h1 className="capsule-card__title">{props.data.title}</h1>
                    <Stats className="capsule-card__stats" reviews={props.data.reviews}/>
                    <Tags className="capsule-card__tags" tags={props.data.tags}/>
                    <button className="button capsule-card__button">Add to Cart</button>
                </div>
            </div>
            <Discount className="capsule-card__discount" discount={props.data.discount} price={props.data.price}/>
        </div>
    )
}

export default CapsuleCard;