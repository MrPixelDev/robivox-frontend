import '@/widgets/footer/styles/footers.css';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer_section">
                    <div className="section_header">
                        <span className="section_header__text">Что можно озвучить</span>
                    </div>
                    <div className="section_links">
                        <div className="section_links__link">
                            <Link href={'/blog/podcast-voiceover'}>
                                <span className="link">Озвучка подкастов</span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="footer_section">
                    <div className="section_header">
                        <span className="section_header__text">О нас</span>
                    </div>
                    <div className="section_links">
                        <div className="section_links__link">
                            <Link href={'/faq'}>
                                <span className="link">FAQ</span>
                            </Link>
                        </div>
                        <div className="section_links__link">
                            <Link href={'/payment'}>
                                <span className="link">Тарифы</span>
                            </Link>
                        </div>
                        <div className="section_links__link">
                            <a href="https://t.me/robivox_bot">
                                <span className="link">Задать вопрос</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer_section">
                    <div className="section_header">
                        <span className="section_header__text">Информация</span>
                    </div>
                    <div className="section_links">
                        <div className="section_links__link">
                            <Link href={'/confidential'}>
                                <span className="link">Персональные данные</span>
                            </Link>
                        </div>
                        <div className="section_links__link">
                            <Link href={'/agreement'}>
                                <span className="link">Пользовательское соглашение</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export { Footer };
