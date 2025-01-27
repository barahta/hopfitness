import style from './styles/GalleryPage.module.scss'
import Footer from "../components/footer/Footer";
import SmallHeader from "../components/newheader/SmallHeader";
import {useEffect, useRef, useState} from "react";
import WriteModal from "../components/modalwin/WriteModal";
import PostResume from "../components/forms/PostResume";
import {Link} from "react-router-dom";
import SliderPrograms from "../components/programs/SliderPrograms";
import CardBlock from "../components/cards/CardBlock";
import GalaryList from "../components/galary/GalaryList";

function GalleryPage (){

    const [activemodal, setActivemodal] = useState(false);
    const [data, setData] = useState('');



    return (
        <div className={style.bodymain}>
            <WriteModal activemodal={activemodal} setActivemodal={setActivemodal} data={<PostResume man={data} setActivemodal={setActivemodal} />} setData={setData} />
            <SmallHeader />
            <div className={style.page}>
                <div className={style.container}>
                    <div className={style.title}>Галерея</div>
                    <div className={style.block}>
                        <GalaryList />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default GalleryPage;