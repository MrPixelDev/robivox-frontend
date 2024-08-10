import '@/app/(pages)/payment/styles/payment.css';

function PaymentPage() {
    return (
        <div className="payment">
            <div className="payment-text">
                <div className="payment-text_title">
                    <h1 className="payment-text_title__h1">Тарифы</h1>
                </div>
                <div className="payment-text_description">
                    <p className="payment-text_description__p">
                        Выберите тариф или пополните счет на нужную сумму. За 150 рублей вы сможете синтезировать около
                        50 минут обычным голосом и около 25 минут голосом PRO в среднем темпе. Точный хронометраж
                        зависит от выбранного языка и скорости речи. Стоимость синтеза 2 копейки за 5 символом обычным
                        голосом и 4 копейки голосом PRO.
                    </p>
                </div>
                <div className="payment-text_advice">
                    <p className="payment-text_advice__p">
                        <b>
                            Для оплаты картами иностранных банков, PayPal, Wise или криптовалютой напишите в наш
                            Telegram <a href="https://t.me/robivox_bot">@robivox_bot</a>
                        </b>
                    </p>
                </div>
                <div className="payment-text_warn">
                    <p className="payment-text_warn__p">Отключите VPN!!! С ним оплата может не пройти.</p>
                </div>
            </div>
            <div className="payment_cards">
                <div className="payment_cards__content">
                    <div className="payment_cards__cost">
                        <span className="amount">150 ₽</span>
                    </div>
                    <div className="payment_cards__coins">
                        <span className="coins">Получите 150</span>
                    </div>
                    <div className="payment_cards__voices">
                        <div className="payment_cards__voices_default">
                            <span>50 мин</span>
                        </div>
                        <div className="payment_cards__voices_pro">
                            <p>обычным голосом</p>
                            <span>или 25 минут голосом PRO</span>
                        </div>
                        <form className="payment_cards__choose" action="/payment/buy">
                            <button className="payment_cards__choose__button">Выбрать</button>
                        </form>
                    </div>
                </div>
                <div className="payment_cards__content">
                    <span className="payment_cards__hit">Хит</span>
                    <span className="payment_cards__bonus">Бонус</span>
                    <span className="payment_cards__10">10%</span>
                    <div className="payment_cards__cost">
                        <span className="old-price">550</span>
                        <span className="amount">500 ₽</span>
                    </div>
                    <div className="payment_cards__coins">
                        <span className="coins">Получите 550</span>
                    </div>
                    <div className="payment_cards__voices">
                        <div className="payment_cards__voices_default">
                            <span>190 мин</span>
                        </div>
                        <div className="payment_cards__voices_pro">
                            <p>обычным голосом</p>
                            <span>или 95 минут голосом PRO</span>
                        </div>
                        <form className="payment_cards__choose" action="/payment/buy">
                            <button className="payment_cards__choose__button">Выбрать</button>
                        </form>
                    </div>
                </div>
                <div className="payment_cards__content">
                    <span className="payment_cards__bonus">Бонус</span>
                    <span className="payment_cards__8">8%</span>
                    <div className="payment_cards__cost">
                        <span className="old-price">270</span>
                        <span className="amount">250 ₽</span>
                    </div>
                    <div className="payment_cards__coins">
                        <span className="coins">Получите 270</span>
                    </div>
                    <div className="payment_cards__voices">
                        <div className="payment_cards__voices_default">
                            <span>90 мин</span>
                        </div>
                        <div className="payment_cards__voices_pro">
                            <p>обычным голосом</p>
                            <span>или 45 минут голосом PRO</span>
                        </div>
                        <form className="payment_cards__choose" action="/payment/buy">
                            <button className="payment_cards__choose__button">Выбрать</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="form_refill">
                <div className="form_refill__title">
                    <h3 className="form_refill__title__h3">Или введите свою сумму</h3>
                </div>
                <div className="form_refill__input-row">
                    <div className="input__currency">
                        <input type="number" placeholder="Введите сумму" />
                    </div>
                    <button className="refill__button">Пополнить</button>
                </div>
                <div className="form_refill__bonus">
                    <span className="refill__bonus">
                        Вы получите <b>0</b>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default PaymentPage;
