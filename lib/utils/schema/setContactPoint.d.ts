import { ContactPoint } from 'src/types';
export declare function setContactPoint(contactPoint: ContactPoint): {
    '@type': string;
    contactType: string;
    telephone: string;
    email?: string | undefined;
    areaServed?: string | string[] | undefined;
    availableLanguage?: string | string[] | undefined;
    contactOption?: string | string[] | undefined;
} | undefined;
