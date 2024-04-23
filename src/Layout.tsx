import HeaderComponent from './pages/Components/HeaderComponent'
import FooterComponent from './pages/Components/FooterComponent';
import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
     <div className="flex flex-col min-h-screen">
      <HeaderComponent />
      <main className="flex-grow">
        {children}
      </main>
      <FooterComponent />
    </div>
  );
};

export default Layout;