import '@/app/(pages)/auth/styles/auth.css';
import { LoginForm } from '@/widgets/forms/LoginForm';

const LoginPage = () => {
    return (
        <div className="login">
            <div className="login_title">
                <h1 className="login_title__h1">Войти на сайт</h1>
            </div>
            <LoginForm />
        </div>
    );
};

export { LoginPage };
