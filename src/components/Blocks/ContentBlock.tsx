import Serialize from '~components/Serialize';
import { PayloadContentBlock } from '~interfaces';

import classes from './ContentBlock.module.scss';

interface ContentBlockProps {
  block: PayloadContentBlock;
}

export default function ContentBlock({ block }: ContentBlockProps) {
  const { contentFields: fields } = block;

  return (
    <div className={classes.container}>
      <Serialize nodes={fields.content as any} />
    </div>
  );
}
