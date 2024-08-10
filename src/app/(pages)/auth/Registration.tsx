import '@/app/(pages)/auth/styles/auth.css';
import { RegistrationForm } from '@/widgets/forms/RegistrationForm';

const RegistrationPage = () => {
    return (
        <div className="registration">
            <div className="registration_title">
                <h1 className="registration_title__h1">Регистрация</h1>
            </div>
            <RegistrationForm />
        </div>
    );
};

export { RegistrationPage };
