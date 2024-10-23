import { useEffect, useState } from "react";
import style from './CityModal.module.scss';

function CityModal({ defaultCity, onConfirm }) {
    const [selectedCity, setSelectedCity] = useState(defaultCity);
    const cities = ['Сургут', 'Москва'];
    const [offselm, setOffsel] = useState(false);

    const handleConfirm = () => {
        localStorage.setItem('city', selectedCity);
        onConfirm(selectedCity);
    };

    const onSelected = () => {
        setOffsel(true);
    };

    useEffect(() => {
        (!defaultCity || defaultCity.length === 0) && setSelectedCity('Сургут');
    }, []);

    return (
        <div className={style.modal}>
            <div className={style.modalContent}>
                <img src="/files/header/logoblack.svg" style={{ width: '200px' }} />
                <h2 style={!offselm ? { display: 'none' } : {}}>Выберите из списка</h2>
                <h2 style={offselm ? { display: 'none' } : {}}>Ваш город: {selectedCity}?</h2>
                <select
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                    style={!offselm ? { display: 'none' } : {}}
                >
                    {cities.map((city, index) => (
                        <option key={index} value={city}>
                            {city}
                        </option>
                    ))}
                </select>
                <div className={style.actions} style={offselm ? { display: 'none' } : {}}>
                    <div className={style.yes} onClick={handleConfirm}>Да</div>
                    <div className={style.no} onClick={onSelected}>Выбрать другой</div>
                </div>
                <div className={style.insel} onClick={handleConfirm} style={!offselm ? { display: 'none' } : {}}>Выбрать</div>
            </div>
        </div>
    );
}

export default CityModal;
