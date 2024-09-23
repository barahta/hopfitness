import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

const darkThemeStyle = {
    "version": "1.0",
    "features": [
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [55.751574, 37.573856]
            },
            "properties": {
                "iconColor": "#ff0000"
            }
        }
    ],
    "elements": [
        {
            "type": "geometry",
            "features": [
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Polygon",
                        "coordinates": [
                            [
                                [55.751574, 37.573856],
                                [55.751574, 37.573856]
                            ]
                        ]
                    },
                    "properties": {
                        "stroke": "#ffffff",
                        "fill": "#000000"
                    }
                }
            ]
        }
    ]
};

const MyMap = () => {
    const coordinates = [61.2545566,73.4257884]; // Пример: Москва, Красная площадь

    return (
        <YMaps>
            <Map
                defaultState={{
                    center: coordinates,
                    zoom: 10,
                    controls: [] // Убираем стандартные элементы управления для кастомизации
                }}
                width="100%"  // Укажите ширину карты
                height="400px" // Укажите высоту карты
                options={{
                    // Добавляем стили карты
                    styles: darkThemeStyle
                }}
            >
                <Placemark geometry={coordinates} />
            </Map>
        </YMaps>
    );
};

export default MyMap;