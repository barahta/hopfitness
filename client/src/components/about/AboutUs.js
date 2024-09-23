import style from './AboutUsStyle.module.scss'

function AboutUs () {
    return(
        <div className={style.main}>
            <div className={style.container}>
                <div className={style.open}>
                    <div className={style.iopen}></div>
                    О нас
                </div>
                <div className={style.text}>«Omedia!» — крупнейший медиахолдинг России, более 25 лет вносит вклад в формирование индустрии на основе лучшей медийной и технологической экспертизы. Мы создаём качественный востребованный контент во всех медиасредах и формируем мощный креативный ресурс.</div>
            </div>
        </div>
    )
}

export default AboutUs