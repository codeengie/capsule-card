import './CapsuleCard.scss';
import Discount from "../discount/Discount.jsx";
import Stats from "../stats/Stats.jsx";
import Tags from "../tags/Tags.jsx";
import Flag from "../flag/Flag.jsx";

const CapsuleCard = (props) => {
    // Set flag status
    const setFlag = (id) => {
        const owned = props.udata.owned.includes(id);
        const wishlist = props.udata.wishlist.includes(id);
        let status = undefined; // Setting `undefined` so default prop value is used

        // I know I can use Ternary Operator but this looks more readable especially if logic gets complicated
        if (owned) status = "Owned";
        if (wishlist) status = "On Wishlist";
        return status;
    }

    return (
        <div className="capsule-card">
            <Flag className="capsule-card__flag" status={setFlag(props.gdata.gid)}/>
            <a className="capsule-card__link" href="#">
                <img className="capsule-card__poster" src={`/images/${props.gdata.media.poster}`} alt="Main capsule card image"/>
            </a>
            <div className="capsule-card__content">
                {/* Display a screenshot or video */}
                <div className="capsule-card__media">
                    <video className="capsule-card__video" autoPlay loop>
                        <source src={`/videos/${props.gdata.media.video}`} type="video/webm"/>
                    </video>
                </div>
                <div className="capsule-card__info">
                    <h1 className="capsule-card__title">{props.gdata.title}</h1>
                    <Stats className="capsule-card__stats" reviews={props.gdata.reviews}/>
                    <Tags className="capsule-card__tags" tags={props.gdata.tags}/>
                    <button className="button capsule-card__button">Add to Cart</button>
                </div>
            </div>
            <Discount className="capsule-card__discount" discount={props.gdata.discount} price={props.gdata.price}/>
        </div>
    )
}

export default CapsuleCard;