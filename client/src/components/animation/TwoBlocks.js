import style from './TwoBlocksStyle.module.scss'

function TwoBlocks (){
    return(
        <div className={style.main}>
            <div className={style.flyleft}></div>
            <div className={style.flyright}></div>
        </div>


    )
}

export default TwoBlocks