import style from './RoomsBlock.module.scss';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import WriteModal from "../modalwin/WriteModal";
import PostResume from "../forms/PostResume";
import NewsService from "../../services/NewsService";

function RoomsBlock() {
    const [thisRoom, setThisRoom] = useState(0);
    const [list, setList] = useState([]);
    const [fade, setFade] = useState(true);
    const [totalRooms, setTotalRooms] = useState(0);
    const [data, setData] = useState('');
    const [activemodal, setActivemodal] = useState(false);

    const getZonesSlides = async () => {
        try {
            const { data } = await NewsService.getZonesSlides({ capter: 'hopefitness' });
            console.log(data)
            if (data) {
                // Сортируем данные по приоритету
                const sortedData = data.sort((a, b) => parseInt(b.priory, 10) - parseInt(a.priory, 10));
                // Фильтруем данные, убирая те, у которых нет имени и изображения
                console.log(sortedData)
                const filteredData = sortedData.filter(item => item.name && item.image);
                setList(filteredData);
                setTotalRooms(filteredData.length);
            }
        } catch (e) {
            console.error(e);
        }
    };

    useEffect(() => {
        getZonesSlides();
    }, []);

    // Автоматическая смена слайдов
    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 3000);

        return () => clearInterval(interval);
    }, [thisRoom, totalRooms]);

    const handleNext = () => {
        setFade(false); // Запускаем анимацию затухания
        setTimeout(() => {
            setThisRoom((prevRoom) => (prevRoom + 1) % totalRooms);
            setFade(true); // Запускаем анимацию проявления
        }, 300); // Задержка перед сменой слайда
    };

    const handlePrev = () => {
        setFade(false); // Запускаем анимацию затухания
        setTimeout(() => {
            setThisRoom((prevRoom) => (prevRoom === 0 ? totalRooms - 1 : prevRoom - 1));
            setFade(true); // Запускаем анимацию проявления
        }, 300); // Задержка перед сменой слайда
    };

    const handleDotClick = (index) => {
        setFade(false); // Запускаем анимацию затухания
        setTimeout(() => {
            setThisRoom(index);
            setFade(true); // Запускаем анимацию проявления
        }, 300); // Задержка перед сменой слайда
    };

    return (
        <div className={style.main}>
            <WriteModal
                activemodal={activemodal}
                setActivemodal={setActivemodal}
                data={<PostResume title={data} setActivemodal={setActivemodal} />}
                setData={setData}
            />

            <div className={style.container}>
                <div className={style.title}>
                    <div className={style.text}>Зоны фитнес клуба</div>
                </div>
                <div className={style.zones}>
                    {list.length > 0 && (
                        <div className={`${style.room} ${fade ? style.fadeIn : style.fadeOut}`}>
                            <div
                                className={style.backroom}
                                style={{
                                    backgroundImage: `url('${process.env.REACT_APP_API_URL}${list[thisRoom].image}')`,
                                }}
                            ></div>
                            <div className={style.descriptions}>
                                <div className={style.title}>{list[thisRoom]?.name || 'Название не указано'}</div>
                                <div className={style.desc}>{list[thisRoom]?.desc || 'Описание отсутствует'}</div>
                                <div className={style.btns}>
                                    <Link to='/zones' className={style.morenori} style={{ color: '#FFF' }}>
                                        ПОДРОБНЕЕ
                                    </Link>
                                    <div
                                        className={style.checked}
                                        onClick={() => {
                                            setActivemodal(true);
                                            setData(`${list[thisRoom]?.name || ''} - Записаться`);
                                        }}
                                    >
                                        ЗАПИСАТЬСЯ
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    <div className={style.prev} onClick={handlePrev}>
                        <i className="fa-solid fa-angles-left" />
                    </div>
                    <div className={style.next} onClick={handleNext}>
                        <i className="fa-solid fa-angles-right" />
                    </div>
                    <div className={style.dots}>
                        {list.map((_, index) => (
                            <span
                                key={index}
                                className={`${style.dot} ${index === thisRoom ? style.active : ''}`}
                                onClick={() => handleDotClick(index)}
                            ></span>
                        ))}
                    </div>
                </div>
            </div>
            <div className={style.more}>
                <div className={style.moreblock}>
                    <Link to='/zones' className={style.btn}>
                        <div className={style.next}></div>Все зоны
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default RoomsBlock;