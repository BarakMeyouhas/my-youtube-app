import MainRoute from "../../Routing/MainRoute/MainRoute";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Home from "../Home/Home";
import YouTube from "../YouTube/YouTube";
import "./MainLayout.css";
import Menu from "../Menu/Menu"

function MainLayout(): JSX.Element {
    return (
        <div className="MainLayout">
        <header>
            <Header />
        </header>
        <aside>
            <Menu />
        </aside>
        <main>
            <MainRoute />
        </main>
        <footer>
            <Footer />
        </footer>
        </div>
    );
}

export default MainLayout;
