import style from './NewHeaderStyle.module.scss';
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

import NewsService from "../../services/NewsService";
import CityModal from "../modalwin/CityModal";
function NewHeader() {
    const [showVideo, setShowVideo] = useState(false);
    const [city, setCity] = useState(localStorage.getItem('city') || '');
    const [showModal, setShowModal] = useState(false);

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
            const response = await fetch('https://ipapi.co/json/'); // Можно заменить на другой сервис, например, ipstack
            const data = await response.json();
            const detectedCity = data.city;

            // Доступные города
            const availableCities = ['Сургут', 'Москва'];

            if (availableCities.includes(detectedCity)) {
                setCity(detectedCity);
                localStorage.setItem('city', detectedCity);
            } else {
                setShowModal(true);
            }
        } catch (error) {
            console.error('Ошибка при определении города:', error);
            setCity('Сургут'); // Устанавливаем город по умолчанию, если произошла ошибка
            localStorage.setItem('city', 'Сургут');
        }
    };

    const handleCityConfirm = (selectedCity) => {
        if (selectedCity) {
            setCity(selectedCity);
            localStorage.setItem('city', selectedCity);
        } else {
            // Если пользователь отказался, устанавливаем Сургут по умолчанию
            setCity('Сургут');
            localStorage.setItem('city', 'Сургут');
        }
        setShowModal(false);
    };

    return (
        <div className={style.main}>
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
                        <source src={`${process.env.REACT_APP_API_URL}/videos/hopefitness/video.mp4`} type="video/mp4" />
                    </video>
                )}
            </div>
            <div className={style.container}>
                <div className={style.leftpart}>
                    <img src="/files/header/logomain.svg" alt="" />
                    <div className={style.desc}>ФИТНЕС-КЛУБ <label>ПРЕМИУМ</label> КЛАССА</div>
                    <div className={style.product}>Неделя фитнеса по цене гостевого визита</div>
                    <div className={style.btn}>Узнать подробнее</div>
                </div>
                <div className={style.rightpart}>
                    <div className={style.board}>
                        <Link to='/allnews' className={style.btn}>О нас<div className={style.border}></div></Link>
                        <Link to='/zones' className={style.btn}>Зоны<div className={style.border}></div></Link>
                        <Link to='/vakansii' className={style.btn}>Программы<div className={style.border}></div></Link>
                        <Link to='/allnews' className={style.btn}>Тренеры<div className={style.border}></div></Link>
                        <Link to='/contacts' className={style.btn}>Клубная карта<div className={style.border}></div></Link>
                        <Link to='/vakansii' className={style.btn}>Галерея<div className={style.border}></div></Link>
                        <Link to='/vakansii' className={style.btn}>Контакты<div className={style.border}></div></Link>
                        <Link to='/vakansii' className={style.btn}>Личный кабинет<div className={style.border}></div></Link>
                    </div>
                    <div className={style.citySelector}>
                        <button onClick={() => setShowModal(true)}>Ваш город: {(city.length > 0)?city:'Сургут'}</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewHeader;