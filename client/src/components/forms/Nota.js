import style from './NotaStyle.module.scss'
import {useEffect} from "react";

function Nota ({active, setActive, mess}) {

    useEffect(()=>{
        setTimeout(()=>{
            setActive(false)
        },2000)
    }, [])

    return(
        <div className={style.main} style={(active)?{display: 'flex'}:{display: 'none'}}>{mess}</div>
    )
}

export default Nota