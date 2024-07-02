import './Stats.scss';

const Stats = ({...props}) => {
    let cssClasses = `stats`;

    if (props.className) {
        cssClasses += ` ${props.className}`;
    }

    return (
        <div className={cssClasses}>
            <span className="stats__review">Very Positive</span>
            <span className="stats__count">(193,563)</span>
        </div>
    )
}

export default Stats;