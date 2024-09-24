import style from './NewHeaderStyle.module.scss';
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

import NewsService from "../../services/NewsService";
function NewHeader() {
    const [showVideo, setShowVideo] = useState(false);

    // const allViews = async () => {
    //     try {
    //         const {data} = await NewsService.viewPost()
    //         if(data){
    //             console.log(data)
    //         }
    //     }catch (e) {
    //         console.log(e)
    //     }
    // }

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowVideo(true);
        }, 500);
        // allViews()
        return () => clearTimeout(timer);
    }, []);
    return (
        <div className={style.main}>
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
                    <img src="/files/header/logomain.svg" alt=""/>
                    <div className={style.desc}>ФИТНЕС-КЛУБ <label>ПРЕМИУМ</label>  КЛАССА</div>
                    <div className={style.product}>Неделя фитнеса по цене гостевого визита</div>
                    <div className={style.btn}>Узнать подробнее</div>
                </div>
                <div className={style.rightpart}>
                    <div className={style.board}>
                        <Link to='/allnews' className={style.btn}>О нас<div className={style.border}></div></Link>
                        <Link to='/contacts' className={style.btn}>Зоны<div className={style.border}></div></Link>
                        <Link to='/vakansii' className={style.btn}>Программы<div className={style.border}></div></Link>
                        <Link to='/allnews' className={style.btn}>Тренеры<div className={style.border}></div></Link>
                        <Link to='/contacts' className={style.btn}>Клубная карта<div className={style.border}></div></Link>
                        <Link to='/vakansii' className={style.btn}>Галерея<div className={style.border}></div></Link>
                        <Link to='/vakansii' className={style.btn}>Контакты<div className={style.border}></div></Link>
                        <Link to='/vakansii' className={style.btn}>Личный кабинет<div className={style.border}></div></Link>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default NewHeader;