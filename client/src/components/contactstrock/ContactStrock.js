import style from './ContactStrockStyle.module.scss'

function ContactStrock(){
    return (
        <div className={style.main}>
            <div className={style.container}>
                <div className={style.start}>
                    <img src="files/header/logomain.svg" alt=""/>
                </div>
                <div className={style.elem}>
                    <div className={style.left}>
                        <i className="fa-solid fa-mobile-screen-button"/>
                    </div>
                    <div className={style.right}>
                        <p className={style.title}>ПОЗВОНИТЬ</p>
                        <p className={style.phone}>8(499)290-13-29</p>

                    </div>
                </div>
                <div className={style.elem}>
                    <div className={style.left}>
                        <i className="fa-regular fa-map"/>
                    </div>
                    <div className={style.right}>
                        <p className={style.title}>АДРЕС</p>
                        <p className={style.phone}>Республики 65/1</p>

                    </div>
                </div>
                <div className={style.elem}>
                    <div className={style.left}>
                        <i className="fa-solid fa-envelope-open-text"/>
                    </div>
                    <div className={style.right}>
                        <p className={style.title}>EMAIL</p>
                        <p className={style.phone}>info@hopefitness.ru</p>
                    </div>
                </div>
                <div className={style.next}>
                    <div className={style.up}>
                        <i className="fa-brands fa-vk"/>
                        <i className="fa-brands fa-telegram"/>
                        <i className="fa-brands fa-whatsapp"/>
                    </div>
                    <div className={style.down}>Пробное занятие</div>
                </div>
            </div>
        </div>
    )
}

export default ContactStrock
