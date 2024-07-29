import { ItemListElements } from 'src/types';
export declare function setItemListElements(items: ItemListElements[]):
  | {
      '@type': string;
      position: number;
      item: string;
      name: string;
    }[]
  | undefined;
