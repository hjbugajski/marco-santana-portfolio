import React from 'react';

import { fetchPage } from '~graphql';

// eslint-disable-next-line import/no-anonymous-default-export
export default async () => {
  try {
    const page = await fetchPage();

    return <title>{page.title}</title>;
  } catch {
    return null;
  }
};
