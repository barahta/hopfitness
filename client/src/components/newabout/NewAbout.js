import style from './NewAboutStyle.module.scss'

function NewAbout(){
    return (
        <div className={style.main}>
            <div className={style.containter}>
                <div className={style.btn}>
                    <div className={style.up}>
                        {/*<div className={style.ic}></div>*/}
                        <div className={style.abouttext}>О нас</div>
                    </div>
                    <div className={style.img}></div>
                    <div className={style.active}></div>
                </div>
                <div className={style.text}>
                    <p>Проект «OMEDIA! Настоящие» — молодой, но объединяет
                        множество знакомых и любимых жителям Югры и Сургута
                        площадок
                    </p>
                    <p>
                        Наши принципы – честность, открытость, актуальность и
                        помощь тем, кто в ней нуждается. Поэтому компания
                        активно участвует и сама реализует социальные проекты.
                        Наш постоянный партнер — благотворительный фонд
                        «Траектория надежды».
                        Информационная политика — обязательная проверка фактов,
                        оперативность, «народные новости» - то, что действительно
                        волнует нашу аудиторию
                    </p>
                </div>
            </div>
        </div>
    )
}

export default NewAbout