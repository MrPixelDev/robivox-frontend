import { Open_Sans } from 'next/font/google';
import '@/assets/styles/globals.css';
import React from 'react';
import { Header } from '@/widgets/header/Header';
import { Footer } from '@/widgets/footer/Footer';
import { useRouter } from 'next/router';
import { Metadata } from 'next';
import { LineBanner } from '@/widgets/banners/lineBanner/LineBanner';

const openSans = Open_Sans({ subsets: ['latin-ext', 'cyrillic-ext'] });

export const metadata: Metadata = {
    title: {
        default: 'Robivox',
        template: `%s | Robivox`,
    },
    description: 'Roboticxc vocixecce',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html>
            <body className={openSans.className}>
                <LineBanner />
                <div className="container">
                    <Header />
                    <main className="main">{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
