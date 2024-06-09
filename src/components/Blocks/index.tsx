import { PayloadBlockGallery, PayloadBlockHero, PayloadBlockSection } from '@/lib/types/payload';

import BlockGallery from './gallery';
import BlockHero from './hero';
import BlockSection from './section';

const blocks = {
  gallery: BlockGallery,
  hero: BlockHero,
  section: BlockSection,
};

export function Blocks({ blockType, ...props }: PayloadBlockGallery | PayloadBlockHero | PayloadBlockSection) {
  const RenderBlock: React.FC<any> = blocks[blockType];

  return RenderBlock ? <RenderBlock {...props} /> : null;
}
