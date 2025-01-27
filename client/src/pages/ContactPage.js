import style from './styles/ContactsPage.module.scss'
import Footer from "../components/footer/Footer";
import SmallHeader from "../components/newheader/SmallHeader";
import {useEffect, useRef, useState} from "react";
import WriteModal from "../components/modalwin/WriteModal";
import PostResume from "../components/forms/PostResume";
import {Link} from "react-router-dom";
import SliderPrograms from "../components/programs/SliderPrograms";
import CardBlock from "../components/cards/CardBlock";
import GalaryList from "../components/galary/GalaryList";
import MyMap from "../components/map/Map";

function ContactPage (){

    const [activemodal, setActivemodal] = useState(false);
    const [data, setData] = useState('');
    const makeadress = {
        name: 'Сургут',
        phone: '8(499)290-13-29',
        adress: 'Республики 65/1',
        email: 'info@hopefitness.ru',
        socialys: [
            { name: 'vk', url: 'https://vk.com/' },
            { name: 'telegram', url: 'https://vk.com/telegram' },
            { name: 'whatsapp', url: 'https://vk.com/whatsapp' }
        ]
    }



    return (
        <div className={style.bodymain}>
            <WriteModal activemodal={activemodal} setActivemodal={setActivemodal} data={<PostResume man={data} setActivemodal={setActivemodal} />} setData={setData} />
            <SmallHeader />

            <div className={style.contacts}>
                <div className={style.ontheleft}>
                    <div className={style.container50}>
                        <div className={style.strock}>адрес</div>
                        <div className={style.strock}>{makeadress.name}</div>
                        <div className={style.strock}>{makeadress.adress}</div>
                    </div>
                </div>
                <div className={style.ontheright}>
                    <div className={style.container50}>
                        <div className={style.strock}>Контакты</div>
                        <div className={style.strock}>{makeadress.phone}</div>
                        <div className={style.strock}>{makeadress.email}</div>
                    </div>
                </div>
            </div>
            <MyMap />
            <Footer />
        </div>
    );
}

export default ContactPage;