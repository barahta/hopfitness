import style from './NewHeaderStyle.module.scss';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import './lk.css'
import NewsService from "../../services/NewsService";
import CityModal from "../modalwin/CityModal";
import PostResume from "../forms/PostResume";
import WriteModal from "../modalwin/WriteModal";

function NewHeader() {
    const [showVideo, setShowVideo] = useState(false);
    const [city, setCity] = useState(localStorage.getItem('city') || '');
    const [showModal, setShowModal] = useState(false);
    const [showWidgetModal, setShowWidgetModal] = useState(false); // состояние для модального окна с виджетом

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowVideo(true);
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (!city) {
            fetchCityByIP();
        }
    }, []);

    const fetchCityByIP = async () => {
        try {
            const response = await fetch('https://ipapi.co/json/');
            const data = await response.json();
            const detectedCity = data.city;
            const availableCities = ['Сургут', 'Москва'];

            if (availableCities.includes(detectedCity)) {
                setCity(detectedCity);
                localStorage.setItem('city', detectedCity);
            } else {
                setShowModal(true);
            }
        } catch (error) {
            console.error('Ошибка при определении города:', error);
            setCity('Сургут');
            localStorage.setItem('city', 'Сургут');
        }
    };

    const handleCityConfirm = (selectedCity) => {
        if (selectedCity) {
            setCity(selectedCity);
            localStorage.setItem('city', selectedCity);
        } else {
            setCity('Сургут');
            localStorage.setItem('city', 'Сургут');
        }
        setShowModal(false);
    };
    const [data, setData] = useState('')
    const [activemodal, setActivemodal] = useState(false)
    useEffect(() => {
        // Создаем и добавляем скрипт в компонент
        const script = document.createElement('script');
        script.id = 'fitnesskit_personal';
        script.src = 'https://hope.fitnesskit-admin.ru/widget/mount/widget-personal.js';
        script.async = true;
        script.setAttribute('data-id', '1');
        script.setAttribute('data-server', 'hope');

        document.body.appendChild(script);

        return () => {
            // Удаляем скрипт при размонтировании компонента
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className={style.main}>

            <WriteModal activemodal={activemodal} setActivemodal={setActivemodal} data={<PostResume title={data}  setActivemodal={setActivemodal}/>} setData={setData} />


            {showModal && <CityModal defaultCity={city} onConfirm={handleCityConfirm} />}


            <div className={style.video}>
                {showVideo && (
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className={style.videoContent}
                    >
                        <source src={`/video/hopefitness/video.mp4`} type="video/mp4" />
                    </video>
                )}
            </div>
            <div className={style.container}>
                <div className={style.leftpart}>
                    <img src="/files/header/logomain.svg" alt="" />
                    <div className={style.desc}>ФИТНЕС-КЛУБ <label>ПРЕМИУМ</label> КЛАССА</div>
                    <div className={style.product}>Неделя фитнеса по цене гостевого визита</div>
                    <div className={style.btn} onClick={()=>{setActivemodal(true);setData('Неделя фитнеса по цене гостевого визита')}}>Узнать подробнее</div>
                </div>
                <div className={style.rightpart}>


                    <div className={style.board}>
                        <div className={style.btn} onClick={() => scrollToSection('aboutus')}>
                            О нас<div className={style.border}></div>
                        </div>
                        <Link to='/zones' className={style.btn}>Зоны<div className={style.border}></div></Link>
                        <Link to='/programs' className={style.btn}>Программы<div className={style.border}></div></Link>
                        <Link to='/treners' className={style.btn}>Тренеры<div className={style.border}></div></Link>
                        <Link to='/cards' className={style.btn}>Клубная карта<div className={style.border}></div></Link>
                        <Link to='/gallery' className={style.btn}>Галерея<div className={style.border}></div></Link>
                        <Link to='/contacts' className={style.btn}>Контакты<div className={style.border}></div></Link>
                        <a href="#fitnesskit_personal" className={style.btn} onClick={() => setShowWidgetModal(true)}>
                            Личный кабинет<div className={style.border}></div>
                        </a>
                    </div>
                    <div className={style.citySelector}>
                        <button onClick={() => setShowModal(true)}>Ваш город: {city || 'Сургут'}</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewHeader;