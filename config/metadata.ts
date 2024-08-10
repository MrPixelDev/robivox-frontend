export type Locales = 'en' | 'ru';

const metadata: Record<string extends Locales ? Locales : string, Record<string, string>> = {
    en: {
        title: 'Robivox',
        description: 'Robivox',
        author: 'Robivox',
        siteUrl: 'https://robivox.com',
    },
    ru: {
        title: 'Robivox',
        description: 'Robivox',
        author: 'Robivox',
        siteUrl: 'https://robivox.ru',
    },
    gb: {
        title: 'Robivox',
        description: 'Robivox',
        author: 'Robivox',
        siteUrl: 'https://robivox.com',
    }
};

export default metadata;