import style from './ZoneSlider.module.scss';
import { useState, useRef, useEffect } from "react";
import {Link} from "react-router-dom";
import NewsService from "../../services/NewsService";
import WriteModal from "../modalwin/WriteModal";
import PostResume from "../forms/PostResume";

function ZoneSlider() {
    const mans = [
        { name: 'Максим Гамецкий', group: 'Силовая', image: '1231.jpg', age: '12 лет' },
        { name: 'Анна Либуркина', group: 'Функциональные тренировки', image: '1232.jpg', age: '7 лет' },
        { name: 'Татьяна Антоненко', group: 'Кроссфит', image: '1233.jpg', age: '4 года' },
        { name: 'Александр Солянников', group: 'Тяжелая атлетика', image: '1234.jpg', age: '4 года' },
        { name: 'Елена Баскакова', group: 'Бодибилдинг', image: '1235.jpg', age: '4 года' },
        { name: 'Дмитрий Перминов', group: 'Бокс', image: '1236.jpg', age: '8 лет' }
    ];
    const [grouplist, setGroupsList] = useState([])
    const [list, setList] = useState([])

    const [currentPosition, setCurrentPosition] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const sliderRef = useRef(null);
    const [totalSlides, settotalSlides] = useState(0)

    const visibleSlides = 4; // количество отображаемых слайдов
    const slideWidth = 320; // ширина одного слайда

    // Дублируем элементы для бесконечности
    const [mansExtended, setmansExtended] = useState([])


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



    const getTrenersMan = async () => {
        try{
            const {data} = await NewsService.getTrenersMan({capter: 'hopefitness'})
            console.log(data)
            if(data){
                console.log(data)
                const uniqueRooms = [...new Set(data.map(item => item.group))];
                setGroupsList(uniqueRooms)
                setList(data)
            }
        }catch(e){
            console.log(e)
        }
    }

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

    useEffect(()=>{
        getTrenersMan()
    },[])

    useEffect(()=>{
        setmansExtended([...list, ...list, ...list])
    },[list,totalSlides])
    useEffect(()=>{
        settotalSlides(list.length)
    },[list])
    const [activemodal,setActivemodal] = useState(false)
    const [data,setData] = useState('')
    return (
        <div className={style.main}>
            <WriteModal activemodal={activemodal} setActivemodal={setActivemodal} data={<PostResume man={data} setActivemodal={setActivemodal} title='Записаться на занятие'/>} setData={setData} />

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
                            {list.map((man, indexman) => (
                                <div
                                    key={indexman}
                                    className={style.man}
                                    style={{ backgroundImage: `url('${process.env.REACT_APP_API_URL}${man.image}')`, maxWidth: '300px' }}
                                >
                                    <div className={style.active}>
                                        <div className={style.group} style={{textAlign: 'center'}}>{man.room}</div>
                                        <div className={style.name}>
                                            <div className={style.age}>{man.desc}</div>
                                        </div>
                                        <div className={style.name}>
                                            <div className={style.fio} style={{textShadow: '0px 0px 6px rgba(0,0,0,0.9)'}}>{man.name}</div>
                                        </div>
                                        <div className={style.btn} onClick={()=>setActivemodal(true)}>Записаться</div>
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
                    <Link to='/treners' className={style.btn}><div className={style.next}></div>Подробнее</Link>
                </div>
            </div>
        </div>
    );
}

export default ZoneSlider;