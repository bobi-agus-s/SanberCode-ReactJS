import DefaultLayout from "../component/Layouts/DefaultLayout";
import { GlobalProvider } from "../context/GlobalContext";
import Header from "../component/Fragments/Header/Header";
import Footer from "../component/Fragments/Footer/Footer";
import JobVacancyMain from "../component/Fragments/JobVacancy/JobVacancyMain";

const JobVacancy = () => {
    return (
        <GlobalProvider>
            <DefaultLayout>
                <Header>
                    <Header.Navbar />
                </Header>

                <JobVacancyMain />
                
                <Footer />
            </DefaultLayout>
        </GlobalProvider>
    );
};

export default JobVacancy;
