import Image from 'next/image';
import Link from 'next/link';

import { IconMarcoSantana } from '@/lib/icons/icon-marco-santana';
import { PayloadBlockHero } from '@/lib/types/payload';
import { linkProps } from '@/lib/utils/link';

export default function BlockHero({ subheading, links }: PayloadBlockHero) {
  return (
    <div className="w-full pt-8">
      <IconMarcoSantana className="mb-6" />
      <p className="text-center text-2xl md:text-4xl">{subheading}</p>
      <ul className="flex flex-row gap-8 pb-8 pt-16 overflow-x-padded-scroll sm-alt:justify-center">
        {links.map((link, i) => (
          <li key={i} className="shrink-0">
            <Link
              {...linkProps(link)}
              className="group flex flex-col items-center justify-center gap-4 transition-all focus:outline-none focus:ring-2 focus:ring-black/75 focus:ring-offset-2 focus:ring-offset-white focus:dark:ring-white/75 focus:dark:ring-offset-black sm-alt:w-36"
            >
              <Image
                src={link.image.sizes.preview.url}
                width={link.image.sizes.preview.width}
                height={link.image.sizes.preview.height}
                placeholder="blur"
                blurDataURL={link.image.dataUrl}
                alt={link.image.alt}
                loading="eager"
                className="h-24 w-24 rounded-full ring-2 ring-black ring-offset-4 ring-offset-white transition group-hover:opacity-90 dark:ring-white/75 dark:ring-offset-black"
              />
              <span className="text-lg underline-offset-4 group-hover:underline">{link.text}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
