import style from './Cosmos.module.scss'
import {useState} from "react";
function Cosmos () {

    const whys = [
        {
            title: 'Отличные аниматоры',
            image: '6.jpg',
            desc: 'У нас большая команда аниматоров. Профессионалы своего дела, которые сделают ваш праздник незабываемым.'
        },
        {
            title: 'Интересные мастер-классы',
            image: '1.jpg',
            desc: 'Более 20 различных мастер-классов. Каждый найдет занятие по душе.'
        },
        {
            title: 'НАМ УЖЕ 3 года',
            image: '4.jpg',
            desc: 'Большое количество положительных отзывов подтверждают наш трепетный подход к своему делу!'
        },
        {
            title: 'Игровой лабиринт',
            image: '2.jpg',
            desc: 'Многоуровневый игровой лабиринт с горками и тоннелями. '
        },
        {
            title: 'Бассейн с шариками',
            image: '3.jpg',
            desc: 'Большой бассейн с шариками. Вашему ребенку точно понравится!'
        },
        {
            title: 'Свой бар',
            image: '5.jpg',
            desc: 'Большой выбор разнообразных напитков и десертов для детей. А для родителей у нас есть кофе.'
        }
    ]

    const [activeblock, setActiveblock] = useState('')

    return(
        <div className={style.main}>

            <div className={style.paralax}>
            </div>
            <div className={style.container}>
                <div className={style.content}>
                    <div className={style.left}>
                        <div className={style.images}>
                            <img src="./files/cosmos/m1.png" className={style.m1}/>
                            <img src="./files/cosmos/m2.png" className={style.m2}/>
                            <img src="./files/cosmos/m3.png" className={style.m3}/>
                            <img src="./files/cosmos/m4.png" className={style.m4}/>
                        </div>
                    </div>
                    <div className={style.right}>
                        <div className={style.title}>
                            Всегда под рукой
                        </div>
                        <div className={style.pretitle}>
                            Мы создали удобное приложение, где вы сможете получить всю необходимую информацию о предстоящих мероприятиях и расписании групповых программ, а также записаться на них.
                        </div>
                        <div className={style.btns_application}>
                            <div className={style.btn_android}>
                                <i className="fa-brands fa-google-play"/>
                                <div className={style.text}>
                                    GET IT ON
                                    <label>Google Play</label>
                                </div>
                            </div>
                            <div className={style.btn_apple}>
                                <i className="fa-brands fa-apple"/>

                                <div className={style.text}>
                                    Download on the
                                    <label>App Store</label>
                                </div>
                            </div>
                        </div>
                        <div className={style.desc}>
                            В приложении также доступна подробная информация о каждом тренере и стоимости тренировок.
                        </div>
                        <div className={style.desc}>
                            Помимо этого, вы сможете ознакомиться с тарифами на приобретение клубной карты и оформить ее не выходя из дома.
                        </div>
                    </div>
                </div>
                <div className={style.contenttwo}>
                    <div className={style.blocks}>
                        {whys.map((block, index) => (
                            <div key={index} className={style.why}>
                                <div className={style.imgblock}  style={{backgroundImage: `url('files/kids/${block.image}')`}}></div>
                                <div className={style.desc}>
                                    <div className={style.title}>{block.title}</div>
                                    <div className={style.description}>{block.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cosmos