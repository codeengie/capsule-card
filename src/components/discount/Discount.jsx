import './Discount.scss';

const Discount = ({discount, price, ...props}) => {
    let cssClasses = 'discount';
    let computedDiscount = null;

    if (props.className) {
        cssClasses += ` ${props.className}`;
    }

    // If a discount exists, compute the final price and include style modifier
    if (discount) {
        computedDiscount = `$${(price - (price * (discount / 100))).toFixed(2)}`;
        cssClasses += ' discount--sale';
    }

    return (
        <div className={cssClasses}>
            <span className="discount__percent">{`-${discount}%`}</span>
            <span className="discount__price">{`$${price}`}</span>
            <span className="discount__computed">{computedDiscount}</span>
        </div>
    )
}

export default Discount;