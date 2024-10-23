import style from './styles/ZonesPage.module.scss'
import TwoBlocks from "../components/animation/TwoBlocks";
import Footer from "../components/footer/Footer";
import NewsPost from "../components/news/NewsPost";
import SmallHeader from "../components/newheader/SmallHeader";
import {useEffect, useRef, useState} from "react";
import FormModal from "../components/modalwin/FormModal";
import PostContact from "../components/forms/PostContact";
import WriteModal from "../components/modalwin/WriteModal";
import PostResume from "../components/forms/PostResume";
import {Link} from "react-router-dom";

function ZonesPage (){

    const materials = [
        {
            name: 'ТРЕНАЖЕРНЫЙ ЗАЛ',
            description: ['Тренажерный зал в Hope Fitness – это просторное тренировочное пространство, где каждый найдет оборудование для достижения своих целей.', 'Удобное разделение по зонам и продуманное расположение обеспечивают максимальный комфорт.Все оборудование для фитнеса поставляется ведущими мировыми брендами – HOIST, Circle Fitness.'],
            images: [
                {
                    desc: '',
                    url: 'ferum1.jpg'
                },
                {
                    desc: 'Зона функциональной тренировки',
                    url: 'ferum2.jpg'
                },
                {
                    desc: 'Зона единоборств',
                    url: 'ferum3.jpg'
                },
                {
                    desc: 'Свободные веса',
                    url: 'ferum4.jpg'
                },
                {
                    desc: 'Тренажеры',
                    url: 'ferum5.jpg'
                },
                {
                    desc: 'Беговые дорожки',
                    url: 'ferum6.jpg'
                }
            ]
        },
        {
            name: 'World Elite',
            description: [
                'Уникальная зона для самых особенных гостей нашего клуба.',
                'Все тренажеры поставляются компанией "PRECOR" - одним из топовых производителей.',
                'В вашем распоряжении:персональный тренажерный зал с ограниченным количеством гостей, отдельные раздевалки, зона отдыха с кофемашиной, переговорная комната,а так же системы контроля климата и ароматизации воздуха.'
            ],
            images: [
                {
                    desc: 'Персональные полотенца',
                    url: 'elite1.jpg'
                },
                {
                    desc: 'Индивидуальный тренажерный зал',
                    url: 'elite2.jpg'
                },
                {
                    desc: 'Регулируемая подсветка',
                    url: 'elite3.jpg'
                },
                {
                    desc: 'Комната переговоров',
                    url: 'elite4.jpg'
                },
                {
                    desc: 'Фото зона',
                    url: 'elite5.jpg'
                },
                {
                    desc: 'Отдельные раздевалки',
                    url: 'elite6.jpg'
                }
            ]
        },
        {
            name: 'Wellness',
            description: [
                'Здесь вы можете расслабиться после тяжелой тренировки. Для вашего отдыха созданы все удобства: два бассейна с гидромассажем и системой противотока, соляная комната, финская сауна, индивидуальная парная, два хаммама, а так же кабинеты маникюра и массажа.',
            ],
            images: [
                {
                    desc: 'Кабинеты массажа',
                    url: 'wellness1.jpg'
                },
                {
                    desc: 'СПА',
                    url: 'wellness2.jpg'
                },
                {
                    desc: 'Бассейн',
                    url: 'wellness3.jpg'
                },
                {
                    desc: 'Зона отдыха',
                    url: 'wellness4.jpg'
                },
                {
                    desc: 'Бар',
                    url: 'wellness5.jpg'
                },
                {
                    desc: 'Парная',
                    url: 'wellness6.jpg'
                },
            ]
        },
        {
            name: 'Зона единоборств',
            description: [
                'Для занятий единоборствами в нашем клубе есть специальная зона с мягким покрытием (татами) и оборудованием для бокса и кикбоксинга (мешки, лапы, перчатки, пояса)',
            ],
            images: [
                {
                    desc: '',
                    url: 'box1.jpg'
                },
                {
                    desc: '',
                    url: 'box2.jpg'
                },
                {
                    desc: '',
                    url: 'box3.jpg'
                }
            ]
        },
        {
            name: 'ГРУППОВЫЕ ЗАЛЫ',
            description: [
                'Для вашего комфорта в нашим фитнес центре расположены два зала групповых программ. Топовое оборудование, профессиональный тренерский состав и разнообразие групповых тренировок не оставят Вас равнодушными.',
            ],
            images: [
                {
                    desc: '',
                    url: 'group1.jpg'
                },
                {
                    desc: '',
                    url: 'group2.jpg'
                },
                {
                    desc: '',
                    url: 'group3.jpg'
                },
                {
                    desc: '',
                    url: 'group4.jpg'
                },
                {
                    desc: '',
                    url: 'group5.jpg'
                }
            ]
        },
        {
            name: '"Gratz" pilates',
            description: [
                'Единственная студия в ХМАО-Югре, с уникальным оборудованием "Gratz Industries"',
                'Тренажеры устроены таким образом, что помогают выполнить упражнения с точностью, задействовав только нужные мышцы, не перегрузив напряженные участки тела и наоборот проработать слабые. Кроме того, находясь на тренажере, занимающийся чувствует слабые места, асимметрии тела.',
                'Это значительно улучшает понимание тела, что позволяет в искусственных условиях сформировать двигательные умения и навыки, развивать и совершенствовать качества и способности, необходимые для жизни.'
            ],
            images: [
                {
                    desc: '',
                    url: 'pilates1.jpg'
                },
                {
                    desc: '',
                    url: 'pilates2.jpg'
                },
                {
                    desc: '',
                    url: 'pilates3.jpg'
                },
                {
                    desc: '',
                    url: 'pilates4.jpg'
                },
                {
                    desc: '',
                    url: 'pilates5.jpg'
                },
                {
                    desc: '',
                    url: 'pilates6.jpg'
                }
            ]
        },
    ]

    const [actvmat, setActvMat] = useState(0);
    const [activemodal, setActivemodal] = useState(false);
    const [data, setData] = useState('');
    const sectionRefs = useRef([]);
    const [isVisible, setIsVisible] = useState([]);
    const [imageOrientation, setImageOrientation] = useState({});

    const handleScrollToSection = (index) => {
        setActvMat(index);
        sectionRefs.current[index].scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const index = sectionRefs.current.indexOf(entry.target);
                if (entry.isIntersecting) {
                    setIsVisible((prev) => {
                        const newState = [...prev];
                        newState[index] = true;
                        return newState;
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        sectionRefs.current.forEach((section) => {
            if (section) {
                observer.observe(section);
            }
        });

        return () => {
            sectionRefs.current.forEach((section) => {
                if (section) {
                    observer.unobserve(section);
                }
            });
        };
    }, []);

    // Проверка ориентации изображений
    useEffect(() => {
        const orientationState = {};

        materials.forEach((material, index) => {
            const imagesToCheck = material.images.slice(3);
            orientationState[index] = new Array(imagesToCheck.length).fill(false);

            imagesToCheck.forEach((img, imgIndex) => {
                const image = new Image();
                image.src = `/images/${img.url}`;
                image.onload = () => {
                    const isVertical = image.naturalHeight > image.naturalWidth;
                    orientationState[index][imgIndex] = isVertical;

                    setImageOrientation((prevState) => {
                        const newState = { ...prevState };
                        newState[index] = orientationState[index];
                        return newState;
                    });
                };
            });
        });
    }, [materials]);

    return (
        <div className={style.bodymain}>
            <WriteModal activemodal={activemodal} setActivemodal={setActivemodal} data={<PostResume man={data} setActivemodal={setActivemodal} />} setData={setData} />
            <SmallHeader />
            <div className={style.vakansii}>
                <div className={style.container}>
                    <div className={style.title}>Зоны фитнес клуба</div>
                    <div className={style.block}>
                        <div className={style.leftpart}>
                            <div className={style.navigate}>
                                {materials.map((point, indexMat) => (
                                    <div
                                        key={indexMat}
                                        className={style.point}
                                        onClick={() => handleScrollToSection(indexMat)}
                                    >
                                        {point.name}
                                        <div className={style.total} style={(actvmat === indexMat) ? { backgroundColor: '#F5DE1E' } : {}}></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={style.rightpart}>
                            {materials.map((point, index) => (
                                <div
                                    key={index}
                                    ref={(el) => (sectionRefs.current[index] = el)}
                                    className={`${style.list} ${isVisible[index] ? style.fadeIn : ''}`}
                                >
                                    <div className={style.position}>
                                        <div className={style.title}>
                                            <div className={style.text}>{point.name}</div>
                                        </div>
                                        <div className={style.description}>
                                            <div className={style.text}>{point.description}</div>
                                        </div>
                                        <div className={style.gallary}>
                                            <div className={style.first}>
                                                <div className={style.mainimg} style={{ backgroundImage: `url('/images/${point.images[0].url}')` }}></div>
                                                <div className={style.double}>
                                                    <div className={style.seatimg} style={{ backgroundImage: `url('/images/${point.images[1].url}')` }}></div>
                                                    <div className={style.seatimg} style={{ backgroundImage: `url('/images/${point.images[2].url}')` }}></div>
                                                </div>
                                            </div>
                                            <div className={style.last}>
                                                {point.images.slice(3).map((img, indexLastImg) => {
                                                    const isRowVertical = imageOrientation[index]?.some((isVert) => isVert);
                                                    const className = isRowVertical ? style.lastimgTall : style.lastimg;

                                                    return (
                                                        <div
                                                            key={indexLastImg}
                                                            className={className}
                                                            style={{ backgroundImage: `url('/images/${img.url}')` }}
                                                        ></div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ZonesPage;