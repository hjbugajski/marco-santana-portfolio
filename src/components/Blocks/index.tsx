import { BlocksProps } from '~interfaces';

import ContentBlock from './ContentBlock';
import HomeBlock from './HomeBlock';
import PhotoSectionBlock from './PhotoSectionBlock';

const blocks = {
  content: ContentBlock,
  home: HomeBlock,
  photoSection: PhotoSectionBlock
};

export function Blocks({ block }: BlocksProps) {
  const RenderBlock = blocks[block.blockType];

  // @ts-ignore
  return RenderBlock ? <RenderBlock block={block} /> : null;
}
