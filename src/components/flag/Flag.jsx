import './Flag.scss';

const Flag = ({status, ...props}) => {
    let cssClasses = 'flag';

    if (props.className) {
        cssClasses += ` ${props.className}`;
    }

    if (status) {
        return <div className={cssClasses}>{status}</div>;
    }
}

export default Flag;