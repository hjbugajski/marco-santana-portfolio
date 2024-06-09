import { BaseProps } from '../types/base-props';

export const IconArrowRight = (props: BaseProps) => (
  <svg id="icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" {...props}>
    <polygon
      fill="currentColor"
      points="18 6 16.57 7.393 24.15 15 4 15 4 17 24.15 17 16.57 24.573 18 26 28 16 18 6"
      style={{ stroke: 'currentColor', strokeWidth: 0.5 }}
    />
  </svg>
);
