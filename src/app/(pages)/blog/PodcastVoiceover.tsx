import '@/app/(pages)/blog/styles/blog.css';
import Link from 'next/link';

const PodcastVoiceoverPage = () => {
    return (
        <div className="blog_podcast-voiceover">
            <div className="blog_podcast-voiceover__content">
                <div className="blog__title">
                    <h1>Озвучка подкастов</h1>
                </div>
                <div className="blog__body">
                    <p>
                        С каждым годом технологии синтеза речи становятся все более совершенными. Послушайте, как звучит
                        подкаст Джо Рогана в озвучке искусственного интеллекта.
                    </p>
                    <p>
                        В этом видео мы демонстрируем возможности синтезатора речи Robivox. Голос передает натуральные
                        эмоции, а вопросительные и утвердительные фразы звучат так естественно, что парой, сложно
                        отличить их от голоса настоящего человека.
                    </p>
                    <div className="adaptive-video">
                        <iframe
                            data-id="Neagaq2ihC4"
                            className="yt_player_iframe"
                            src="https://www.youtube.com/embed/Neagaq2ihC4?showinfo=0&amp;modestbranding=1&amp;color=white&amp;rel=0&amp;enablejsapi=1"
                            width="100%"
                            height="315"
                        ></iframe>
                    </div>
                    <p>Озвучка подкастов может быть сделана и женским голосом.</p>
                    <div className="adaptive-video">
                        <iframe
                            data-id="5mETy732l7Y"
                            className="yt_player_iframe"
                            src="https://www.youtube.com/embed/5mETy732l7Y?showinfo=0&amp;modestbranding=1&amp;color=white&amp;rel=0&amp;enablejsapi=1"
                            width="100%"
                            height="315"
                        ></iframe>
                    </div>
                    <br />
                    <br />
                    <h2>Как озвучить подкаст?</h2>
                    <p>
                        Перейдите на главную страницу сервиса <a href="https://robivox.ru">синтезатора речи</a> и далее:
                    </p>
                    <ul>
                        <li>Выберите язык на котором нужно сделать озвучку</li>
                        <li>Выберите голос</li>
                        <li>Введите текст</li>
                        <li>Нажмите кнопку &quot;Синтезировать речь&quot;</li>
                    </ul>
                    <p>Скриншот главной страницы:</p>
                    <img
                        width="1024"
                        alt="Озвучка подкастов"
                        src="/img/friocoiwot4axdaj85m8qg5zqda31szj.png"
                        height="551"
                        title="Озвучка подкастов"
                    ></img>
                    <br />
                    <br />
                    <br />
                    <h2>Кому нужна озвучка подкастов?</h2>
                    <p>
                        Для людей которые переводят подкасты иностранных блогеров, озвучка настоящим диктором не всегда
                        целесообразна.
                    </p>
                    <p>
                        Для создания качественного звука можно использовать возможности искусственного интеллекта.
                        Сервис Robivox позволяет озвучивать текст практически на любом иностранном языке, что дает
                        возможность переводить и озвучивать свой контент на разные языки и расширять аудиторию.
                    </p>
                    <p>
                        <a href="https://robivox.ru/login/?register=yes">Зарегистрируйтесь</a> в нашем сервисе прямо
                        сейчас и получите 10 минут озвучки в подарок!{' '}
                    </p>
                </div>
                <div className="blog__similar">
                    <div className="blog__similar__title">
                        <h3>Вам также может понравиться</h3>
                    </div>
                    <div className="blog__similar__list">
                        <Link href={'/blog/online-answering-machine-recording-for-the-organization-phone/'}>
                            <div className="blog__similar__list-item_img">
                                <img src="/img/s7epbc5r4fxsn5dgv4g4866zy1ko9gxv.jpg" alt="" />
                            </div>
                            <div className="blog__similar__list-item_title">
                                Онлайн запись автоответчика для телефона организации
                            </div>
                        </Link>
                        <Link href={'/blog/online-recording-of-ivr-voice-menu-for-telephony/'}>
                            <div className="blog__similar__list-item_img">
                                <img src="/img/j81s3p3z0tk2rkwsxoox7crciz83rum2.jpg" alt="" />
                            </div>
                            <div className="blog__similar__list-item_title">
                                Онлайн запись голосового меню IVR для телефонии
                            </div>
                        </Link>
                        <Link href={'/blog/voice-acting-of-large-texts-from-2000-characters-online/'}>
                            <div className="blog__similar__list-item_img">
                                <img src="/img/uwgii27hfr4kf262p13cwn43u6xi4mx3.jpg" alt="" />
                            </div>
                            <div className="blog__similar__list-item_title">
                                Озвучка больших текстов (от 2000 символов) онлайн
                            </div>
                        </Link>
                        <Link href={'/blog/news-voiceover/'}>
                            <div className="blog__similar__list-item_img">
                                <img src="/img/3uehzhon0iw564w39mkeivhfttfq5fjz.jpg" alt="" />
                            </div>
                            <div className="blog__similar__list-item_title">Озвучка новостей</div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { PodcastVoiceoverPage };
