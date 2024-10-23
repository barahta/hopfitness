import style from './styles/Main.module.scss'
import NewHeader from "../components/newheader/NewHeader";
import Footer from "../components/footer/Footer";
import ContactStrock from "../components/contactstrock/ContactStrock";
import ProductBlock from "../components/products/ProductBlock";
import Cosmos from "../components/cosmos/Cosmos";
import AboutParalax from "../components/newabout/AboutParalax";
import ZoneSlider from "../components/zones/ZoneSlider";
import RoomsBlock from "../components/zones/RoomsBlock";
import ProgramsSlider from "../components/zones/ProgramsSlider";
import AboutFitness from "../components/about/AboutFitness";

function Main () {


    return (
        <div className={style.bodymain}>
            <NewHeader />
            <ContactStrock />
            <ProductBlock />
            {/*<AboutFitness />*/}
            <Cosmos />
            <AboutParalax />
            {/*<ZonesBlock />*/}
            <ZoneSlider />
            <RoomsBlock />
            <ProgramsSlider />
            {/*<Carusel />*/}
            {/*<TwoBlocks />*/}
            {/*<Group />*/}
            {/*<NewAbout />*/}
            {/*<Actives />*/}
            {/*<NewsBlock />*/}
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