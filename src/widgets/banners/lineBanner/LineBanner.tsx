import '@/widgets/banners/lineBanner/styles/linebanner.css';

const LineBanner = () => {
    return (
        <div className="banner-line">
            <span className="banner-line_span">
                🔥 Разыгрываем 3000₽ на счет за подписку на наш телеграмм{' '}
                <a href="https://t.me/robivoxnews" target="_blank">
                    @robivoxnews
                </a>
            </span>
        </div>
    );
};

export { LineBanner };
