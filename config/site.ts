export const site = {
  name: 'Yorkshire Wheel Specialist',
  shortName: 'YWS',
  description:
    'Expert alloy wheel refurbishment and sales across Yorkshire. Fast turnaround and premium finishes.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://yorkshirewheelspecialist.co.uk',
  contact: {
    phone: '+44 114 234 5678',
    email: 'hello@yorkshirewheelspecialist.co.uk',
    whatsapp: 'https://wa.me/441142345678',
  },
  social: {
    facebook: '#',
    instagram: '#',
  },
} as const;
export type Site = typeof site;
