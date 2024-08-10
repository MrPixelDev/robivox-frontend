import '@/widgets/forms/styles/forms.css';
import Link from 'next/link';

const ForgotForm = () => {
    return (
        <form action="" className="login_form">
            <section className="login_form__inputs">
                <div className="form_input form_input--forgot">
                    <div className="form_input__left">
                        <input type="email" required maxLength={255} placeholder="Введите ваш email" />
                    </div>
                    <span className="form_input__undertext">Отправим ссылку на восстановление пароля</span>
                </div>
                
            </section>
            <section className="login_form__buttons">
                <button className="form_button" type="submit">
                    Выслать
                </button>
            </section>
            <section className="login_form__login">
              <span>Вспомнили пароль? <Link href="/auth/login" rel="nofollow">
                    Войти
                </Link></span>
            </section>
        </form>
    );
};

export { ForgotForm };
