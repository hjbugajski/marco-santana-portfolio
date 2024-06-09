import PayloadButtonLink from '@/lib/components/payload-button-link';
import { PayloadBlockSection } from '@/lib/types/payload';

import Serialize from '../serialize';

export default function BlockSection({ heading, hasLink, link, content }: PayloadBlockSection) {
  return (
    <section className="w-full py-8">
      <div className="border-t-2 border-t-black dark:border-t-white">
        <div className="flex flex-row flex-wrap items-center justify-between gap-4 py-8">
          <h1 className="m-0">{heading}</h1>
          {hasLink && <PayloadButtonLink {...link} />}
        </div>
        {content?.root?.children && <Serialize nodes={content.root.children} />}
      </div>
    </section>
  );
}
