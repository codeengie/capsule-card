import './Button.scss';

const Button = ({children, ...props}) => {
    props.className = props.className ? `${props.className} button` : 'button';

    return (
        <button {...props}>{children}</button>
    )
}

export default Button;