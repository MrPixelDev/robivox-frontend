'use client';
import "@/widgets/forms/styles/forms.css";
import Link from "next/link";
import { useState } from "react";
import { useActionState } from "@/widgets/forms/features/features";

const RegistrationForm = () => {
  const [email, setEmail] = useState<string>("sads@gmail.com");
  const [password1, setPassword1] = useState<string>("dsadasd");
  const [password2, setPassword2] = useState<string>("3434345");
  const [xato, setXato] = useState<string>("");
  const [state, authenticate] = useActionState();

  const handleLogin = async (event: any) => {
    event.preventDefault();
        await authenticate(email, password1, 'register');
  };

  return (
    <form className="registration_form">
      <section className="registration_form__inputs">
        <div className="form_input">
          <div className="form_input__left">
            <span className="form_input__starrequired">*</span>
            <input
              type="email"
              required
              maxLength={255}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="form_input">
          <div className="form_input__left">
            <span className="form_input__starrequired">*</span>
            <input
              type="password"
              required
              maxLength={255}
              placeholder="Пароль"
              autoComplete="off"
              onChange={(e) => setPassword1(e.target.value)}
            />
            <span className="form_input__undertext">
              Пароль должен быть длиной не менее 6 символов
            </span>
          </div>
        </div>
        <br />
        <div className="form_input">
          <div className="form_input__left">
            <span className="form_input__starrequired">*</span>
            <input
              type="password"
              required
              maxLength={255}
              placeholder="Повторите пароль"
              autoComplete="off"
              onChange={(e) => {
                setPassword2(e.target.value), setXato("sm");
              }}
            />
            
          </div>
        </div>
      </section>
      {xato && password1 !== password2 && (
              <p className="text-sm text-red-500">
                Оба пароля должны быть одинаковыми
              </p>
            )}
      <section className="registration_form__buttons">
        <button
          className="form_button"
          onClick={handleLogin}
          disabled={password1 !== password2}
        >
          Зарегистрироваться
        </button>
      </section>
      {state.message && (
        <>
          {/* <ExclamationCircleIcon className="h-5 w-5 text-red-500" /> */}
          <p className="text-sm text-red-500">{state.message}</p>
        </>
      )}
      <section className="registration_form__social">
        <ul>
          <li className="google">
            <a
              id="bx_socserv_icon_GoogleOAuth"
              className="google bx-authform-social-icon"
              href="https://accounts.google.com/o/oauth2/auth?client_id=531842041909-sarf3ne8dbnkj3m9agq9l9p205gu97m7.apps.googleusercontent.com&amp;redirect_uri=http%3A%2F%2Frobivox.ru%2Fbitrix%2Ftools%2Foauth%2Fgoogle.php&amp;scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile&amp;response_type=code&amp;access_type=offline&amp;state=provider%3DGoogleOAuth%26site_id%3Ds1%26backurl%3D%252Flogin%252F%253Fcheck_key%253D38998dd2230d48c07de7a44aeb5798cd%2526register%253Dyes%26mode%3Dopener"
              title="Google"
            ></a>
          </li>
          <li className="mailru">
            <a
              id="bx_socserv_icon_MailRu2"
              className="mailru2 bx-authform-social-icon"
              href="https://oauth.mail.ru/login?client_id=85702d0919d1403cb417c679336ed350&amp;redirect_uri=http%3A%2F%2Frobivox.ru%2Fbitrix%2Ftools%2Foauth%2Fmailru2.php&amp;scope=userinfo&amp;response_type=code&amp;state=site_id%3Ds1%26backurl%3D%252Flogin%252F%253Fcheck_key%253D38998dd2230d48c07de7a44aeb5798cd%2526register%253Dyes"
              title="Mail.Ru"
            ></a>
          </li>
          <li className="yandex">
            <a
              id="bx_socserv_icon_YandexOAuth"
              className="yandex bx-authform-social-icon"
              href="https://oauth.yandex.ru/authorize?response_type=code&amp;client_id=58308567feb44a10ac4642df37c112cd&amp;display=popup&amp;redirect_uri=http%3A%2F%2Frobivox.ru%2Fbitrix%2Ftools%2Foauth%2Fyandex.php&amp;state=site_id%3Ds1%26backurl%3D%252Flogin%252F%253Fcheck_key%253D38998dd2230d48c07de7a44aeb5798cd%2526register%253Dyes%26mode%3Dopener"
              title="Яндекс"
            ></a>
          </li>
          <li className="vk">
            <a href="#" className="bx-authform-social-icon vkontakte"></a>
          </li>
        </ul>
      </section>
      <section className="registration_form__agreement">
        <span>
          Регистрируясь, вы принимаете{" "}
          <Link href="/agreement">пользовательское соглашение</Link> и{" "}
          <Link href="/confidential">персональные данные</Link>
        </span>
      </section>
      <span className="registration_form__login">
        <Link href="/auth/login">Войти</Link>
      </span>
    </form>
  );
};

export { RegistrationForm };
