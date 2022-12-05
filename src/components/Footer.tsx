import classes from './Footer.module.scss';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={classes.footer}>
      <p>marco santana &ndash; {year}</p>
    </footer>
  );
}
