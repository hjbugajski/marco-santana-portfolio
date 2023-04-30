import Footer from '~components/Footer';
import Nav from '~components/Nav';
import { fetchGlobals } from '~graphql';

import '~scss/app.scss';

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { navMenu } = await fetchGlobals();

  return (
    <html lang="en">
      <body>
        <Nav navMenu={navMenu} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
