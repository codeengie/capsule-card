import './Tag.scss';

const Tags = ({tags}) => {
    let content = null;

    if (tags.length > 0) {
        content = tags.map((item, index) => <li key={index} className='tags__list-item'>{item}</li>);
    }

    return (
        <div className="tags">
            <ul className="tags__list">
                {content}
            </ul>
        </div>
    )
}

export default Tags;