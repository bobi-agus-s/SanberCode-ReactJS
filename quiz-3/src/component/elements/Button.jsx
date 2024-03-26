const Button = (props) => {
    const {
        type="button", 
        variant="",
        children
    } = props
    

    return (
        <button className={`text-white px-3 py-2 rounded-md ${variant}`} type={type}>
            {children}
        </button>
    )

}

export default Button