import style from './SliderPrograms.module.scss'
import {useEffect, useRef, useState} from "react";

function SliderPrograms( { group, setActivemodal} ){



    const [currentPosition, setCurrentPosition] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const sliderRef = useRef(null);

    const totalSlides = group.group.length;
    const visibleSlides = 4; // количество отображаемых слайдов
    // const slideWidth = 535; // ширина одного слайда
    const [slideWidth, setslideWidth] = useState(535)
    // Дублируем элементы для бесконечности
    const groupExtended = [...group.group, ...group.group, ...group.group];

    useEffect(()=>{
        if(window.innerWidth > 380 && window.innerWidth < 500){
            setslideWidth(335)
        }
        if(window.innerWidth < 379){
            setslideWidth(300)
        }
    }, [window.innerWidth])

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

    return(
        <div className={style.main}>

            <div className={style.container}>
                <div className={style.title}>
                    <div className={style.text}>{group.name}</div>
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
                            {groupExtended.map((train, indexman) => (
                                <div
                                    key={indexman}
                                    className={style.man}
                                >

                                    <div className={style.train}>
                                        <div className={style.up}>
                                            <div className={style.image}
                                                 style={{ backgroundImage: `url('/images/${train.img}')` }}
                                            ></div>
                                            <div className={style.name}>{train.name}</div>
                                            <div className={style.des}>{train.desc}</div>
                                        </div>
                                        <div className={style.bottom} onClick={()=>setActivemodal(true)}>Записаться
                                            <img src="/files/openwhite.svg" alt=""/>
                                        </div>
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
        </div>
    )
}

export default SliderPrograms