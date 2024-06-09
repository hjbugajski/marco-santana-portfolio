import { notFound } from 'next/navigation';

import Serialize from '@/components/serialize';
import { fetchPage } from '@/lib/api';
import Breadcrumbs from '@/lib/components/breadcrumbs';
import { fetchPages } from '@/lib/graphql';
import { pageTitle } from '@/lib/utils/page-title';

import { metadata } from '../layout';

export async function generateStaticParams() {
  try {
    const pages = await fetchPages();

    return pages.map(({ slug }: { slug: string }) => ({ slug: [slug] }));
  } catch {
    return [{ slug: undefined }];
  }
}

export async function generateMetadata({ params: { slug } }: { params: { slug: string[] } }) {
  const page = await fetchPage(slug);

  return {
    title: pageTitle(page?.title, metadata),
    description: page?.description || metadata.description,
  };
}

export default async function Page({ params: { slug } }: { params: { slug: string[] } }) {
  const page = await fetchPage(slug);

  if (!page) {
    notFound();
  }

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col items-start px-4 py-8">
      {page.slug !== 'home' && <Breadcrumbs {...page} />}
      {page.content?.root?.children && <Serialize nodes={page.content.root.children} />}
    </main>
  );
}
