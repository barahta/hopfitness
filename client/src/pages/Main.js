import style from './styles/Main.module.scss'
import HeaderMain from "../components/header/HeaderMain";
import AboutUs from "../components/about/AboutUs";
import NewsBlock from "../components/news/NewsBlock";
import Projects from "../components/projects/Projects";
import NewHeader from "../components/newheader/NewHeader";
import TwoBlocks from "../components/animation/TwoBlocks";
import Group from "../components/groupcompany/Group";
import NewAbout from "../components/newabout/NewAbout";
import Actives from "../components/activeholding/Actives";
import Footer from "../components/footer/Footer";
import {useEffect} from "react";
import {useLocation} from "react-router-dom";
import ContactStrock from "../components/contactstrock/ContactStrock";
import Carusel from "../components/contactstrock/Carusel";
import ProductBlock from "../components/products/ProductBlock";
import AboutFitness from "../components/about/AboutFitness";
import Cosmos from "../components/cosmos/Cosmos";

function Main () {


    return (
        <div className={style.bodymain}>
            <NewHeader />
            <ContactStrock />
            <ProductBlock />
            <AboutFitness />
            <Cosmos />
            {/*<Carusel />*/}
            <TwoBlocks />
            <Group />
            <NewAbout />
            <Actives />
            <NewsBlock />
            <Footer />
            {/*<HeaderMain />*/}
            {/*<div className={style.blockvideo}>*/}
            {/*    <video autoPlay="autoplay" muted="muted" loop="loop" playsInline="">*/}
            {/*    <source src="/files/header/intro.mp4" type="video/mp4"/>*/}
            {/*</video>*/}

            {/*</div>*/}
            {/*<AboutUs />*/}
            {/*<Projects />*/}
            {/*<NewsBlock />*/}


        </div>
    )
}

export default Main