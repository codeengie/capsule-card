import './Flag.scss';

const Flag = ({status = 'Wishlist', ...props}) => {
    let cssClasses = 'flag';

    if (props.className) {
        cssClasses += ` ${props.className}`;
    }

    return (
        <div className={cssClasses}>{status}</div>
    )
}

export default Flag;