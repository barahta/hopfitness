import style from './ZoneSlider.module.scss';
import { useState, useRef, useEffect } from "react";

function ZoneSlider() {
    const mans = [
        { name: 'Максим Гамецкий', group: 'Силовая', image: '1231.jpg', age: '12 лет' },
        { name: 'Анна Либуркина', group: 'Функциональные тренировки', image: '1232.jpg', age: '7 лет' },
        { name: 'Татьяна Антоненко', group: 'Кроссфит', image: '1233.jpg', age: '4 года' },
        { name: 'Александр Солянников', group: 'Тяжелая атлетика', image: '1234.jpg', age: '4 года' },
        { name: 'Елена Баскакова', group: 'Бодибилдинг', image: '1235.jpg', age: '4 года' },
        { name: 'Дмитрий Перминов', group: 'Бокс', image: '1236.jpg', age: '8 лет' }
    ];

    const [currentPosition, setCurrentPosition] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const sliderRef = useRef(null);

    const totalSlides = mans.length;
    const visibleSlides = 4; // количество отображаемых слайдов
    const slideWidth = 320; // ширина одного слайда

    // Дублируем элементы для бесконечности
    const mansExtended = [...mans, ...mans, ...mans];

    const nextMan = (direction) => {
        if (isTransitioning) return; // предотвращаем новые нажатия, пока идет анимация

        setIsTransitioning(true);
        if (direction === 'next') {
            setCurrentPosition((prev) => prev - slideWidth);
        } else {
            setCurrentPosition((prev) => prev + slideWidth);
        }
    };

    const handleTransitionEnd = () => {
        setIsTransitioning(false);

        if (currentPosition <= -(slideWidth * totalSlides)) {
            setCurrentPosition(0);
        } else if (currentPosition >= slideWidth) {
            setCurrentPosition(-(slideWidth * (totalSlides - visibleSlides)));
        }
    };

    useEffect(() => {
        const slider = sliderRef.current;
        if (slider) {
            slider.addEventListener('transitionend', handleTransitionEnd);
        }
        return () => {
            if (slider) {
                slider.removeEventListener('transitionend', handleTransitionEnd);
            }
        };
    }, [currentPosition]);

    return (
        <div className={style.main}>
            <div className={style.container}>
                <div className={style.title}>
                    <div className={style.text}>Наши тренеры</div>
                </div>
                <div className={style.slider}>
                    <div className={style.nextbtn} onClick={() => nextMan('prev')}>
                        <i className="fa-solid fa-angles-left" />
                    </div>
                    <div className={style.content}>
                        <div
                            className={style.slidershow}
                            ref={sliderRef}
                            style={{
                                transform: `translateX(${currentPosition}px)`,
                                transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none'
                            }}
                        >
                            {mansExtended.map((man, indexman) => (
                                <div
                                    key={indexman}
                                    className={style.man}
                                    style={{ backgroundImage: `url('/images/${man.image}')` }}
                                >
                                    <div className={style.active}>
                                        <div className={style.group}>{man.group}</div>
                                        <div className={style.name}>
                                            <div className={style.fio}>{man.name}</div>
                                            <div className={style.age}>Тренерский стаж - {man.age}</div>
                                        </div>
                                        <div className={style.btn}>Записаться</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={style.nextbtn} onClick={() => nextMan('next')}>
                        <i className="fa-solid fa-angles-right" />
                    </div>
                </div>
            </div>
            <div className={style.more}>
                <div className={style.btn}>Подробнее</div>
            </div>
        </div>
    );
}

export default ZoneSlider;