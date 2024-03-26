import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const Register = () => {
    const navigate = useNavigate();


    const [showPassword, setShowPassword] = useState(false)

    function handleRegister(e) {
        e.preventDefault()
        let name = e.target.name.value
        let image_url = e.target.image_url.value
        let email = e.target.email.value
        let password = e.target.password.value

        // https://sanbercode.com/assets_new/img/ava-2.png gambar

        axios.post('https://dev-example.sanbercloud.com/api/register', {name, image_url, email, password})
        .then(res => {
            navigate('/login')
        })

    }


    return (
        <div className="min-h-screen w-full flex justify-center items-center bg-slate-900">
            <div className="md:w-full w-3/4 max-w-xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                <form className="space-y-6" onSubmit={handleRegister}>
                    <h5 className="text-2xl font-bold text-gray-900 dark:text-white">Register</h5>
                    <div>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                        <input type="name" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"/>
                    </div>
                    <div>
                        <label htmlFor="image_url" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your image_url</label>
                        <input type="image_url" name="image_url" id="image_url" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"/>
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"/>
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                        <input type={showPassword === true ? 'text':'password'} name="password" id="password"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"/>
                        <div onClick={() => setShowPassword(!showPassword)} className="px-2 py-0.5 text-sm bg-slate-300 rounded-xl w-fit mt-2 cursor-pointer">show password</div>
                    </div>
                    
                    <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register your account</button>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Have an account ? <Link to="/login" className="text-blue-700 hover:underline dark:text-blue-500">Sign In</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register