import style from './styles/ProgramsPage.module.scss'
import Footer from "../components/footer/Footer";
import SmallHeader from "../components/newheader/SmallHeader";
import {useEffect, useRef, useState} from "react";
import WriteModal from "../components/modalwin/WriteModal";
import PostResume from "../components/forms/PostResume";
import {Link} from "react-router-dom";
import SliderPrograms from "../components/programs/SliderPrograms";
import TrenerSlider from "../components/treners/TrenerSlider";
import NewsService from "../services/NewsService";

function TrenersPage (){

    const [activemodal, setActivemodal] = useState(false);
    const [data, setData] = useState('');

    const mans = [
        { name: 'Максим Гамецкий', group: 'Силовая', image: '1231.jpg', age: '12 лет' },
        { name: 'Анна Либуркина', group: 'Функциональные тренировки', image: '1232.jpg', age: '7 лет' },
        { name: 'Татьяна Антоненко', group: 'Кроссфит', image: '1233.jpg', age: '4 года' },
        { name: 'Александр Солянников', group: 'Тяжелая атлетика', image: '1234.jpg', age: '4 года' },
        { name: 'Елена Баскакова', group: 'Бодибилдинг', image: '1235.jpg', age: '4 года' },
        { name: 'Дмитрий Перминов', group: 'Бокс', image: '1236.jpg', age: '8 лет' }
    ];

    const trainers = [
        {
            name: 'Персональные тренеры',
            desc: 'Персональный тренер подбирает упражнения и составляет тренировочную программу в соответствии с целями и состоянием здоровья клиента, корректирует ее, мотивирует клиента заниматься регулярно. Так же выступает в роли консультанта по питанию.',
            group: [
                { name: 'Максим Гамецкий', group: 'Силовая', image: '1231.jpg', age: '12 лет' },
                { name: 'Анна Либуркина', group: 'Функциональные тренировки', image: '1232.jpg', age: '7 лет' },
                { name: 'Татьяна Антоненко', group: 'Кроссфит', image: '1233.jpg', age: '4 года' },
                { name: 'Александр Солянников', group: 'Тяжелая атлетика', image: '1234.jpg', age: '4 года' },
                { name: 'Елена Баскакова', group: 'Бодибилдинг', image: '1235.jpg', age: '4 года' },
                { name: 'Дмитрий Перминов', group: 'Бокс', image: '1236.jpg', age: '8 лет' }
            ]
        },
        {
            name: 'Тренеры групповых программ',
            desc: 'Групповые тренировки — одно из самых популярных направлений в нашем фитнес-клубе. Такие занятия могут быть абсолютно разной направленности: от степа и пилатеса до танцевальных упражнений и даже тренировок с элементами бокса.',
            group: [
                { name: 'Максим Гамецкий', group: 'Силовая', image: '1231.jpg', age: '12 лет' },
                { name: 'Анна Либуркина', group: 'Функциональные тренировки', image: '1232.jpg', age: '7 лет' },
                { name: 'Татьяна Антоненко', group: 'Кроссфит', image: '1233.jpg', age: '4 года' },
                { name: 'Александр Солянников', group: 'Тяжелая атлетика', image: '1234.jpg', age: '4 года' },
                { name: 'Елена Баскакова', group: 'Бодибилдинг', image: '1235.jpg', age: '4 года' },
                { name: 'Дмитрий Перминов', group: 'Бокс', image: '1236.jpg', age: '8 лет' }
            ]
        },
    ]
    const [grouplist, setGroupsList] = useState([])
    const [list, setList] = useState([])
    const [listGroup, setListGroup] = useState([])
    const getTrenersMan = async () => {
        try{
            const {data} = await NewsService.getTrenersMan({capter: 'hopefitness'})
            console.log(data)
            if(data){
                console.log(data)

                if(listGroup.length>0){
                    const newtreners = []
                    listGroup.forEach(group=>{
                        let newarr = {
                            name: group.name,
                            desc: group.desc,
                            group: []
                        }
                        data.forEach(man=>{
                            if(man.group === group.name){
                                newarr.group.push(man)
                            }
                        })
                        newtreners.push(newarr)
                    })
                    newtreners.reverse()
                    setList(newtreners)
                }


            }
        }catch(e){
            console.log(e)
        }
    }
    const getTrenersGroup = async () => {
        try{
            const {data} = await NewsService.getTrenersGroup({capter: 'hopefitness'})
            setListGroup(data)
        }catch(e){
            console.log(e)
        }
    }
    useEffect(()=>{
        getTrenersGroup()
    },[])
    useEffect(()=>{
        getTrenersMan()
    },[listGroup])
    return (
        <div className={style.bodymain}>
            <WriteModal activemodal={activemodal} setActivemodal={setActivemodal} data={<PostResume man={data} setActivemodal={setActivemodal} />} setData={setData} />
            <SmallHeader />
            <div className={style.page}>
                <div className={style.container}>
                    <div className={style.title}></div>
                    <div className={style.block}>
                        {list.map((train, indexSlider)=>(
                            <TrenerSlider key={indexSlider} group={train}/>
                        ))}

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default TrenersPage;