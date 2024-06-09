import Link from 'next/link';

import { Button } from './button';
import { IconArrowRight } from '../icons/icon-arrow-right';
import IconArrowUpRight from '../icons/icon-arrow-up-right';
import { PayloadFieldLink } from '../types/payload';
import { cn } from '../utils/cn';
import { linkProps } from '../utils/link';

export type PayloadButtonLinkProps = PayloadFieldLink & {
  className?: string;
};

export default function PayloadButtonLink({ className, ...rest }: PayloadButtonLinkProps) {
  const Icon = rest.type === 'internal' ? IconArrowRight : IconArrowUpRight;

  return (
    <Button asChild className={cn('pl-6 pr-4', className)}>
      <Link {...linkProps(rest)}>
        {rest.text}
        <Icon className="h-5 w-5" />
      </Link>
    </Button>
  );
}
