import style from './ZoneSlider.module.scss';
import { useState, useRef, useEffect } from "react";

function RoomsBlock() {
    const zones = [
        { name: 'Тренажерный зал', group: 'Все оборудование для фитнеса поставляется ведущими мировыми брендами - HOIST, Circle Fitness', image: '2231.jpg', size: 'big' },
        { name: 'World Elite', group: 'Премиальная зона с отдельным залом, раздевалкой и зоной для переговоров', image: '2232.jpg', size: 'big' },
        { name: 'Wellness', group: 'Два хаммама, финская сауна, соляная комната и просторная зона отдыха с фитнес баром', image: '2233.jpg', size: 'big' },
        { name: 'Зона единоборств', group: 'Отдельная зона с татами, дополненная грушами и необходимым инвентарем', image: '2234.jpg', size: '' },
        { name: 'Групповые залы', group: 'Два просторных зала с большим разнообразием тренировок', image: '2235.jpg', size: '' },
        { name: 'Бассейн', group: 'Две чаши бассейна: с противотоком и гидромассажем', image: '2236.jpg', size: '' },
        { name: 'Gratz Pilates', group: 'Единственная студия в ХМАО-Югреc уникальным оборудованием"Gratz Industries"', image: '2237.jpg', size: '' }
    ];

    const [list, setList] = useState(zones)

    return (
        <div className={style.main}>
            <div className={style.container}>
                <div className={style.title}>
                    <div className={style.text}>Зоны фитнес клуба</div>
                </div>
                <div className={style.zones}>
                    {list.map((image, index)=>(
                        <img key={index} src={`images/${image.image}`} className={(image.size === 'big')?style.bigimage:style.littleimage}/>
                    ))}

                    {/*<img src="" className={style.bigimage}/>*/}
                    {/*<img src="" className={style.bigimage}/>*/}
                    {/*<img src="" className={style.littleimage}/>*/}
                    {/*<img src="" className={style.littleimage}/>*/}
                    {/*<img src="" className={style.littleimage}/>*/}
                    {/*<img src="" className={style.littleimage}/>*/}
                </div>
            </div>
            <div className={style.more}>
                <div className={style.btn}>Подробнее</div>
            </div>
        </div>
    );
}

export default RoomsBlock;