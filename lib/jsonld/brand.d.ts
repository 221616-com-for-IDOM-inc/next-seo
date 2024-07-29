import React from 'react';
import type { AggregateRating } from 'src/types';
import { JsonLdProps } from './jsonld';
export interface BrandJsonLdProps extends JsonLdProps {
  id: string;
  slogan?: string;
  logo?: string;
  aggregateRating?: AggregateRating;
}
declare function BrandJsonLd({
  type,
  id,
  keyOverride,
  aggregateRating,
  ...rest
}: BrandJsonLdProps): React.JSX.Element;
export default BrandJsonLd;
