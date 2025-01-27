import style from './CreateCard.module.scss'
import {useMessage} from "../../hooks/message.hook";

function CreateCard({ card,setActivemodal }){
    const message = useMessage();

    const postMess = async () => {
        setActivemodal(false)
        message('Заявка на бронь успешно отправлена')
    }

    return(
        <div className={style.main}>
            <div className={style.window}>
                <div className={style.application}>
                    <div className={style.card}>
                        <div className={style.pup}></div>
                        <div className={style.title}>{card.name}</div>
                        <div className={style.dup}></div>
                    </div>
                    <div className={style.name}>{card.title}</div>
                    <div className={style.price}>{card.price}</div>
                    <div className={style.desc}>{card.desc}</div>
                    <div className={style.content}>
                        {card.content&&card.content.map((point, indexPoint) => (
                            <div key={indexPoint} className={style.point}><div className={style.sphere}></div>{point}</div>
                        ))}
                    </div>
                </div>
                <div className={style.form}>
                    <div className={style.title}>Забронировать</div>
                    <label>Введите имя</label>
                    <input type="text" name='name' placeholder='Имя'/>
                    <label>Введите телефон</label>
                    <input type="text" name='name' placeholder='Введите телефон'/>
                    <div className={style.btn} onClick={postMess}>Отправить</div>
                </div>
            </div>
        </div>
    )
}

export default CreateCard