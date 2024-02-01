import React from 'react';
import { ProductJsonLd } from '../../..';
import Links from '../../components/links';

const ImageObject = () => (
  <>
    <h1>Product JSON-LD ImageObject</h1>

    <ProductJsonLd
      productName="Executive Anvil"
      images={{
        url: 'https://www.example.com/anvil_executive.jpg',
        width: '800px',
        height: '600px',
        caption: 'Executive Anvil Image',
      }}
    />

    <Links />
  </>
);

export default ImageObject;
