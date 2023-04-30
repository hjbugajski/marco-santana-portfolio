import React from 'react';

import { notFound } from 'next/navigation';

import { Blocks } from '~components/Blocks';
import { fetchPage, fetchPages } from '~graphql';
import { PageProps } from '~interfaces';

import classes from './page.module.scss';

export default async function Page({ params: { slug } }: PageProps) {
  try {
    const page = await fetchPage(slug);

    const { layout: layouts } = page;

    return (
      <div className={page.slug === 'home' ? classes.homePage : classes.page}>
        {page.displayName ? <h1 className={`${classes.header} ms-display-large`}>{page.name}</h1> : null}
        {layouts.map((layout, i) => (
          <Blocks key={i} block={layout} />
        ))}
      </div>
    );
  } catch {
    return notFound();
  }
}

export async function generateMetadata({ params }: PageProps) {
  try {
    const page = await fetchPage(params.slug);

    return {
      title: page.title,
      description: 'Photography portfolio.'
    };
  } catch {
    return {
      title: undefined,
      description: undefined
    };
  }
}

export async function generateStaticParams() {
  try {
    const pages = await fetchPages();

    return pages.map(({ slug }) => ({ slug: [slug] }));
  } catch {
    return { slug: undefined };
  }
}
