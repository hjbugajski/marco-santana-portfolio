import { fetchPage } from '~graphql';
import { PageProps } from '~interfaces';

// eslint-disable-next-line import/no-anonymous-default-export
export default async ({ params }: PageProps) => {
  const { slug } = params;

  try {
    const page = await fetchPage(slug);

    return <title>{page?.title}</title>;
  } catch {
    return null;
  }
};
