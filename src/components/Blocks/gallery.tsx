import Image from 'next/image';

import { PayloadBlockGallery } from '@/lib/types/payload';
import { cn } from '@/lib/utils/cn';

export default function BlockGallery({ images, type }: PayloadBlockGallery) {
  const carousel = type === 'carousel';

  return (
    <ul
      className={cn(
        'my-8 items-center gap-4 first:mt-0 last:mb-0',
        carousel
          ? 'flex flex-row overflow-x-padded-scroll'
          : 'grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4',
      )}
    >
      {images.map((image, i) => (
        <li
          key={i}
          className={cn(
            carousel && 'min-w-[18rem] max-w-xs mi-auto sm:min-w-[24rem] sm:max-w-sm',
            image.width > image.height && 'sm:col-span-2',
          )}
        >
          <Image
            src={image.sizes.preview.url}
            width={image.sizes.preview.width}
            height={image.sizes.preview.height}
            placeholder="blur"
            blurDataURL={image.dataUrl}
            alt={image.alt}
            loading="lazy"
          />
        </li>
      ))}
    </ul>
  );
}
