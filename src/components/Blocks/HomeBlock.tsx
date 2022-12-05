import Image from 'next/image';

import { InstagramLogo, MarcoSantanaLogo } from '~assets';
import { LinkButton } from '~components/Button';
import { PayloadHomeBlock } from '~interfaces';

import classes from './HomeBlock.module.scss';

interface HomeBlockProps {
  block: PayloadHomeBlock;
}

const PAYLOAD_URL = process.env.NEXT_PUBLIC_PAYLOAD_URL;

export default function HomeBlock({ block }: HomeBlockProps) {
  const { homeFields: fields } = block;

  return (
    <header className={classes.heroContainer}>
      <div className={classes.heroText}>
        <h1 className="ms-sr-only">Marco Santana</h1>
        <div aria-hidden="true">
          <MarcoSantanaLogo className={classes.heroLogo} />
        </div>
        <p className={classes.heroSubtitle}>{fields.subTitle}</p>
      </div>
      <div className={classes.instagramButtonContainer}>
        {fields.instagramLinks.map((link, i) => (
          <LinkButton
            key={i}
            aria-label={'Instagram profile, ' + link.label}
            href={link.url}
            target="_blank"
            size="large"
            variant="ghost"
            className={`${classes.instagramButton} ms-instagram-button`}
          >
            <Image
              src={PAYLOAD_URL + link.instagramMedia.url!}
              alt={link.instagramMedia.alt}
              width={150}
              height={150}
              priority
            />
            <div className={classes.buttonText}>
              <InstagramLogo />
              {link.label}
            </div>
          </LinkButton>
        ))}
      </div>
    </header>
  );
}
