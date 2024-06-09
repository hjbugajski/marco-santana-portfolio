// [START] Fields
export interface PayloadFieldContent {
  root: {
    children: {
      type: string;
      version: number;
      [k: string]: unknown;
    }[];
    direction: ('ltr' | 'rtl') | null;
    format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
    indent: number;
    type: string;
    version: number;
  };
  [k: string]: unknown;
}

export interface PayloadFieldLink {
  text: string;
  type: 'internal' | 'external';
  relationship?: {
    value: PayloadPage;
  } | null;
  anchor?: string | null;
  url: string;
  rel: ('noreferrer' | 'nofollow')[];
  newTab: boolean;
  umamiEvent?: string | null;
  umamiEventId?: string | null;
}
// [END] Fields

// [START] Blocks
export interface PayloadBlockGallery {
  blockType: 'gallery';
  type: 'grid' | 'carousel';
  images: PayloadMedia[];
}

export interface PayloadBlockHero {
  blockType: 'hero';
  subheading: string;
  links: (PayloadFieldLink & {
    image: PayloadMedia;
  })[];
}

export interface PayloadBlockSection {
  blockType: 'section';
  heading: string;
  hasLink: boolean;
  link: PayloadFieldLink;
  content?: PayloadFieldContent | null;
}
// [END] Blocks

// [START] Collections
export interface PayloadMedia {
  id: string;
  alt: string;
  dataUrl: string;
  updatedAt: string;
  createdAt: string;
  url: string;
  filename: string;
  mimeType: string;
  filesize: number;
  width: number;
  height: number;
  sizes: {
    preview: {
      url: string;
      width: number;
      height: number;
      mimeType: string;
      filesize: number;
      filename: string;
    };
    thumbnail: {
      url: string;
      width: number;
      height: number;
      mimeType: string;
      filesize: number;
      filename: string;
    };
  };
}

export interface PayloadPage {
  id: string;
  slug: string;
  title: string;
  description: string;
  content?: PayloadFieldContent | null;
  parent?: PayloadPage | null;
  breadcrumbs: {
    url: string;
    label: string;
    id: string;
  }[];
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
// [END] Collections
