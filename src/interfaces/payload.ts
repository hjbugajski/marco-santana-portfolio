/* tslint:disable */
/**
 * This file was automatically generated by Payload CMS.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {}

/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "nav-menu".
 */
export interface PayloadNavMenu {
  id: string;
  navItems: {
    type: 'reference' | 'external';
    newTab?: boolean;
    reference: PayloadPage;
    label: string;
    url: string;
    id?: string;
  }[];
}

/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface PayloadUser {
  id: string;
  firstName?: string;
  lastName?: string;
  roles: ('admin' | 'editor' | 'public')[];
  email?: string;
  resetPasswordToken?: string;
  resetPasswordExpiration?: string;
  loginAttempts?: number;
  lockUntil?: string;
  createdAt: string;
  updatedAt: string;
}

/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface PayloadMedia {
  id: string;
  alt: string;
  url?: string;
  filename?: string;
  mimeType?: string;
  filesize?: number;
  width?: number;
  height?: number;
  sizes: {
    preview: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
    thumbnail: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
  };
  createdAt: string;
  updatedAt: string;
}

export interface PayloadHomeBlock {
  homeFields: {
    subTitle?: string;
    instagramLinks: {
      label: string;
      url: string;
      instagramMedia: PayloadMedia;
      id?: string;
    }[];
  };
  id?: string;
  blockName?: string;
  blockType: 'home';
}

export interface PayloadContentBlock {
  contentFields: {
    content?: {
      [k: string]: unknown;
    }[];
  };
  id?: string;
  blockName?: string;
  blockType: 'content';
}

export interface PayloadPhotoSectionBlock {
  photoSectionFields: {
    title?: string;
    showPageLink?: boolean;
    pageLink: {
      type: 'reference' | 'external';
      newTab?: boolean;
      reference: PayloadPage;
      label: string;
      url: string;
    };
    scrollContainer?: boolean;
    photoSectionMedia: PayloadMedia[];
  };
  id?: string;
  blockName?: string;
  blockType: 'photoSection';
}

/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages".
 */
export interface PayloadPage {
  id: string;
  name: string;
  slug: string;
  displayName?: boolean;
  title: string;
  layout: (PayloadHomeBlock | PayloadContentBlock | PayloadPhotoSectionBlock)[];
  _status?: 'draft' | 'published';
  createdAt: string;
  updatedAt: string;
}
