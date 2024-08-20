"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, sendPasswordResetEmail } from 'firebase/auth';
import { setCookie, destroyCookie } from 'nookies';
import { GoogleAuthProvider, signInWithPopup, OAuthProvider } from 'firebase/auth';
import {jwtDecode} from 'jwt-decode';
import { auth } from '@/firebaseConfig';

interface AuthState {
    message: string;
}

 type OAuthProviderName = 'vk' | 'yandex' | 'mailru' | 'google' ;


type ActionType = 'signin' | 'register';

const useActionState = (): [
    AuthState,
    (email: string, password: string, actionType: ActionType) => Promise<void>,
    () => Promise<void>,
    (providerName: OAuthProviderName) => Promise<void>,
    (email: string) => Promise<void>
] => {

    const [state, setState] = useState<AuthState>({ message: '' });
    const router = useRouter();

    const authenticate = async (email: string, password: string, actionType: ActionType): Promise<void> => {
        // const auth = getAuth();

        try {
            let userCredential: any;
            if (actionType === 'signin') {
                userCredential = await signInWithEmailAndPassword(auth, email, password);
            } else if (actionType === 'register') {
                userCredential = await createUserWithEmailAndPassword(auth, email, password);
            } 

            const token = await userCredential.user.getIdToken();
            const decodedToken = jwtDecode<{ name: string }>(token);

            // Set JWT token in cookies
            setCookie(null, 'token', token, {
                maxAge: 30 * 24 * 60 * 60,
                path: '/',
            });

            // Redirect to dashboard after successful sign-in or registration
            router.push('/');

            // Set user data in the state
            setState({
                message: `Welcome ${decodedToken.name}`,
            });
        } catch (error: any) {
            setState({
                message: error.message,
            });
        }
    };

    const signout = async (): Promise<void> => {
        
        await signOut(auth);

        // Destroy session cookie
        destroyCookie(null, 'token');

        router.push('/login');
    };

    

    const handleOAuthLogin = async (providerName: OAuthProviderName): Promise<void> => {
        let provider: OAuthProvider;

        switch (providerName) {
            case 'vk':
                provider = new OAuthProvider('vk.com');
                break;
            case 'yandex':
                provider = new OAuthProvider('yandex.ru');
                break;
            case 'mailru':
                provider = new OAuthProvider('mail.ru');
                break;
            case 'google':
                    provider = new OAuthProvider('google.com');
                    break;
            default:
                throw new Error('Unknown provider');
        }

        try {
            const result = await signInWithPopup(auth, provider);
            const token = await result.user.getIdToken();
            const decodedToken = jwtDecode<{ name: string }>(token);

            // Set JWT token in cookies
            setCookie(null, 'token', token, {
                maxAge: 30 * 24 * 60 * 60,
                path: '/',
            });

            // Redirect to dashboard after successful login
            router.push('/');

            // Set user data in the state
            setState({
                message: `Welcome ${decodedToken.name}`,
            });
        } catch (error: any) {
            setState({
                message: error.message,
            });
        }
    };

    const forgotPassword = async (email: string): Promise<void> => {

        try {
            await sendPasswordResetEmail(auth, email);
            setState({
                message: 'Password reset email sent. Please check your inbox.',
            });
        } catch (error: any) {
            setState({
                message: error.message,
            });
        }
    };



    return [state, authenticate, signout, handleOAuthLogin, forgotPassword];

};

export { useActionState };
