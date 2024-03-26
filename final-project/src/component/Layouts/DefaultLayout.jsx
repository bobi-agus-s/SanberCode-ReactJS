const DefaultLayout = (props) => {

    const {children} = props

    return (
        <div className="bg-slate-900 min-h-screen max-w-full text-white">
            {children}
        </div>
    )
}

export default DefaultLayout