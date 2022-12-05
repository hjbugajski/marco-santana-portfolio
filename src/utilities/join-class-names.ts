export function joinClassNames(...args: any[]): string {
  const classNames: string[] = [];

  args.forEach((arg) => {
    if (arg && typeof arg === 'string') {
      classNames.push(arg.trim());
    }
  });

  return classNames.join(' ');
}
