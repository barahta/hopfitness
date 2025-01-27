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
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import NewsBlock from "../components/news/NewsBlock";
function Main () {

    const location = useLocation();

    useEffect(() => {
        if (location.state?.scrollTo) {
            const section = document.getElementById(location.state.scrollTo);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);
    return (
        <div className={style.bodymain}>
            <NewHeader />
            <RoomsBlock />
            <ContactStrock />
            <ProductBlock />
            <Cosmos />
            <AboutParalax />
            <ZoneSlider />
            <ProgramsSlider />
            <NewsBlock />
            <Footer /><script id="fitnesskit_lesson" data-id="2" data-server="hope" src="https://hope.fitnesskit-admin.ru/widget/mount/widget-lesson.js" async > </script>




        </div>
    )
}

export default Main