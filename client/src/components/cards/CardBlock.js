import React, { useEffect, useState } from 'react';
import style from './CardBlock.module.scss';
import WriteModal from "../modalwin/WriteModal";
import CreateCard from "../forms/CreateCard";

function CardBlock() {
    const products = [
        {
            imgSrc: "/path-to-image1.png",
            price: "От 56.900₽",
            description: "Целый день в фитнес-клубе с 6 до 17 и полный доступ ко всем залам и программам клуба",
            desc: 'Дневной формат клубной карты. Посещение клуба с 06:00 до 17:00 со свободным доступом в любую зону фитнес центра.',
            content: [
                '4 вводные тренировки',
                'Первичное фитнес-тестирование',
                'Посещение зоны единоборств',
                'Посещение кардиозоны',
                'Три гостевых визита',
                'Посещение тренажерного зала',
                'Посещение wellness зоны',
                'Анализ состава тела'
            ],
            title: 'Клубная карта - DAY',
            name: 'DAY'
        },
        {
            imgSrc: "/path-to-image2.png",
            price: "От 83.800₽",
            description: "Классический тариф для свободного посещения центра в любое время",
            desc: 'Стандартный формат клубной карты. Круглосуточное посещение клуба с полным доступом ко всем зонам фитнес центра.',
            content: [
                '4 вводные тренировки',
                'Три гостевых визита',
                'Первичное фитнес-тестирование',
                'Посещение тренажерного зала',
                'Посещение зоны единоборств',
                'Посещение wellness зоны',
                'Посещение кардиозоны',
                'Анализ состава тела'
            ],
            title: 'КЛУБНАЯ КАРТА - STANDART',
            name: 'STANDART'
        },
        {
            imgSrc: "/path-to-image3.png",
            price: "От 36.500₽",
            description: "Вечернее посещение центра для тех, кто хочет провести вечер с пользой",
            desc: 'Ночной формат клубной карты. Посещение клуба с 23:00 до 07:00, без доступа к wellness зоне.',
            content: [
                '4 вводные тренировки',
                'Три гостевых визита',
                'Первичное фитнес-тестирование',
                'Посещение тренажерного зала',
                'Посещение зоны единоборств',
                'Посещение кардиозоны',
                'Анализ состава тела'
            ],
            title: 'КЛУБНАЯ КАРТА - NIGHT',
            name: 'NIGHT'
        },
        {
            imgSrc: "/path-to-image1.png",
            price: "От 36.500₽",
            description: "Целый день в фитнес-клубе с 6 до 17 и полный доступ ко всем залам и программам клуба",
            desc: 'Дневной формат клубной карты. Посещение клуба с 12:00 до 18:00 со свободным доступом в любую зону фитнес центра.',
            content: [
                '4 вводные тренировки',
                'Три гостевых визита',
                'Первичное фитнес-тестирование',
                'Посещение тренажерного зала',
                'Посещение зоны единоборств',
                'Посещение wellness зоны',
                'Посещение кардиозоны',
                'Анализ состава тела'
            ],
            title: 'КЛУБНАЯ КАРТА - DAY TIME',
            name: 'DAY TIME'
        },
        {
            imgSrc: "/path-to-image2.png",
            price: "От 245.000₽",
            description: "Классический тариф для свободного посещения центра в любое время",
            desc: 'Формат клубной карты повышенного комфорта. Неограниченное посещение всех зон фитнес клуба со специальными условиями.',
            content: [
                'Депозит 25 000 рублей • Посещение дополнительной закрытой зоны центра',
                '4 вводные тренировки • 4 анализа состава тела',
                '10 персональных тренировок • Первичное фитнес-тестирование',
                'Три гостевых визита • Тест на определение уровня выносливости',
                'Отдельная зона парковки для обладателей карты World elite',
                '90 дней посещения фитнес-центра в подарок для друга',
                'Два восстановления утерянного браслета',
                'Персональные раздевалка и шкафчик',
                'Халат',
                'Заморозка 60 дней'
            ],
            title: 'КЛУБНАЯ КАРТА - WORLD ELITE',
            name: 'WORLD ELITE'
        },
        {
            imgSrc: "/path-to-image3.png",
            price: "От 147.000₽",
            description: "Вечернее посещение центра для тех, кто хочет провести вечер с пользой",
            desc: 'Семейный формат клубной карты. Включает в себя две клубные карты. Неограниченное посещение всех зон фитнес центра.',
            content: [
                '8 вводных тренировки',
                'Три гостевых визита',
                'Первичное фитнес-тестирование',
                'Посещение тренажерного зала',
                'Посещение зоны единоборств',
                'Посещение wellness зоны',
                '2 анализа состава тела',
                '2 детских тренировки',
                '2 детских тренировки'
            ],
            title: 'КЛУБНАЯ КАРТА - FAMILY',
            name: 'FAMILY'
        },
    ];
    const [activemodal, setActivemodal] = useState(false);
    const [data, setData] = useState('');
    const [visible, setVisible] = useState([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setVisible((prevVisible) => [...prevVisible, entry.target.dataset.index]);
                    observer.unobserve(entry.target);
                }
            });
        });

        const elements = document.querySelectorAll(`.${style.productCard}`);
        elements.forEach((el) => observer.observe(el));

        return () => {
            elements.forEach((el) => observer.unobserve(el));
        };
    }, []);

    return (
        <div className={style.main}>
            <WriteModal activemodal={activemodal} setActivemodal={setActivemodal}
                        data={<CreateCard card={data}  setActivemodal={setActivemodal}/>}
                        setData={setData}
            />
            <div className={style.container}>
                {products.map((product, indexProd) => (
                    <div
                        key={indexProd}
                        className={`${style.productCard} ${visible.includes(indexProd.toString()) ? style.visible : ''}`}
                        data-index={indexProd}
                        onClick={()=>{setData(product); setActivemodal(true)}}
                    >
                        <div className={style.cardContainer}>
                            <div className={style.title}>{product.name}</div>
                            <div className={style.overlay}>
                                <div className={style.priceTag}>{product.price}</div>
                                <div className={style.description}>{product.description}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CardBlock;