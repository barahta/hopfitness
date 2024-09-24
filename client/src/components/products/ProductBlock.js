import React from 'react';
import style from './ProductBlock.module.scss';

function ProductBlock() {
    const products = [
        {
            imgSrc: "/path-to-image1.png",
            price: "От 37.500₽",
            description: "Целый день в фитнес-клубе с 6 до 17 и полный доступ ко всем залам и программам клуба",
            name: 'DAY'
        },
        {
            imgSrc: "/path-to-image2.png",
            price: "От 48.500₽",
            description: "Классический тариф для свободного посещения центра в любое время",
            name: 'STANDART'
        },
        {
            imgSrc: "/path-to-image3.png",
            price: "От 36.500₽",
            description: "Вечернее посещение центра для тех, кто хочет провести вечер с пользой",
            name: 'NIGHT'
        },
        {
            imgSrc: "/path-to-image1.png",
            price: "От 36.500₽",
            description: "Целый день в фитнес-клубе с 6 до 17 и полный доступ ко всем залам и программам клуба",
            name: 'DAY TIME'
        },
        {
            imgSrc: "/path-to-image2.png",
            price: "От 245.000₽",
            description: "Классический тариф для свободного посещения центра в любое время",
            name: 'WORLD ELITE'
        },
        {
            imgSrc: "/path-to-image3.png",
            price: "От 83.800₽",
            description: "Вечернее посещение центра для тех, кто хочет провести вечер с пользой",
            name: 'FAMILY'
        },
        // Добавьте больше карточек по аналогии
    ];

    return (

            <div className={style.main}>
                <div className={style.container}>
                    {products.map((product, index) => (
                        <div key={index} className={style.productCard}>
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

export default ProductBlock;