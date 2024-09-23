import { useEffect, useRef, useState } from "react";
import style from './styles/ContactsStyle.module.scss';
import TwoBlocks from "../components/animation/TwoBlocks";
import Footer from "../components/footer/Footer";
import SmallHeader from "../components/newheader/SmallHeader";
import MyMap from "../components/map/Map";
import WriteModal from "../components/modalwin/WriteModal";
import PostContact from "../components/forms/PostContact";
import {useMessage} from "../hooks/message.hook";

function Contacts() {
    const [activemodal, setActivemodal] = useState(false);
    const [data, setData] = useState('');

    const people = [
        {
            photo: '1.png',
            firstname: 'Иван',
            secondname: 'Иванович',
            lastname: 'Иванов',
            email: 'mail@mail.ru',
            departament: 'Omedia',
            position: 'Генеральный директор'
        },
        {
            photo: '2.png',
            firstname: 'Иван',
            secondname: 'Иванович',
            lastname: 'Иванов',
            email: 'mail@mail.ru',
            departament: 'Omedia',
            position: 'Генеральный директор'
        },
        {
            photo: '3.png',
            firstname: 'Иван',
            secondname: 'Иванович',
            lastname: 'Иванов',
            email: 'mail@mail.ru',
            departament: 'Omedia',
            position: 'Генеральный директор'
        },
        {
            photo: '4.png',
            firstname: 'Иван',
            secondname: 'Иванович',
            lastname: 'Иванов',
            email: 'mail@mail.ru',
            departament: 'Omedia',
            position: 'Генеральный директор'
        },
        {
            photo: '5.png',
            firstname: 'Иван',
            secondname: 'Иванович',
            lastname: 'Иванов',
            email: 'mail@mail.ru',
            departament: 'Omedia',
            position: 'Генеральный директор'
        },
        {
            photo: '6.png',
            firstname: 'Иван',
            secondname: 'Иванович',
            lastname: 'Иванов',
            email: 'mail@mail.ru',
            departament: 'Omedia',
            position: 'Генеральный директор'
        },
        {
            photo: '7.png',
            firstname: 'Иван',
            secondname: 'Иванович',
            lastname: 'Иванов',
            email: 'mail@mail.ru',
            departament: 'Omedia',
            position: 'Генеральный директор'
        }
    ];

    return (
        <div className={style.bodymain}>
            <WriteModal activemodal={activemodal} setActivemodal={setActivemodal} data={<PostContact man={data}  setActivemodal={setActivemodal}/>} setData={setData} />
            <SmallHeader />
            <TwoBlocks />
            <div className={style.listpersonal}>
                <div className={style.title}>КОНТАКТЫ</div>
                <div className={style.list}>
                    {people.map((man, index) => (
                        <div
                            className={style.blockman}
                            key={index}
                            // ref={(el) => blockRefs.current[index] = el}
                        >
                            <div className={style.photo} style={(man.photo.length > 0)?{backgroundImage: `url('files/mans/${man.photo}')`}:{}}></div>
                            <div className={style.fio}>
                                <div className={style.name}>{man.firstname}</div>
                                <div className={style.name}>{man.secondname}</div>
                                <div className={style.name}>{man.lastname}</div>
                            </div>
                            <div className={style.dev}>{man.position}</div>
                            <div className={style.btncontact} onClick={() => {setActivemodal(true);setData(man)}}>Написать</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className={style.contacts}>
                <div className={style.ontheleft}>
                    <div className={style.container50}>
                        <div className={style.strock}>адрес</div>
                        <div className={style.strock}>628403, Ханты-Мансийский автономный округ,</div>
                        <div className={style.strock}>г. Сургут, ул. 30 лет Победы 27/2</div>
                    </div>
                </div>
                <div className={style.ontheright}>
                    <div className={style.container50}>
                        <div className={style.strock}>Контакты</div>
                        <div className={style.strock}>+7 (346) 222-12-11</div>
                        <div className={style.strock}>mail@gk-omedia.ru</div>
                    </div>
                </div>
            </div>
            <MyMap />
            <Footer />
        </div>
    );
}

export default Contacts;