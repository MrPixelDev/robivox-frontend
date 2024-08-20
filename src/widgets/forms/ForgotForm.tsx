"use client";
import '@/widgets/forms/styles/forms.css';
import Link from 'next/link';
import { FormEvent, useState } from 'react';
import { useActionState } from './features/features';

const ForgotForm = () => {

    const [email, setEmail] = useState<string>('');
    const [state, authenticate, signout, handleOAuthLogin, forgotPassword] = useActionState();
    const handleForgotPassword = async (event: FormEvent) => {
        event.preventDefault();
        await forgotPassword(email);
    };


    return (
        <form onSubmit={handleForgotPassword} className="login_form">
            <section className="login_form__inputs">
                <div className="form_input form_input--forgot">
                    <div className="form_input__left">
                        <input type="email" required maxLength={255} placeholder="Введите ваш email" onChange={(e)=> setEmail(e.target.value)} />
                    </div>
                    <span className="form_input__undertext">Отправим ссылку на восстановление пароля</span>
                </div>
                
            </section>
            <section className="login_form__buttons">
                <button className="form_button" type="submit">
                    Выслать
                </button>
            </section>
            {state?.message && (
                <>
                    <p className="text-sm text-red-500">{state?.message}</p>
                </>
            )}
            <section className="login_form__login">
              <span>Вспомнили пароль? <Link href="/auth/login" rel="nofollow">
                    Войти
                </Link></span>
            </section>
        </form>
    );
};

export { ForgotForm };
