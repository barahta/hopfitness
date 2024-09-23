import style from './NewsPostStyle2.module.scss'

function NewsPost ({post, setActivemodal, activemodal, data, setData}){

    const openPost = (post) => {
        setActivemodal(true)
        setData(post)
    }

    return (
        <div className={style.news_block} onclick={()=>openPost(post)}>
            <div className={style.content}>
                <div className={style.img}><img src={`/files/news/${post.url}`} alt=""/></div>

                {/*<div className={style.img} style={{backgroundImage: `url('/files/news/${post.url}')`}}></div>*/}
                <div className={style.date}>{post.date}</div>
                <div className={style.name}>{(post.name.length > 80)?post.name.slice(0, 80) + '...':post.name}</div>
                <div className={style.active}></div>
            </div>
            <div className={style.btnblock} onclick={()=>openPost(post)}>
                <div className={style.btn}>
                    <div className={style.next}></div>
                    <div className={style.text}>Открыть</div>
                </div>
            </div>

        </div>
    )
}

export default NewsPost