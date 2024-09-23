import style from './OpenCompany.module.scss'

function OpenCompany ({com}){
    return (
        <div className={style.main}>
            <div className={style.leftpart}>
                <div className={style.logo}>
                    <img src={`/files/companies/${com.img}`} alt=""/>
                </div>
                <div className={style.title}>{com.name}</div>
                <a href={com.url} target="_blank" rel="noopener noreferrer" className={style.site}>
                    Перейти на сайт
                </a>
            </div>
            <div className={style.rightpart}>
                <div className={style.container}>
                    <div className={style.up}>
                        <div className={style.image} style={{backgroundImage: `url('/files/companies/aplication/${com.aplication}')`}}></div>
                        <div className={style.desc}>{com.desc}</div>
                    </div>

                    <div className={style.contacts}>
                        <div className={style.phone}>{com.phone}</div>
                        <div className={style.email}>{com.email}</div>
                        <div className={style.adress}>{com.adress}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OpenCompany