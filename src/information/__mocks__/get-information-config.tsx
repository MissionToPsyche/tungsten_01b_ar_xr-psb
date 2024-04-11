import { InformationConfig } from '../get-information-config.tsx';
import { vi } from 'vitest';

const informationConfig: InformationConfig = {
  authors: [
    {
      name: 'Author 1',
      link: 'https://example.com/author-1'
    }
  ],
  attributions: [
    {
      name: 'Attribution 1',
      link: 'https://example.com/attribution-1'
    }
  ],
  disclaimers: [
    {
      title: 'Disclaimer 1',
      disclaimer: 'This is a disclaimer.'
    }
  ]
};

const getInformationConfig = vi.fn(() => informationConfig);

export default getInformationConfig;
