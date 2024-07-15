import './Stats.scss';

const Stats = ({reviews, ...props}) => {
    let cssClasses = 'stats';
    const prettifyCount = `(${reviews['count'].toLocaleString('en-US')})`;
    let content = 'No user reviews';

    if (props.className) {
        cssClasses += ` ${props.className}`;
    }


    if (reviews.count !== 0) {
        content = <>
            <span className="stats__review">{reviews.summary}</span>
            <span className="stats__count">{prettifyCount}</span>
        </>
    }

    return (
        <div className={cssClasses}>
            {content}
        </div>
    )
}

export default Stats;