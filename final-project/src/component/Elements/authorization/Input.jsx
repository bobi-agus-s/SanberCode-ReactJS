const Input = ({children}) => {
    return (
        <div className="mb-5">
            {children}
        </div>
    )
}

const Text = ({name="", type="text"}) => {
    return (
        <>
            <label htmlFor={name} className="block mb-2 text-sm font-medium text-gray-900 capitalize">{name}</label>
            <input type={type} id={name} name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
        </>
    )
}

const TextValue = (props) => {
    const {
        name="",
        type="text",
        value="",
        onChange = () => {}
    } = props
    return (
        <>
            <label htmlFor={name} className="block mb-2 text-sm font-medium text-gray-900 capitalize">{name}</label>
            <input value={value} onChange={onChange} type={type} id={name} name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
        </>
    )
}

const TextArea = ({name=""}) => {
    return (
        <>
            <label htmlFor={name} className="block mb-2 text-sm font-medium text-gray-900 capitalize">{name}</label>
            <textarea id={name} name={name} rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "></textarea>
        </>
    )
}

const TextAreaValue = (props) => {
    const {
        name="",
        value="",
        onChange = () => {}
    } = props
    
    return (
        <>
            <label htmlFor={name} className="block mb-2 text-sm font-medium text-gray-900 capitalize">{name}</label>
            <textarea onChange={onChange} value={value} id={name} name={name} rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "></textarea>
        </>
    )
}

const Select = ({name="", children}) => {
    return (
        <>
            <label htmlFor={name} className="block mb-2 text-sm font-medium text-gray-900 capitalize">{name}</label>
            <select id={name} name={name} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                {children}
            </select>
        </>
    )
}


Input.Text = Text 
Input.TextValue = TextValue
Input.TextArea = TextArea 
Input.TextAreaValue = TextAreaValue
Input.Select = Select 

export default Input