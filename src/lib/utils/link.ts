import { slugify } from './slugify';
import { PayloadFieldLink } from '../types/payload';

export const internalLink = (link: PayloadFieldLink) => {
  const url = link.relationship?.value?.breadcrumbs?.[link.relationship?.value?.breadcrumbs.length - 1]?.url ?? '';
  const anchor = link.anchor ? `#${link.anchor}` : '';

  return `${url === '/home' ? '/' : url}${anchor}`;
};

export const linkProps = (link: PayloadFieldLink) => {
  const href = (link.type === 'internal' && link.relationship ? internalLink(link) : link.url) ?? '/';

  return {
    href,
    target: link.newTab ? '_blank' : '_self',
    ...(link.type === 'external' ? { rel: link.rel.join(',') } : {}),
    'aria-label': link.text,
    'data-umami-event': link.umamiEvent ?? 'Link',
    'data-umami-event-id': link.umamiEventId ?? slugify(link.text),
    'data-umami-event-url': href,
  };
};
