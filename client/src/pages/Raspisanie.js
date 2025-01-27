import style from './styles/ContactsPage.module.scss';
import Footer from "../components/footer/Footer";
import SmallHeader from "../components/newheader/SmallHeader";
import { useEffect, useState } from "react";
import WriteModal from "../components/modalwin/WriteModal";
import PostResume from "../components/forms/PostResume";
import MyMap from "../components/map/Map";

function Raspisanie() {
    const [activemodal, setActivemodal] = useState(false);
    const [data, setData] = useState('');

    const makeadress = {
        name: 'Сургут',
        phone: '8(499)290-13-29',
        adress: 'Республики 65/1',
        email: 'info@hopefitness.ru',
        socialys: [
            { name: 'vk', url: 'https://vk.com/' },
            { name: 'telegram', url: 'https://vk.com/telegram' },
            { name: 'whatsapp', url: 'https://vk.com/whatsapp' }
        ]
    };

    // Dynamically load the widget script when the component is mounted
    useEffect(() => {
        const script = document.createElement('script');
        script.id = 'fitnesskit_lesson';
        script.src = 'https://hope.fitnesskit-admin.ru/widget/mount/widget-lesson.js';
        script.async = true;
        script.setAttribute('data-id', '2');
        script.setAttribute('data-server', 'hope');

        const contactsContainer = document.querySelector(`.${style.contacts}`);
        if (contactsContainer) {
            contactsContainer.appendChild(script);
        }

        return () => {
            // Cleanup: remove the script if the component is unmounted
            if (contactsContainer) {
                const existingScript = document.getElementById('fitnesskit_lesson');
                if (existingScript) {
                    contactsContainer.removeChild(existingScript);
                }
            }
        };
    }, []);

    return (
        <div className={style.bodymain}>
            <WriteModal
                activemodal={activemodal}
                setActivemodal={setActivemodal}
                data={<PostResume man={data} setActivemodal={setActivemodal} />}
                setData={setData}
            />
            <SmallHeader />

            <div className={style.contacts} style={{ height: '100%',}}>
                {/* Widget will be injected here */}
                <div className={style.widgetContainer} style={{height: '100%'}}></div>
            </div>
            <Footer />
        </div>
    );
}

export default Raspisanie;
