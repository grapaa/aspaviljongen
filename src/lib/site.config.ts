/**
 * Central configuration for this customer site.
 * Edit this file first after forking the template.
 */
export const site = {
  name: 'Åspaviljongen',
  tagline: 'Drammens landlige storstue siden 1898',
  description:
    'Restaurant og eventlokale i naturskjønne omgivelser på Åssiden i Drammen. Sesongbaserte retter, selskapsutleie og arrangementer.',
  url: 'https://grapaa.github.io/aspaviljongen',
  locale: 'no',
  email: 'post@aspaviljongen.no',
  location: 'Åssiden, Drammen',

  /** Navigation links — rendered in Header and Footer */
  nav: [
    { label: 'Om oss', href: '/om-oss' },
    { label: 'Meny', href: '/meny' },
    { label: 'Arrangementer', href: '/arrangementer' },
    { label: 'Leie lokaler', href: '/leie-lokaler' },
  ],

  /** Primary CTA shown in Header and Hero */
  cta: {
    label: 'Kontakt oss',
    href: '/leie-lokaler',
  },
} as const;
