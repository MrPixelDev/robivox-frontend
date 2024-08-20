import '@/app/(pages)/faq/styles/faq.css';
import { Article } from '@/widgets/article/Article';
import Link from 'next/link';

const articleProps = {
    first: {
        title: 'Как поставить ударение?',
        paragraphs: [
            'Знаком "+" перед ударной гласной. Например з+амок или зам+ок.',
            'Важно! Эта функция работает со всеми русскими голосами, кроме Дмитрия, Светланы и Дарьи.',
        ],
    },
    second: {
        title: 'Как бесплатно озвучить текст?',
        paragraphs: [
            'Без регистрации вы сможете озвучить текст не более чем в 100 символов. Озвучка текста свыше 100 символов доступна только для зарегистрированных пользователей. Зарегистрируйтесь и получите 5 бонусных рублей в подарок, чтобы вы могли протестировать наш сервис.',
        ],
    },
    third: {
        title: 'Что дает регистрация?',
        paragraphs: [
            'За регистрацию мы дарим 5 бонусных рублей, чтобы вы могли в полной мере протестировать наш сервис. Вы сможете озвучивать тексты больше 100 символов, а история ваших озвучек будет храниться на сервере 3 дня.',
        ],
    },
    fourth: {
        title: 'Как оплатить зарубежной картой?',
        paragraphs: [
            'Для пополнения баланса картой выпущенной не в банках РФ, пожалуйста перейдите в наш телеграм бот и выберите меню «Способы оплаты»',
        ],
    },
    fifth: {
        title: 'Озвучить текст настоящим диктором',
        paragraphs: [
            'Если вам нужна профессиональная запись дикторского голоса, рекомендуем студию саунд-дизайна и озвучки Звукоград',
        ],
    },
    sixth: {
        title: 'Сколько стоит озвучка текста?',
        paragraphs: [
            'Стоимость зависит от количества текста. Всего за 100 рублей вы сможете озвучить около 100 минут обычным голосом и 20 минут голосом PRO.',
        ],
    },
    seventh: {
        title: 'Остались вопросы?',
        paragraphs: ['Задайте их нашей поддержке в Телеграмм'],
    },
};

function FaqPage() {
    return (
        <div className="faq">
            <h1 className="h1">FAQ</h1>
            <div className="faq-article">
                <Article props={articleProps.first} />
                <Link href="/">Вернуться к синтезатору речи</Link>
            </div>
            <div className="faq-article">
                <Article props={articleProps.second} />
                <Link href="/">Зарегистрироваться и получить бонусные рубли</Link>
            </div>
            <div className="faq-article">
                <Article props={articleProps.third} />
            </div>
            <div className="faq-article">
                <Article props={articleProps.fourth} />
            </div>
            <div className="faq-article">
                <Article props={articleProps.fifth} />
            </div>
            <div className="faq-article">
                <Article props={articleProps.sixth} />
            </div>
            <div className="faq-info">
                <div className="faq-info__title">Остались вопросы?</div>
                <div className="faq-info__text">Задайте их нашей поддержке в Телеграм</div>
                <div className="faq-info__link">
                    <a href="https://t.me/robivox_bot" className="link-button--telegram">
                        Открыть телеграм
                    </a>
                </div>
            </div>
        </div>
    );
}

export default FaqPage;
