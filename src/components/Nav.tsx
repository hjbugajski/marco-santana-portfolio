import { MSLogo } from '~assets';
import { LinkButton } from '~components/Button';
import { PayloadNavMenu } from '~interfaces';

import classes from './Nav.module.scss';

interface NavProps {
  navMenu: PayloadNavMenu | undefined;
}

export default function Nav({ navMenu }: NavProps) {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <LinkButton href="/" variant="ghost" size="icon" aria-label="Home" disableIsActive>
            <MSLogo />
          </LinkButton>
        </li>
        {navMenu?.navItems?.map((item, i) => (
          <li key={i}>
            <LinkButton
              href={item.type === 'reference' ? item.reference.slug : item.url}
              target={item.newTab ? '_blank' : undefined}
              variant="ghost"
            >
              {item.type === 'reference' ? item.reference.name : item.label}
            </LinkButton>
          </li>
        ))}
      </ul>
    </nav>
  );
}
