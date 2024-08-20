import '@/widgets/navbar/styles/navbar.css';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="header-nav">
            <Link href="/auth/registration" className="header-nav_text nav-text nav-text--register">
                Регистрация
            </Link>
            <Link href="/auth/login" className="header-nav_text nav-text">
                Войти
            </Link>
        </nav>
    );
};

export { Navbar };
