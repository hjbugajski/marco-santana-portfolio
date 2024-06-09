import { BaseProps } from '../types/base-props';

export default function IconArrowUpRight(props: BaseProps) {
  return (
    <svg id="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
      <polygon
        fill="currentColor"
        points="10 6 10 8 22.59 8 6 24.59 7.41 26 24 9.41 24 22 26 22 26 6 10 6"
        style={{ stroke: 'currentColor', strokeWidth: 0.5 }}
      />
    </svg>
  );
}
