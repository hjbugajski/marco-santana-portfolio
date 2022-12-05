import { CONTENT, HOME, PHOTO_SECTION } from './blocks';

export const PAGE = `
  query Page($slug: String) {
    Pages(where: { slug: { equals: $slug} }, draft: false) {
      docs {
        id
        name
        slug
        displayName
        title
        layout {
          ${CONTENT}
          ${HOME}
          ${PHOTO_SECTION}
        }
      }
    }
  }
`;

export const PAGES = `
  query Pages {
    Pages(limit: 500) {
      docs {
        slug
      }
    }
  }
`;
