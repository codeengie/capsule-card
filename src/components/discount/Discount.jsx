import './Discount.scss';

const Discount = ({...props}) => {
    let cssClasses = `discount discount--sale`;

    if (props.className) {
        cssClasses += ` ${props.className}`;
    }

    return (
        <div className={cssClasses}>
            <span className="discount__percent">-60%</span>
            <span className="discount__price">$59.99</span>
            <span className="discount__computed">$23.99</span>
        </div>
    )
}

export default Discount;