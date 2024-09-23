import style from './ProjectsStyle.module.scss'

function Projects () {
    return(
        <div className={style.main}>
            <div className={style.container}>
                <div className={style.title}>наши проекты</div>
                <div className={style.sphere}>
                    <div className={style.text}>Проект testlogo.ru</div>
                    <img src="/files/logos/roundlogo.png" alt=""/>
                </div>
                <div className={style.sphere}>
                    <div className={style.text}>Проект testlogo.ru</div>
                    <img src="/files/logos/roundlogo.png" alt=""/>
                </div>
                <div className={style.sphere}>
                    <div className={style.text}>Проект testlogo.ru</div>
                    <img src="/files/logos/roundlogo.png" alt=""/>
                </div>
                <div className={style.sphere}>
                    <div className={style.text}>Проект testlogo.ru</div>
                    <img src="/files/logos/roundlogo.png" alt=""/>
                </div>
                <div className={style.sphere}>
                    <div className={style.text}>Проект testlogo.ru</div>
                    <img src="/files/logos/roundlogo.png" alt=""/>
                </div>
                <div className={style.sphere}>
                    <div className={style.text}>Проект testlogo.ru</div>
                    <img src="/files/logos/roundlogo.png" alt=""/>
                </div>

            </div>
        </div>
    )
}

export default Projects