import '@/widgets/faq-widget/styles/faqwidget.css';
import Link from 'next/link';

const FaqWidget = () => {
    return (
        <div className="faq-widget">
            <div className="faq-widget__title widget__title--grey">FAQ</div>
            <div className="faq-widget__list">
                <div className="faq-widget__item">
                    <Link href="/faq">Как поставить ударение?</Link>
                </div>
                <div className="faq-widget__item">
                    <Link href="/faq">Как бесплатно озвучить текст?</Link>
                </div>
                <div className="faq-widget__item">
                    <Link href="/faq">Как оплатить зарубежной картой?</Link>
                </div>
                <div className="faq-widget__item">
                    <Link href="/faq">Сколько стоит озвучка?</Link>
                </div>
                <div className="faq-widget__item">
                    <Link href="/faq">Что дает регистрация?</Link>
                </div>
                <div className="faq-widget__item">
                    <Link href="/faq">Озвучить текст настоящим диктором</Link>
                </div>
            </div>
        </div>
    );
};

export { FaqWidget };
