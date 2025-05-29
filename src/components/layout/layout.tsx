import { PropsWithChildren } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';

type LayoutProps = {
  className?: string;
};

function Layout({ children, className = '' }: PropsWithChildren<LayoutProps>) {
  return (
    <div className={`page ${className}`}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
