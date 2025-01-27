import style from './SmallHeaderStyle.module.scss'
import {Link} from "react-router-dom";
import {useEffect} from "react";
import {useState} from "react";
import { useNavigate } from "react-router-dom";

function SmallHeader(){

    const [openburger, setOpenburger] = useState(false)
    const navigate = useNavigate();

    const scrollToSectionAfterNavigate = (sectionId) => {
        navigate('/', { state: { scrollTo: sectionId } });
    };


    useEffect(() => {
        window.scrollTo(0, 0);
        if(openburger===true){
            document.body.style.position = 'fixed'
            document.body.style.top = '0px'
            document.body.style.Zindex = '-1'
        }else{
            document.body.style.position = 'relative'
            document.body.style.top = '0px'
            document.body.style.Zindex = '0'
        }
    }, [openburger]);

    return(
        <div className={style.main}>
            <div className={style.menumobile} style={(openburger)?{maxHeight:'100%', opacity: '1', marginTop: '0px', display:'flex'}:{}}>

                <div className={style.rightpart}>
                    <div className={style.board}>
                        <div onClick={() => scrollToSectionAfterNavigate('aboutus')} className={`${style.btn} ${style.left} ${style.down}`}>О нас<div className={style.border}></div>
                        </div>
                        {/*<div className={style.btn}>О нас<div className={style.border}></div></div>*/}
                        <Link to='/zones' className={`${style.btn} ${style.right} ${style.down}`}>Зоны<div className={style.border}></div></Link>
                        <Link to='/programs' className={`${style.btn} ${style.left} ${style.down}`}>Программы<div className={style.border}></div></Link>
                        <Link to='/treners' className={`${style.btn} ${style.right} ${style.down}`}>Тренеры<div className={style.border}></div></Link>
                        <Link to='/cards' className={`${style.btn} ${style.left} ${style.down}`}>Клубная карта<div className={style.border}></div></Link>
                        <Link to='/gallery' className={`${style.btn} ${style.right} ${style.down}`}>Галерея<div className={style.border}></div></Link>
                        <Link to='/contacts' className={`${style.btn} ${style.left}`}>Контакты<div className={style.border}></div></Link>
                        <Link to='/' className={`${style.btn} ${style.right}`}><div className={style.border}></div></Link>
                    </div>
                </div>
                <div className={style.up}></div>
            </div>
            <div className={style.container}>
                <Link to='/' className={style.leftpart}>
                    <img src="/files/header/logomain.svg" alt=""/>
                </Link>
                <div className={style.rightpart}>
                    <div className={style.burder} onClick={()=>setOpenburger(!openburger)} style={(openburger)?{rotate: '90deg', width: '70px'}:{rotate: '0deg'}}>
                        <div className={style.line} style={(openburger)?{backgroundColor:'#454545'}:{}}></div>
                        <div className={style.line} style={(openburger)?{backgroundColor:'#454545'}:{}}></div>
                        <div className={style.line} style={(openburger)?{backgroundColor:'#454545'}:{}}></div>
                    </div>
                    <div className={style.menu}>
                        {/*<Link to="/activegroup"  className={style.page}>*/}
                        {/*    <div className={style.text}>О нас</div>*/}
                        {/*    <div className={style.active}></div>*/}
                        {/*</Link>*/}
                        <div className={style.page} onClick={() => scrollToSectionAfterNavigate('aboutus')}>
                            <div className={style.text}>О нас</div>
                            <div className={style.active}></div>
                        </div>
                        <Link to='/zones' className={style.page}>
                            <div className={style.text}>Зоны</div>
                            <div className={style.active}></div>
                        </Link>
                        <Link to='/programs' className={style.page}>
                            <div className={style.text}>Программы</div>
                            <div className={style.active}></div>
                        </Link>
                        <Link to='/treners' className={style.page}>
                            <div className={style.text}>Тренеры</div>
                            <div className={style.active}></div>
                        </Link>
                        <Link to='/cards' className={style.page}>
                            <div className={style.text}>Клубная карта</div>
                            <div className={style.active}></div>
                        </Link>
                        <Link to='/gallery' className={style.page}>
                            <div className={style.text}>Галерея</div>
                            <div className={style.active}></div>
                        </Link>
                        <Link to='/contacts' className={style.page}>
                            <div className={style.text}>Контакты</div>
                            <div className={style.active}></div>
                        </Link>
                        <Link to='/' className={style.page}>
                            <div className={style.text}></div>
                            <div className={style.active}></div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SmallHeader