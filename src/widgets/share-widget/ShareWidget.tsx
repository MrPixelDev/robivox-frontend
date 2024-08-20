import '@/widgets/share-widget/styles/sharewidget.css';

const ShareWidget = () => {
    return (
        <div className="share-widget">
            <div className="share-widget__title widget__title--grey">Поделиться ссылкой на сервис с друзьями:</div>
            <div className="share-widget__socials">
                <a
                    href="https://vk.com/share.php?url=https://robivox.ru/&amp;title=robivox&amp;utm_source=share2"
                    target="_blank"
                >
                    <img src="/ico/vk.svg" alt="" />
                </a>
                <a
                    href="https://www.facebook.com/sharer.php?src=sp&amp;u=https://robivox.ru/&amp;title=robivox&amp;utm_source=share2"
                    target="_blank"
                >
                    <img src="/ico/facebook.svg" alt=""></img>
                </a>
                <a
                    href="https://connect.ok.ru/offer?url=https://robivox.ru/&amp;title=robivox&amp;utm_source=share2"
                    target="_blank"
                >
                    <img src="/ico/odn.svg" alt=""></img>
                </a>
                <a
                    href="https://t.me/share/url?url=https://robivox.ru/&amp;text=robivox&amp;utm_source=share2"
                    target="_blank"
                >
                    <img src="/ico/tg.svg" alt=""></img>
                </a>
                <a href="viber://forward?text=robivox https://robivox.ru/&amp;utm_source=share2" target="_blank">
                    <img src="/ico/wiber.svg" alt=""></img>
                </a>
                <a
                    href="https://api.whatsapp.com/send?text=robivox https://robivox.ru/&amp;utm_source=share2"
                    target="_blank"
                >
                    <img src="/ico/whatsapp.svg" alt=""></img>
                </a>
                <a id="copyLink">
                    <img src="/ico/other.svg" alt="другие"></img>
                </a>
            </div>
        </div>
    );
};

export { ShareWidget };
