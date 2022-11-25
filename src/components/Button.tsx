import Link, { LinkProps } from 'next/link';

import { BaseProps } from '~interfaces';
import { joinClassNames } from '~utilities';

import './Button.scss';

/* [START] Types */
export interface BaseButtonProps extends BaseProps {
  children: any;
  color?: 'attention' | 'danger' | 'info' | 'neutral' | 'primary' | 'success';
  onClick?: any;
  size?: 'regular' | 'large' | 'icon';
  variant?: 'flat' | 'ghost' | 'outline';
}

export interface ButtonProps extends BaseButtonProps {
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export interface LinkButtonProps extends BaseButtonProps, LinkProps {
  disableIsActive?: boolean;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  target?: string;
}
/* [END] Types */

/* [START] Utilities */
function buttonClassName(prop: string | undefined): string | undefined {
  return prop ? `ms-${prop}-button` : undefined;
}

export function buttonClassNames(props: ButtonProps | LinkButtonProps, ...extraClassNames: string[]): string {
  return joinClassNames(
    'ms-button',
    buttonClassName(props.color),
    buttonClassName(props.variant ?? 'flat'),
    buttonClassName(props.size ?? 'regular'),
    ...extraClassNames,
    props.className
  );
}
/* [END] Utilities */

/* [START] Components */
export function Button(props: ButtonProps) {
  const { disabled = false, type = 'button' } = props;
  const classNames = buttonClassNames(props, props.disabled ? 'ms-disabled-button' : '');

  return (
    <button
      aria-label={props['aria-label']}
      type={type}
      className={classNames}
      disabled={disabled}
      onClick={props.onClick}
      tabIndex={disabled ? -1 : 0}
    >
      {props.children}
    </button>
  );
}

export function LinkButton(props: LinkButtonProps) {
  const classNames = buttonClassNames(props, 'ms-link-button');
  const deleteKeys = ['children', 'className', 'color', 'disableIsActive', 'size', 'variant'];
  const linkProps = { ...props };

  deleteKeys.forEach((deleteKey) => {
    if (deleteKey in linkProps) {
      // @ts-ignore
      delete linkProps[deleteKey];
    }
  });

  return (
    <Link className={classNames} rel="noreferrer" {...linkProps}>
      {props.children}
    </Link>
  );
}
/* [END] Components */
