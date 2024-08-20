import {DomainLocale} from "next/dist/server/config-shared";


const domains: DomainLocale[] = [
    {
        domain: 'robivox.com',
        defaultLocale: "en",
    },
    {
        domain: 'robivox.ru',
        defaultLocale: "ru",
    },
];

export default domains;