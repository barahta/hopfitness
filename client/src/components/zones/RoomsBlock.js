import style from './RoomsBlock.module.scss';
import { useState, useEffect } from "react";

function RoomsBlock() {
    const zones = [
        { name: 'Тренажерный зал', group: 'Все оборудование для фитнеса поставляется ведущими мировыми брендами - HOIST, Circle Fitness', image: '2231.jpg', size: 'big' },
        { name: 'World Elite', group: 'Премиальная зона с отдельным залом, раздевалкой и зоной для переговоров', image: '2232.jpg', size: 'big' },
        { name: 'Wellness', group: 'Два хаммама, финская сауна, соляная комната и просторная зона отдыха с фитнес баром', image: '2233.jpg', size: 'big' },
        { name: 'Зона единоборств', group: 'Отдельная зона с татами, дополненная грушами и необходимым инвентарем', image: '2234.jpg', size: '' },
        { name: 'Групповые залы', group: 'Два просторных зала с большим разнообразием тренировок', image: '2235.jpg', size: '' },
        { name: 'Бассейн', group: 'Две чаши бассейна: с противотоком и гидромассажем', image: '2236.jpg', size: '' },
        { name: 'Gratz Pilates', group: 'Единственная студия в ХМАО-Югре c уникальным оборудованием "Gratz Industries"', image: '2237.jpg', size: '' }
    ];

    const [thisRoom, setThisRoom] = useState(0);
    const [fade, setFade] = useState(true);
    const totalRooms = zones.length;

    // Автоматическая смена слайдов
    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 3000);

        return () => clearInterval(interval);
    }, [thisRoom]);

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
            <div className={style.container}>
                <div className={style.title}>
                    <div className={style.text}>Зоны фитнес клуба</div>
                </div>
                <div className={style.zones}>
                    <div className={`${style.room} ${fade ? style.fadeIn : style.fadeOut}`}>
                        <div className={style.backroom} style={{ backgroundImage: `url('/images/${zones[thisRoom].image}')` }}></div>
                        <div className={style.descriptions}>
                            <div className={style.title}>{zones[thisRoom].name}</div>
                            <div className={style.desc}>{zones[thisRoom].group}</div>
                            <div className={style.btns}>
                                <div className={style.more}>ПОДРОБНЕЕ</div>
                                <div className={style.checked}>ЗАПИСАТЬСЯ</div>
                            </div>
                        </div>
                    </div>
                    <div className={style.prev} onClick={handlePrev}><i className="fa-solid fa-angles-left" /></div>
                    <div className={style.next} onClick={handleNext}><i className="fa-solid fa-angles-right" /></div>
                    <div className={style.dots}>
                        {zones.map((_, index) => (
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
                    <div className={style.btn}><div className={style.next}></div>Все зоны</div>
                </div>
            </div>
        </div>
    );
}

export default RoomsBlock;