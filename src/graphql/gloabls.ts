import { LINK } from './link';

export const GLOBALS = `
  query Globals {
    NavMenu {
      navItems {
        ${LINK}
      }
    }
  }
`;
