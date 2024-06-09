import { GLOBALS } from './gloabls';
import { PAGES } from './pages';

const PAYLOAD_GRAPHQL = process.env.NEXT_PUBLIC_PAYLOAD_URL + '/api/graphql';
const NEXT_CONFIG = {
  revalidate: 60,
};

export const fetchGlobals = async (): Promise<any> => {
  const { data, error } = await fetch(PAYLOAD_GRAPHQL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    next: NEXT_CONFIG,
    body: JSON.stringify({
      query: GLOBALS,
    }),
  }).then((res) => res.json());

  if (error) {
    console.error(JSON.stringify(error));

    return { navMenu: undefined };
  }

  return { navMenu: data.NavMenu };
};

export const fetchPages = async (): Promise<any> => {
  const { data, error } = await fetch(PAYLOAD_GRAPHQL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    next: NEXT_CONFIG,
    body: JSON.stringify({
      query: PAGES,
    }),
  }).then((res) => res.json());

  if (error) {
    console.error(JSON.stringify(error));

    return undefined;
  }

  return data.Pages.docs;
};
