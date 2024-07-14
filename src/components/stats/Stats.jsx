import './Stats.scss';

const Stats = ({reviews, ...props}) => {
    let cssClasses = `stats`;
    const prettifyCount = `(${reviews['count'].toLocaleString('en-US')})`;

    if (props.className) {
        cssClasses += ` ${props.className}`;
    }

    return (
        <div className={cssClasses}>
            <span className="stats__review">{reviews.summary}</span>
            <span className="stats__count">{prettifyCount}</span>
        </div>
    )
}

export default Stats;