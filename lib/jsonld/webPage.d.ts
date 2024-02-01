import React from 'react';
import type { ReviewedBy } from 'src/types';
import { JsonLdProps } from './jsonld';
export interface WebPageJsonLdProps extends JsonLdProps {
    keyOverride?: string;
    id: string;
    description?: string;
    lastReviewed?: string;
    reviewedBy?: ReviewedBy;
}
declare function WebPageJsonLd({ keyOverride, reviewedBy, ...rest }: WebPageJsonLdProps): React.JSX.Element;
export default WebPageJsonLd;