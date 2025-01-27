import React from 'react';

const WidgetFrame = () => {
    return (
        <iframe
            src="https://widget.fitness-kit.ru/lk/hope/1/"
            title="Fitness Kit Widget"
            style={{
                width: '100%',
                height: '100vh', // или другой подходящий размер
                border: 'none'
            }}
        ></iframe>
    );
};

export default WidgetFrame;