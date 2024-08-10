import '@/widgets/voicesblocks/styles/voicesblocks.css';
import { Article } from '../article/Article';

const articleProps = {
    examples: {
        title: 'Примеры голосов для озвучки',
        paragraphs: ['Послушайте, на что способна наша нейросеть.'],
    },
    howToUse: {
        title: 'Как пользоваться синтезатором речи',
        paragraphs: [
            '<ol><li>Введите текст форму на главной странице сайта</li><li>Нажмите кнопку «синтезировать речь»</li><li>Скачайте файл в MP3 или WAV</li></ol>',
        ],
    },
};

const blockContent = [
    {
        name: 'Алена',
        pol: 'w',
        language: 'ru',
        img: '/img/s41sn7gcxeihsx43wem9oyz1lx8kqvil.png',
        audio: '',
    },
    { name: 'Алиса', pol: 'w', language: 'ru', img: '/img/women.jpg', audio: '' },
    {
        name: 'Dariya',
        pol: 'w',
        language: 'ru',
        img: '/img/mv7wolrb1mbz1piwjr35daspwaaqopmn.png',
        audio: '',
    },
    {
        name: 'Джейн',
        pol: 'w',
        language: 'ru',
        img: '/img/iq6idj936nttbsshcs1f3wzh2hfonqlh.png',
        audio: '',
    },
    {
        name: 'Dmitry',
        pol: 'm',
        language: 'ru',
        img: '/img/hh54gp74si39ywbs0k2sj2ov36xix4ig.png',
        audio: '',
    },
    {
        name: 'Захар',
        pol: 'm',
        language: 'ru',
        img: '/img/7tx9vfb1lgc9rw228lgg64nzt25m5xj2.jpg',
        audio: '',
    },
    {
        name: 'Коля',
        pol: 'm',
        language: 'ru',
        img: '/img/698pkssttic3p9o1tx16wieb0yoe6uuw.jpg',
        audio: '',
    },
    {
        name: 'Оксана',
        pol: 'w',
        language: 'ru',
        img: '/img/mxryro096za80ax3vqt8ng46kweqb2p5.png',
        audio: '',
    },
    {
        name: 'Svetlana',
        pol: 'w',
        language: 'ru',
        img: '/img/0fcvtfzygqmiem4ahefs577orbn1zx51.png',
        audio: '',
    },
    {
        name: 'Филипп',
        pol: 'w',
        language: 'ru',
        img: '/img/83yogb27z5cf60ltjfx8yh0rd3czrytp.jpg',
        audio: '',
    },
    {
        name: 'Эрмил',
        pol: 'w',
        language: 'ru',
        img: '/img/e04idtcnsgqzb1ewaeqv28xi7nmokmwi.png',
        audio: '',
    },
];

const VoicesBlocks = () => {
    return (
        <div className="voicesblocks">
            <Article props={articleProps.examples} />
            <div className="voiceblocks_content">
                {blockContent.map((b, i) => {
                    return (
                        <div className="voiceblock" key={i}>
                            <div className="voiceblock_wrapper">
                                <div className="voiceblock__image">
                                    <img src={b.img} alt={b.name} />
                                    <div
                                        className={`voiceblock__image__flag voiceblock__image__flag--${b.language}`}
                                    ></div>
                                    {b.audio && (
                                        <div className="play-button">
                                            <audio src={b.audio}></audio>
                                        </div>
                                    )}
                                </div>
                                <div className="voiceblock__name">{b.name}</div>
                                <div className="voiceblock__button">Выбрать голос</div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <Article props={articleProps.howToUse} />
        </div>
    );
};

export { VoicesBlocks };
