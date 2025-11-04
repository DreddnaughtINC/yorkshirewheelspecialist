export type Product = {
  id: string;
  title: string;
  subtitle: string;
  ebayUrl?: string;
  images: string[];
  highlights: string[];
  specs: Record<string, string>;
  suitableFor: string[];
  logistics: string[];
};

export const product: Product = {
  id: 'gwagon-amg-style-20',
  title: 'Mercedes G-Wagon W463 AMG Style 20” Wheels — Set of 4',
  subtitle: 'With Michelin Latitude Sport SUV tyres 275/50 R20',
  ebayUrl: 'https://www.ebay.co.uk/itm/286915435127',
  images: [
    '/images/shop/gwagen/1.JPG',
    '/images/shop/gwagen/2.JPG',
    '/images/shop/gwagen/3.JPG',
    '/images/shop/gwagen/4.JPG',
    '/images/shop/gwagen/5.JPG',
    '/images/shop/gwagen/6.JPG',
    '/images/shop/gwagen/7.JPG',
    '/images/shop/gwagen/8.JPG',
  ],
  highlights: [
    'Satin black finish with machined edge detail',
    'No cracks, welds or structural damage',
    'Run true; tyres with good usable tread',
    'Direct bolt-on for W463 (all years up to W463a)',
    'Gives the AMG G63 look without dealer cost',
  ],
  specs: {
    'Wheel Size': '20 × 9.5J',
    Offset: 'ET48',
    PCD: '5×130',
    'Centre Bore': '84.1 mm',
    Tyres: 'Michelin Latitude Sport — 275/50 R20 (G-Class load-rated)',
    Condition: 'Refurbished, excellent — see photos',
    Finish: 'Satin black with machined edge',
  },
  suitableFor: [
    'G-Wagon W463 (all years up to W463a)',
    'G350, G400, G500, G55 AMG, G63 AMG',
  ],
  logistics: ['Collection available (can assist with loading)', 'Pallet delivery available'],
};
