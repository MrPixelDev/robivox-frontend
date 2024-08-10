'use client';
import '@/widgets/forms/styles/forms.css';
import { useActionState } from 'react';
import { authenticate } from '@/widgets/forms/features/features';

import Link from 'next/link';

const LoginForm = () => {
    const [errorMessage, formAction, isPending] = useActionState(authenticate, undefined);

    return (
        <form action={formAction} className="login_form">
            <section className="login_form__inputs">
                <div className="form_input">
                    <div className="form_input__left">
                        <input type="email" required maxLength={255} placeholder="Email" />
                    </div>
                </div>
                <div className="form_input">
                    <div className="form_input__left">
                        <input type="password" required maxLength={255} placeholder="Пароль" autoComplete="off" />
                    </div>
                </div>
                <div className="form_checkbox">
                    <div className="checkbox">
                        <div className="ok">✓</div>
                    </div>
                    <input type="checkbox" />
                    <span className="form_checkbox__span">Запомнить меня на этом компьютере</span>
                </div>
            </section>
            <section className="login_form__buttons">
                <button className="form_button" type="submit">
                    Войти
                </button>
            </section>
            {errorMessage && (
                <>
                    {/* <ExclamationCircleIcon className="h-5 w-5 text-red-500" /> */}
                    <p className="text-sm text-red-500">{errorMessage}</p>
                </>
            )}
            <section className="login_form__social">
                <ul>
                    <li className="google">
                        <a
                            id="bx_socserv_icon_GoogleOAuth"
                            className="google bx-authform-social-icon"
                            href="https://accounts.google.com/o/oauth2/auth?client_id=531842041909-sarf3ne8dbnkj3m9agq9l9p205gu97m7.apps.googleusercontent.com&redirect_uri=http%3A%2F%2Frobivox.ru%2Fbitrix%2Ftools%2Foauth%2Fgoogle.php&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile&response_type=code&access_type=offline&state=provider%3DGoogleOAuth%26site_id%3Ds1%26backurl%3D%252Flogin%252F%253Fcheck_key%253D38998dd2230d48c07de7a44aeb5798cd%2526register%253Dyes%26mode%3Dopener"
                            title="Google"
                        ></a>
                    </li>
                    <li className="mailru">
                        <a
                            id="bx_socserv_icon_MailRu2"
                            className="mailru2 bx-authform-social-icon"
                            href="https://oauth.mail.ru/login?client_id=85702d0919d1403cb417c679336ed350&redirect_uri=http%3A%2F%2Frobivox.ru%2Fbitrix%2Ftools%2Foauth%2Fmailru2.php&scope=userinfo&response_type=code&state=site_id%3Ds1%26backurl%3D%252Flogin%252F%253Fcheck_key%253D38998dd2230d48c07de7a44aeb5798cd%2526register%253Dyes"
                            title="Mail.Ru"
                        ></a>
                    </li>
                    <li className="yandex">
                        <a
                            id="bx_socserv_icon_YandexOAuth"
                            className="yandex bx-authform-social-icon"
                            href="https://oauth.yandex.ru/authorize?response_type=code&client_id=58308567feb44a10ac4642df37c112cd&display=popup&redirect_uri=http%3A%2F%2Frobivox.ru%2Fbitrix%2Ftools%2Foauth%2Fyandex.php&state=site_id%3Ds1%26backurl%3D%252Flogin%252F%253Fcheck_key%253D38998dd2230d48c07de7a44aeb5798cd%2526register%253Dyes%26mode%3Dopener"
                            title="Яндекс"
                        ></a>
                    </li>
                    <li className="vk">
                        <a href="#" className="bx-authform-social-icon vkontakte"></a>
                    </li>
                </ul>
            </section>
            <span className="login_form__login">
                <Link href="/auth/forgot" rel="nofollow">
                    Забыли пароль?
                </Link>
            </span>
            <section className="login_form__agreement">
                <span>
                    Еще не зарегистрированы? <a href="/auth/registration">Зарегистрироваться</a>
                </span>
            </section>
        </form>
    );
};

export { LoginForm };
