import Image from 'next/image';

import { IconArrowRight } from '~assets';
import { LinkButton } from '~components/Button';
import { PayloadPhotoSectionBlock } from '~interfaces';

import classes from './PhotoSectionBlock.module.scss';

const PAYLOAD_URL = process.env.NEXT_PUBLIC_PAYLOAD_URL;

interface PhotoSectionBlockProps {
  block: PayloadPhotoSectionBlock;
}

export default function PhotoSectionBlock({ block }: PhotoSectionBlockProps) {
  const { photoSectionFields: fields } = block;

  return (
    <section className={classes.section}>
      {fields.title ? (
        <div className={classes.titleContainer}>
          <h2 className="ms-display-medium">{fields.title}</h2>
          {fields.showPageLink && fields.pageLink.type === 'reference' && fields.pageLink.reference ? (
            <div className={classes.sectionTitleButton}>
              <LinkButton href={fields.pageLink.reference!.slug} variant="outline">
                view all
                <IconArrowRight />
              </LinkButton>
            </div>
          ) : null}
        </div>
      ) : null}
      <div className={fields.scrollContainer ? classes.imageScrollContainer : classes.imageContainer}>
        {fields.photoSectionMedia?.map((m, i) => (
          <Image
            key={i}
            alt={m.alt}
            src={PAYLOAD_URL! + m.sizes.preview.url}
            width={m.sizes.preview.width}
            height={m.sizes.preview.height}
            className={classes.image}
          />
        ))}
      </div>
    </section>
  );
}
