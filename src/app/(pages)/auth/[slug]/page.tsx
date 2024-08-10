import { RegistrationPage } from '@/app/(pages)/auth/Registration';
import { LoginPage } from '@/app/(pages)/auth/Login';
import { ForgotPage } from '../Forgot';

type Params = {
    params: {
        slug: string;
    };
};

function Auth({ params }: Params) {
    const slug = params.slug;

    if (slug === 'registration') {
        return <RegistrationPage />;
    }
    if (slug === 'login') {
        return <LoginPage />;
    }
    if (slug === 'forgot') {
        return <ForgotPage />;
    }
}

export default Auth;
