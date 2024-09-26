import style from './Zone.module.scss'
import {useState} from "react";

function ZonesBlock () {


    const mans = [
        {
            name:'Максим Гамецкий',
            group: 'Силовая',
            image: '1231.jpg',
            age: '12 лет'
        },
        {
            name:'Анна Либуркина',
            group: 'Функциональные тренировки',
            image: '1232.jpg',
            age: '7 лет'
        },
        {
            name:'Татьяна Антоненко',
            group: 'Кроссфит',
            image: '1233.jpg',
            age: '4 года'
        },
        {
            name:'Александр Солянников',
            group: 'Тяжелая атлетика',
            image: '1234.jpg',
            age: '4 года'
        },
        {
            name:'Елена Баскакова',
            group: 'Бодибилдинг',
            image: '1235.jpg',
            age: '4 года'
        },
        {
            name:'Дмитрий Перминов',
            group: 'Бокс',
            image: '1236.jpg',
            age: '8 лет'
        }
    ]

    const [arrmans, setArrmans] = useState(mans)

    const [start, setStart] = useState(1)
    const [finish, setFinish] = useState(4)


    const nextMan = step => {
        let newarr
        if(step === 'next'){
            if(finish===arrmans.length - 1){
                newarr = [...arrmans]
                const firstElement = newarr.shift();
                newarr.push(firstElement);
                setArrmans(newarr);
            }else{
                setStart(start+1)
                setFinish(finish+1)
            }
        }else{
            if(start===0){
                newarr = [...arrmans]
                const lastElement = newarr.pop();
                newarr.unshift(lastElement);
                setArrmans(newarr);
            }else{
                setStart(start-1)
                setFinish(finish-1)
            }
        }
    }

    return (
        <div className={style.main}>
            <div className={style.slashone}></div>
            <div className={style.slashtwo}></div>
            <div className={style.slashthree}></div>
            <div className={style.container}>
                <div className={style.title}>
                    <div className={style.text}>Наши тренеры</div>
                </div>
                <div className={style.slider}>
                    <div className={style.nextbtn} onClick={nextMan}><i className="fa-solid fa-angles-left"/></div>
                    <div className={style.content}>
                        {arrmans.map((man, indexman)=> {
                            if(indexman >= start && indexman <= finish){
                                return(
                                    <div key={indexman} className={style.man}
                                         style={{backgroundImage: `url('/images/${man.image}')`}}>
                                        <div className={style.active}>
                                            <div className={style.group}>{man.group}</div>
                                            <div className={style.name}>
                                                <div className={style.fio}>{man.name}</div>
                                                <div className={style.age}>Тренерский стаж - {man.age}</div>
                                            </div>
                                            <div className={style.btn}>Записаться</div>
                                        </div>
                                    </div>
                                )
                            }

                        })}

                    </div>
                    <div className={style.nextbtn} onClick={()=>nextMan('next')}><i className="fa-solid fa-angles-right"/></div>
                </div>
            </div>
            <div className={style.more}><div className={style.btn}>Подробнее</div></div>
        </div>
    )
}

export default ZonesBlock