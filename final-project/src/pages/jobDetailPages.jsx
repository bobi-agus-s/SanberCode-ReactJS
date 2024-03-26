import DefaultLayout from "../component/Layouts/DefaultLayout";
import { GlobalProvider } from "../context/GlobalContext";
import Header from "../component/Fragments/Header/Header";
import Footer from "../component/Fragments/Footer/Footer";
import JobDetail from "./../component/Fragments/JobDetail";

const JobDetailPages = () => {
    return (
        <GlobalProvider>
            <DefaultLayout>
                <Header>
                    <Header.Navbar />
                </Header>

                <JobDetail />
                
                <Footer />
            </DefaultLayout>
        </GlobalProvider>
    );
};

export default JobDetailPages;
