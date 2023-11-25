const Button = (props) => {
    const {value} = props
    return(
        <button className="btn w-full bg-black border-none font-bold">{value}</button>
    )
}

export default Button;