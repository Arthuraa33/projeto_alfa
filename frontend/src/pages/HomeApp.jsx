import Menu from "../components/Menu";
import BannerApp from "../components/BannerApp";
import Footer from "../components/Footer";
import "../styles/HomeApp.css"

function HomeApp() {
    return (
        <div>
            <Menu/>
            <BannerApp/>
            <Footer/>
        </div>
    );
}

export default HomeApp;