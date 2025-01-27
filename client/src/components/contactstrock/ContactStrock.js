import React, { useRef, useEffect, useState } from 'react';
import style from './ContactStrockStyle.module.scss';
import PostResume from "../forms/PostResume";
import WriteModal from "../modalwin/WriteModal";
import NewsService from "../../services/NewsService";

function ContactStrock() {
    const containerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [city, setCity] = useState(localStorage.getItem('city') || 'Сургут');

    const [allCity, setAllCity] = useState([])
    const [activemodal, setActivemodal] = useState(false);
    const [data, setData] = useState('');

    const [newphone, setNewPhone] = useState('')
    const [phones, setPhones] = useState([])
    const [newadress, setNewAdress] = useState('')
    const [adresses, setAdresses] = useState([])
    const [newaemail, setNewEmail] = useState('')
    const [emails, setEmails] = useState([])
    const [mapW, setMapW] = useState('')
    const [mapH, setMapH] = useState('')
    const [vk, setVK] = useState('')
    const [ok, setOK] = useState('')
    const [instagram, setInstagram] = useState('')
    const [telegram, setTelegram] = useState('')
    const [youtube, setYoutube] = useState('')

    const makeadress = [
        {
            name: 'Сургут',
            phone: '8(499)290-13-29',
            adress: 'Республики 65/1',
            email: 'info@hopefitness.ru',
            socialys: [
                { name: 'vk', url: 'https://vk.com/' },
                { name: 'telegram', url: 'https://vk.com/telegram' },
                { name: 'whatsapp', url: 'https://vk.com/whatsapp' }
            ]
        },
        {
            name: 'Москва',
            phone: '8(925)085-94-44',
            adress: 'Нижняя Красносельская ул., 35 строение 23',
            email: 'studio@hopefitness.ru',
            socialys: [
                { name: 'vk', url: 'https://vk.com/' },
                { name: 'telegram', url: 'https://vk.com/telegram' },
                { name: 'whatsapp', url: 'https://vk.com/whatsapp' }
            ]
        }
    ];

    const [adressdata, setAdressdata] = useState(
        makeadress.find((item) => item.name === city) || makeadress[0]
    );

    // Обновляем данные, когда изменяется город
    useEffect(() => {
        const updateCity = () => {
            const newCity = localStorage.getItem('city');
            if (newCity && newCity !== city) {
                setCity(newCity);
            }
        };

        window.addEventListener('storage', updateCity);

        // Для случаев, когда город меняется в той же вкладке
        const originalSetItem = localStorage.setItem;
        localStorage.setItem = function (key, value) {
            originalSetItem.apply(this, arguments);
            if (key === 'city') {
                updateCity();
            }
        };

        return () => {
            window.removeEventListener('storage', updateCity);
            localStorage.setItem = originalSetItem;
        };
    }, [city]);

    useEffect(() => {
        const selectedAddress = makeadress.find((item) => item.name === city);
        if (selectedAddress) {
            setAdressdata(selectedAddress);
        }
    }, [city]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

    const loadContacts = () => {
        const thisContact = allCity.find(cityObj => cityObj.city === city)
        if(thisContact){
            setPhones(thisContact.phone)
            setAdresses(thisContact.adress)
            setEmails(thisContact.email)
            setMapW(thisContact.mapw)
            setMapH(thisContact.maph)
            setVK(thisContact.vk)
            setOK(thisContact.ok)
            setInstagram(thisContact.instagram)
            setTelegram(thisContact.telegram)
            setYoutube(thisContact.youtube)
        }

    }

    const getCities = async () => {
        try{
            const {data} = await NewsService.getCities({capter: 'hopefitness'})
            console.log(data)
            setAllCity(data)
        }catch(e){
            console.log(e)
        }
    }

    useEffect(()=>{
        getCities()
    }, [activemodal])

    useEffect(()=>{
        loadContacts()
    }, [city])

    return (
        <div className={style.main}>
            <WriteModal activemodal={activemodal} setActivemodal={setActivemodal} data={<PostResume man={data} setActivemodal={setActivemodal} />} setData={setData} />

            <div
                className={`${style.container} ${isVisible ? style.fadeIn : ''}`}
                ref={containerRef}
            >
                <div className={style.start}>
                    <img src="files/header/logomain.svg" alt="" />
                </div>
                <div className={style.elem}>
                    <div className={style.left}>
                        <i className="fa-solid fa-mobile-screen-button" />
                    </div>
                    <div className={style.right}>
                        <p className={style.title}>ПОЗВОНИТЬ</p>
                        <p className={style.phone}>{adressdata.phone}</p>
                    </div>
                </div>
                <div className={style.elem}>
                    <div className={style.left}>
                        <i className="fa-regular fa-map" />
                    </div>
                    <div className={style.right}>
                        <p className={style.title}>АДРЕС</p>
                        <p className={style.phone}>{adressdata.name}, {adressdata.adress}</p>
                    </div>
                </div>
                <div className={style.elem}>
                    <div className={style.left}>
                        <i className="fa-solid fa-envelope-open-text" />
                    </div>
                    <div className={style.right}>
                        <p className={style.title}>EMAIL</p>
                        <p className={style.phone}>{adressdata.email}</p>
                    </div>
                </div>
                <div className={style.next}>
                    <div className={style.up}>
                        {adressdata.socialys.map((social, index) => (
                            <a href={social.url} key={index} target="_blank" rel="noopener noreferrer" style={{color: '#FFFFFF'}}>
                                <i className={`fa-brands fa-${social.name}`} />
                            </a>
                        ))}
                    </div>
                    <div className={style.down} onClick={()=>setActivemodal(true)}>Пробное занятие</div>
                </div>
            </div>
        </div>
    );
}

export default ContactStrock;