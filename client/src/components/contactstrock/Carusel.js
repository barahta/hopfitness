import React, { useState, useRef, useEffect } from 'react';
import style from './CaruselStyle.module.scss';

function Carusel() {
    const prizes = [
        { name: 'Медаль', icon: 'fa-solid fa-medal', on: true },
        { name: 'Гантеля', icon: 'fa-solid fa-dumbbell', on: false },
        { name: 'Секундомер', icon: 'fa-solid fa-stopwatch-20', on: true },
        { name: 'Звезда рейтинга', icon: 'fa-solid fa-ranking-star', on: false },
        { name: 'Пульс', icon: 'fa-solid fa-heart-pulse', on: true },
        { name: 'Плавание', icon: 'fa-solid fa-person-swimming', on: false },
        { name: 'Велосипед', icon: 'fa-solid fa-person-biking', on: true },
        { name: 'Бег', icon: 'fa-solid fa-person-running', on: true }
    ];

    const [spinning, setSpinning] = useState(false);
    const [selectedPrize, setSelectedPrize] = useState(null);
    const containerRef = useRef(null);

    const startSpin = () => {
        if (spinning) return;

        setSpinning(true);
        setSelectedPrize(null);

        const availablePrizes = prizes.filter(prize => prize.on);
        const randomPrize = availablePrizes[Math.floor(Math.random() * availablePrizes.length)];

        let speed = 20;
        let totalScroll = 0;
        let rounds = 10;

        const spin = () => {
            if (containerRef.current) {
                totalScroll += speed;
                containerRef.current.scrollLeft = totalScroll;

                if (totalScroll >= containerRef.current.scrollWidth / 2) {
                    totalScroll = 0; // Зацикливаем скролл
                }

                if (rounds > 0) {
                    rounds -= 0.1;
                    speed += 0.5; // Плавное замедление
                    requestAnimationFrame(spin);
                } else {
                    // Останавливаемся на выбранном элементе
                    setTimeout(() => {
                        setSpinning(false);
                        setSelectedPrize(randomPrize);

                        const selectedIndex = prizes.findIndex(prize => prize.name === randomPrize.name);
                        const finalScrollPosition = selectedIndex * 320; // Ширина одного элемента + отступ
                        containerRef.current.scrollTo({ left: finalScrollPosition, behavior: 'smooth' });
                    }, 500);
                }
            }
        };

        spin();
    };

    return (
        <div className={style.main}>
            <div className={style.container}>
                <div className={style.carusel} ref={containerRef}>
                    {prizes.concat(prizes).map((prize, index) => (
                        <div key={index} className={style.item}>
                            <i className={prize.icon} />
                        </div>
                    ))}
                </div>
                <button className={style.spinButton} onClick={startSpin} disabled={spinning}>
                    Запустить розыгрыш
                </button>
                {selectedPrize && (
                    <div className={style.result}>
                        Выпал приз: {selectedPrize.name}
                        <i className={selectedPrize.icon} />
                    </div>
                )}
            </div>
        </div>
    );
}

export default Carusel;