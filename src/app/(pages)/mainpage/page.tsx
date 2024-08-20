'use client';
import '@/app/(pages)/mainpage/styles/mainpage.css';
import { Article } from '@/widgets/article/Article';
import { FaqWidget } from '@/widgets/faq-widget/FaqWidget';
import { ShareWidget } from '@/widgets/share-widget/ShareWidget';
import { VoicesBlocks } from '@/widgets/voicesblocks/VoicesBlocks';
import { FormVoiceOver } from '@/widgets/forms/FormVoiceOver';
import { useState } from 'react';

const articleProps = {
    about: {
        title: 'Бот озвучивает текст, как живой человек',
        paragraphs: [
            'Robivox – это сервис для озвучки текста реалистичным голосом онлайн. Голос создан искусственным интеллектом на основе настоящей записанной речи диктора. Десятки часов вычислений, позволили добиться непревзойденного качества синтезируемого голоса. Голоса со статусом PRO практически невозможно отличить от живой речи человека.',
            'Используйте наш сервис для озвучки видео роликов, как и сотни YouTube каналов, которые уже пользуются Robivox. Наши дикторские голоса подойдут для озвучки автоответчиков компании, голосового меню IVR, а также записи голоса для автообзвона. Попробуйте протестировать сервис прямо сейчас и бесплатно, за регистрацию дарим 5 бонусных рублей, а это примерно 10 минут озвучки обычным голосом и 2 минуты голосом PRO.',
        ],
    },
    howToUse: {
        title: 'Где можно использовать голос бота',
        paragraphs: [
            '<ol><li>Для озвучивания видеороликов на YouTube и других социальных сетей, озвучка подкастов, при создании новостного или образовательного контента. Смотреть такое видео гораздо интересней чем просто читать субтитры.</li><li>Для озвучивания приложений и компьютерных игр.</li><li>Для записи голосовых приветствий на автоответчик и меню IVR.</li><li>В робототехнике и гаджетах, например для озвучивания пылесосов.</li><li>Для озвучивания технической документации, презентаций и аудиокниг.</ol>',
            'Преобразование текста в речь используется повсеместно и в совершенно разных сферах.',
        ],
    },
};

function MainPage() {
    const [author, setAuthor] = useState<string>('Алена');

    return (
        <div className="main">
            <FormVoiceOver edte={setAuthor} editedaut={author} />
            <Article props={articleProps.about} />
            <VoicesBlocks edite={setAuthor} />
            <Article props={articleProps.howToUse} />
            <ShareWidget />
            <FaqWidget />
        </div>
    );
}

export default MainPage;
