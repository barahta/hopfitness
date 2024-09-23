import style from './PostContactStyle.module.scss'
import {useState} from "react";
import useNotification from "../../hooks/useNotification.hook";
import Nota from "./Nota";
import {useMessage} from "../../hooks/message.hook";

function PostContact ({man,setActivemodal}){

    const [myname, setMyname] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [text, setText] = useState('')
    const { notifications, addNotification } = useNotification();
    const [active, setActive] = useState(false)

    const message = useMessage();

    const postMess = () => {
        if(myname.length>0 && phone.length>0 && email.length>0 && text.length>0){
            setActivemodal(false)
            setMyname('')
            setPhone('')
            setEmail('')
            setText('')
            message('Ваше письмо отправлено')
        }
    }

    return (
        <div className={style.main}>
            <input onChange={e=>setMyname(e.target.value)} value={myname} type="text" className={style.forminput} placeholder='Как Вас зовут'/>
            <input onChange={e=>setPhone(e.target.value)} value={phone} type="number" className={style.forminput} placeholder='Телефон для связи'/>
            <input onChange={e=>setEmail(e.target.value)} value={email} type="text" className={style.forminput} placeholder='Контактный email'/>

            <div className={style.title}>Ваше сообщение</div>
            <textarea
                onChange={(e) => setText(e.target.value)}
                className={style.formtext}
                value={text} // Убедитесь, что значение связано с состоянием
            />
            <div className={style.btnpost} onClick={postMess}>Отправить</div>
        </div>
    )
}

export default PostContact