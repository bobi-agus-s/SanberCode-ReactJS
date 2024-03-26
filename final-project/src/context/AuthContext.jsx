import Cookies from "js-cookie"
import { createContext } from "react"
import { Navigate } from "react-router-dom"

export const AuthContext = createContext()
export const AuthProvider = (props) => {
    if (Cookies.get('token') !== undefined) {
        return props.children
    } else if (Cookies.get('token') === undefined) {
        return <Navigate to={'/login'} />
    }
}