import style from './Nav.module.scss'
import {useState} from "react";

function Nav(){

    const [runblack, setRunblack] = useState(false)

    const handleMouseEnter = () => {
        setRunblack(true);
    };

    const handleMouseLeave = () => {
        setRunblack(false);
    };

    return(
        <div className={style.main}>
            <div className={style.btn} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                Активы холдинга
                <div className={style.active}></div>
            </div>
            <div className={style.btn} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>О нас
                <div className={style.active}></div>
            </div>
            <div className={style.btn} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Новости
                <div className={style.active}></div>
            </div>
            <div className={style.btn} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Контакты
                <div className={style.active}></div>
            </div>
            <div className={style.blackboard} style={(runblack)?{display: 'flex'}:{display: 'none'}}></div>
        </div>
    )
}

export default Nav