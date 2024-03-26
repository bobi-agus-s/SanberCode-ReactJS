const Button = (props) => {
    let {
        id="",
        classname ="bg-primary hover:bg-h-primary",
        type = "button",
        onClick = () => {},
        children
    } = props

    return (
        <button 
            onClick={onClick}
            id={id} 
            type={type}
            className={`py-3 px-10 min-w-32 text-lg font-header text-center text-white rounded-full duration-300 ${classname}`}>
                    {children}
        </button>
    )
}

 export default Button