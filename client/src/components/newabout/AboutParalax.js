import style from './AboutParalax.module.scss'
import {useState} from "react";
function AboutParalax () {



    const whys = [
        {
            title: 'круглосуточный',
            image: '6.jpg',
            desc: 'Фитнес центр'
        },
        {
            title: 'Места хватит для всех',
            image: '1.jpg',
            desc: 'Суммарно более 2 500 м²'
        },
        {
            title: 'Доверьте автомобиль нам',
            image: '4.jpg',
            desc: 'У нас собственная парковка с системой видеонаблюдения'
        },
        {
            title: 'Групповые программы',
            image: '2.jpg',
            desc: 'Авторские программы от ведущих тренеров города'
        },
        {
            title: 'Контроль доступа',
            image: '3.jpg',
            desc: 'Система идентификации посредством RFID- браслетов'
        },
        {
            title: 'Инновационные технологии',
            image: '5.jpg',
            desc: 'В клубе действует система умного дома'
        }
    ]

    const [activeblock, setActiveblock] = useState('')

    return(
        <div className={style.main}>
            <div className={style.slash}></div>
            <div className={style.paralax}>
            </div>
            <div className={style.container}>
                <div className={style.content}>
                    <div className={style.right}>
                        <div className={style.title}>
                            О НАС
                        </div>
                        <div className={style.desc}>
                            Фитнес-центр премиум-класса с эксклюзивным уровнем сервиса!
                        </div>
                        <div className={style.desc}>
                            Оригинальный дизайн, современные технологии, новейшее оборудование центра позволят сделать Вам уверенный шаг к новым достижениям!
                        </div>
                        <div className={style.desc}>
                            Быть членом клуба Hope Fitness —значит получить доступ к неограниченным возможностям фитнеса формата "Премиум"
                        </div>
                    </div>
                    <div className={style.left}>
                        <div className={style.images}>
                            <img src="./files/header/logomain.svg" className={style.logo}/>
                        </div>
                    </div>
                </div>
                <div className={style.contenttwo}>
                    <div className={style.blocks}>
                        {whys.map((block, index) => (
                            <div key={index} className={style.why}>
                                {/*<div className={style.imgblock}  style={{backgroundImage: `url('files/kids/${block.image}')`}}></div>*/}
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

export default AboutParalax