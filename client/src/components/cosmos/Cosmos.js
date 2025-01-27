import style from './Cosmos.module.scss'
import {useState} from "react";
function Cosmos () {

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
                            <a href="https://play.google.com/store/apps/details?id=ru.razomovsky.hopefitness" target="_blank" className={style.btn_android}>
                                <i className="fa-brands fa-google-play"/>
                                <div className={style.text}>
                                    GET IT ON
                                    <label>Google Play</label>
                                </div>
                            </a>
                            <a href="https://apps.apple.com/us/app/hope-fitness/id1490861684" target="_blank" className={style.btn_apple}>
                                <i className="fa-brands fa-apple"/>

                                <div className={style.text}>
                                    Download on the
                                    <label>App Store</label>
                                </div>
                            </a>
                        </div>
                        <div className={style.desc}>
                            В приложении также доступна подробная информация о каждом тренере и стоимости тренировок.
                        </div>
                        <div className={style.desc}>
                            Помимо этого, вы сможете ознакомиться с тарифами на приобретение клубной карты и оформить ее не выходя из дома.
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Cosmos