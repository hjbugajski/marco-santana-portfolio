import { Fragment } from 'react';

import Link from 'next/link';

import { PayloadPage } from '../types/payload';

const homeBreadcrumb = {
  url: '/',
  label: 'Home',
  id: 'home',
};

export default function Breadcrumbs({ breadcrumbs: pageBreadcrumbs }: PayloadPage) {
  const breadcrumbs = pageBreadcrumbs.length === 1 ? [homeBreadcrumb, ...pageBreadcrumbs] : [...pageBreadcrumbs];
  const breadcrumbUrl = (url: string) => (url === '/home' ? '/' : url);

  return (
    <ul className="flex flex-row items-baseline gap-2">
      {breadcrumbs?.map((breadcrumb, i) => (
        <Fragment key={i}>
          {i > 0 && <span>/</span>}
          <li>
            {i < breadcrumbs.length - 1 ? (
              <Link href={breadcrumbUrl(breadcrumb.url!)} className="underline underline-offset-4">
                {breadcrumb.label}
              </Link>
            ) : (
              breadcrumb.label
            )}
          </li>
        </Fragment>
      ))}
    </ul>
  );
}
