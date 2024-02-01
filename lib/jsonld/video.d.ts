import React from 'react';
import { Video } from 'src/types';
import { JsonLdProps } from './jsonld';
export interface VideoJsonLdProps extends JsonLdProps, Video {
}
declare function VideoJsonLd({ type, keyOverride, ...rest }: VideoJsonLdProps): React.JSX.Element;
export default VideoJsonLd;
