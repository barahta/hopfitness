import style from './ProgramsSlider.module.scss';
import { useState, useRef, useEffect } from "react";

function ProgramsSlider() {
    const mans = [
        { name: 'БОКС', group: 'Способствует укреплению мышц, суставов, связок, сердца, развитию мышечной силы и выносливости, жиросжиганию.', image: 'program1.jpg', age: '' },
        { name: 'САЙКЛ', group: 'Программа способствует тренировке сердечно-сосудистой, дыхательной систем, развитию мышечной силы', image: 'program2.jpg', age: '' },
        { name: 'ПИЛАТЕС', group: 'Программа упражнений, направленных на развитие мышц и увеличение плотности тела.', image: 'program3.jpg', age: '' },
        { name: 'КРОССФИТ', group: 'Программа упражнений на силу и выносливость, состоящая в основном из анаэробных упражнений, гимнастики и тяжёлой атлетики', image: 'program4.jpg', age: '' },
        { name: 'ЙОГА', group: 'Программа направлена на духовное уравновешивание, укрепление здоровья, формирование мышечного корсета', image: 'program5.jpg', age: '' }
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
                    <div className={style.text}>Наши программы</div>
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
                                        <div className={style.group}></div>
                                        <div className={style.name}>
                                            <div className={style.fio}>{man.name}</div>
                                            <div className={style.age}>{man.group}</div>
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
                <div className={style.moreblock}>
                    <div className={style.btn}><div className={style.next}></div>Все программы</div>
                </div>
            </div>
        </div>
    );
}

export default ProgramsSlider;