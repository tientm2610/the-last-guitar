import HeaderComponent from './pages/Components/HeaderComponent'
import FooterComponent from './pages/Components/FooterComponent';
import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <HeaderComponent />
      {children}
      <FooterComponent />
    </div>
  );
};

export default Layout;