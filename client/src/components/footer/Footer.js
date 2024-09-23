import style from './FooterStyle.module.scss'
import {Link} from "react-router-dom";

function Footer (){
    return(
        <div className={style.main}>
            <div className={style.omediawater}></div>
            <div className={style.omedia}></div>
            <div className={style.container}>
                <div className={style.content}>
                    <div className={style.upper}>
                        <div className={style.column}>
                            {/*<div className={style.point}>*/}
                            {/*    <div className={style.next}></div>*/}
                            {/*    <div className={style.text}>О нас</div>*/}
                            {/*</div>*/}
                            <Link to='/activegroup' className={style.point}>
                                <div className={style.next}></div>
                                <div className={style.text}>Активы группы</div>
                            </Link>
                            <Link to='/allnews'  className={style.point}>
                                <div className={style.next}></div>
                                <div className={style.text}>Новости</div>
                            </Link>
                        </div>
                        {/*<div className={style.column}>*/}
                        {/*    <div className={style.point}>*/}
                        {/*        <div className={style.next}></div>*/}
                        {/*        <div className={style.text}>Стратегические приоритеты</div>*/}
                        {/*    </div>*/}
                        {/*    <div className={style.point}>*/}
                        {/*        <div className={style.next}></div>*/}
                        {/*        <div className={style.text}>История</div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        <div className={style.column}>
                            <Link to='/contacts'  className={style.point}>
                                <div className={style.next}></div>
                                <div className={style.text}>Контакты</div>
                            </Link>
                            <Link to='/vakansii'  className={style.point}>
                                <div className={style.next}></div>
                                <div className={style.text}>Вакансии</div>
                            </Link>
                        </div>
                    </div>
                    <div className={style.uppermobile}>
                            {/*<div className={style.point}>*/}
                            {/*    <div className={style.next}></div>*/}
                            {/*    <div className={style.text}>О нас</div>*/}
                            {/*</div>*/}
                            <Link to={'/activegroup'} className={style.point}>
                                <div className={style.next}></div>
                                <div className={style.text}>Активы группы</div>
                            </Link>
                            <Link to={'/allnews'} className={style.point}>
                                <div className={style.next}></div>
                                <div className={style.text}>Новости</div>
                            </Link>
                            {/*<div className={style.point}>*/}
                            {/*    <div className={style.next}></div>*/}
                            {/*    <div className={style.text}>Стратегические приоритеты</div>*/}
                            {/*</div>*/}
                            {/*<div className={style.point}>*/}
                            {/*    <div className={style.next}></div>*/}
                            {/*    <div className={style.text}>История</div>*/}
                            {/*</div>*/}
                            <Link to={'/contacts'} className={style.point}>
                                <div className={style.next}></div>
                                <div className={style.text}>Контакты</div>
                            </Link>
                            <Link to={'/vakansii'} className={style.point}>
                                <div className={style.next}></div>
                                <div className={style.text}>Вакансии</div>
                            </Link>
                    </div>
                </div>
                <div className={style.contacts}>
                    <div className={style.data}>
                        <div className={style.adress}>г.Сургут, ул. 30 лет Победы, 27/2</div>
                        <div className={style.phone}>+7(3462) 22-12-11 (6139)</div>
                        <div className={style.email}>site@in-news.ru</div>
                    </div>
                    <div className={style.sociality}>
                        <img src="/files/sociality/telegram.png" alt="" height='71px'/>
                        <img src="/files/sociality/youtube.png" alt=""/>
                        <img src="/files/sociality/vk.png" alt=""/>
                        <img src="/files/sociality/ok.png" alt=""/>
                    </div>
                    <div className={style.autor}>
                        <div className={style.copyright}>

                        </div>
                        <div className={style.description}>
                            <div className={style.text}>"Сетевое издание "ОМЕДИА!"</div>
                            <div className={style.text}>Все права защищены</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer