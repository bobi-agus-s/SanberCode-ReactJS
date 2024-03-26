import Header from "./../Fragments/Authorization/Header"
import Sidebar from "./../Fragments/Authorization/Sidebar"
import Footer from "./../Fragments/Authorization/Footer"
import { AuthProvider } from "./../../context/AuthContext";


const DashboardLayout = (props) => {

    const {children} = props

    return (
        <AuthProvider>
            <Header>
                <Header.Navbar />
            </Header>
            <Sidebar />
            <div className="p-4 sm:ml-64 mb-24">
                <div className="p-4 rounded-lg dark mt-14">
                    {children}
                </div>
            </div>
            <Footer />
        </AuthProvider>
    )
}

export default DashboardLayout