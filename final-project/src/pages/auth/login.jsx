import axios from "axios"
import Cookies from "js-cookie"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const Login = () => {
    const navigate = useNavigate()

    const [showPassword, setShowPassword] = useState(false)


    function handleLogin(e) {
        e.preventDefault()
        let email = e.target.email.value
        let password = e.target.password.value
        axios.post('https://dev-example.sanbercloud.com/api/login', { email, password })
            .then(res => {
                let {token} = res.data
                Cookies.set('token', token, {expires: 1})
                navigate('/dashboard')
                // window.location.href = "/dashboard"
            })
    }

    return (
        <div className="min-h-screen w-full flex justify-center items-center bg-slate-900">
            <div className="md:w-full w-3/4 max-w-xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                <form className="space-y-6" onSubmit={handleLogin}>
                    <h5 className="text-2xl font-bold text-gray-900 dark:text-white">Sign in to our platform</h5>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                        <input type={showPassword === true ? 'text':'password'} name="password" id="password"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                        <div onClick={() => setShowPassword(!showPassword)} className="px-2 py-0.5 text-sm bg-slate-300 rounded-xl w-fit mt-2 cursor-pointer">show password</div>
                    </div>
                    
                    <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Not registered? <Link to="/register" className="text-blue-700 hover:underline dark:text-blue-500">Create account</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login