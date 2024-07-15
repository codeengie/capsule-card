import './Flag.scss';

const Flag = ({...props}) => {
    let cssClasses = 'flag';
    let content = 'On Wishlist';

    if (props.className) {
        cssClasses += ` ${props.className}`;
    }

    // There should be some logic here where it changes the copy if the `--owned` modifier is detected

    return (
        <div className={cssClasses}>{content}</div>
    )
}

export default Flag;