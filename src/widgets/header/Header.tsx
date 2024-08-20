import Link from 'next/link';
import '@/widgets/header/styles/headers.css';
import { Navbar } from '../navbar/Navbar';
import { Logo } from '../logo/Logo';

const Header = () => {
    return (
        <header className="header">
            <Logo />
            <Navbar />
        </header>
    );
};

export { Header };
