export const site = {
  name: 'Yorkshire Wheel Specialist',
  shortName: 'YWS',
  description:
    'Expert alloy wheel refurbishment and sales across Yorkshire. Fast turnaround and premium finishes.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://yorkshirewheelspecialist.co.uk',
  contact: {
    phone: '07455298619',
    email: 'joe@yorkshirewheelspecialist.co.uk',
    whatsapp: 'https://wa.me/447455298619',
  },
  social: {
    facebook: '#',
    instagram: '#',
  },
} as const;
export type Site = typeof site;
