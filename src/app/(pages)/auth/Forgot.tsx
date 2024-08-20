import '@/app/(pages)/auth/styles/auth.css';
import { ForgotForm } from '@/widgets/forms/ForgotForm';

const ForgotPage = () => {
    return (
        <div className="login">
            <div className="login_title">
                <h1 className="login_title__h1">Восстановление пароля</h1>
            </div>
            <ForgotForm />
        </div>
    );
};

export { ForgotPage };
