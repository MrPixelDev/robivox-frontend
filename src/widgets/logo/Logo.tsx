import '@/widgets/logo/styles/logo.css';
import Link from 'next/link';

const Logo = () => {
    return (
        <div className="header-logo logo">
            <Link href="/">
                <div className="flex">
                    <img src="/img/logo.png" className="header-logo_img logo-img" alt="robivox.png" />
                    <span className="header-logo_text logo-text">robivox</span>
                </div>
            </Link>
        </div>
    );
};

export { Logo };
