import style from './ShowActivesStyle.module.scss'

function ShowActives ({actvs}){
    return (
        <div className={style.actv_block}>
            <div className={style.container}>
                {(actvs!=='')&&actvs.actives.map((block, index)=>(
                    <div className={style.btn}>{block}</div>
                ))}
            </div>

        </div>
    )
}

export default ShowActives