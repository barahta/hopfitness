import React, { useEffect } from 'react';

const FitnessKitWidget = () => {
    useEffect(() => {
        // Создаем и добавляем скрипт в компонент
        const script = document.createElement('script');
        script.id = 'fitnesskit_personal';
        script.src = 'https://hope.fitnesskit-admin.ru/widget/mount/widget-personal.js';
        script.async = true;
        script.setAttribute('data-id', '2');
        script.setAttribute('data-server', 'hope');

        document.body.appendChild(script);

        return () => {
            // Удаляем скрипт при размонтировании компонента
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div>
            {/* Кнопка для открытия виджета */}
            <a href="#fitnesskit_personal" className="open-widget-button">
                Открыть личный кабинет
            </a>
        </div>
    );
};

export default FitnessKitWidget;
