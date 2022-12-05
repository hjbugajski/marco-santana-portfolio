import { PayloadContentBlock, PayloadHomeBlock, PayloadPhotoSectionBlock } from './payload';

export interface BlocksProps {
  block: PayloadHomeBlock | PayloadContentBlock | PayloadPhotoSectionBlock;
}
