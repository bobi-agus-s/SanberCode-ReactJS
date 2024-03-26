import DefaultLayout from "../component/Layouts/DefaultLayout";
import { GlobalProvider } from "../context/GlobalContext";
import Header from "../component/Fragments/Header/Header";
import Main from "../component/Fragments/Main/Main";
import Footer from "../component/Fragments/Footer/Footer";

const Home = () => {
    return (
        <GlobalProvider>
            <DefaultLayout>
                <Header>
                    <Header.Navbar />
                    <Header.Hero />
                </Header>
                <Main />
                <Footer />
            </DefaultLayout>
        </GlobalProvider>
    );
};

export default Home;
