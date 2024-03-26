const Input = (props) => {
    const {
        label="label",
        name="name",
        type="text",
        children=""
    } = props

    return (
        <div className="mb-3">
            <label className="text-md " htmlFor={name}>{label}</label> {children}
            <input required className="bg-slate-100 focus:bg-slate-50 mt-3 w-full px-3 py-2 block border border-slate-300 focus:border-slate-600 focus:outline-none rounded-lg" type={type} name={name}  />
        </div>
    )
}

export default Input