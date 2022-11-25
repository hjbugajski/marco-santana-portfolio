import { LINK } from './link';

export const CONTENT = `
... on Content {
  blockType,
  contentFields {
    content
  }
}
`;

export const HOME = `
...on Home {
  blockType
  homeFields {
    instagramLinks {
      label
      url
      instagramMedia {
        alt
        url
      }
    }
    subTitle
  }
}
`;

export const PHOTO_SECTION = `
... on PhotoSection {
  blockType
  photoSectionFields {
    pageLink {
      ${LINK}
    }
    photoSectionMedia {
      alt
      url
      width
      height
    }
    scrollContainer
    showPageLink
    title
  }
}
`;
