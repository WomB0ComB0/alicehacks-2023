import React, { FC, PropsWithChildren } from 'react';
import { ThemeProvider, ToasterProvider } from '@/components/providers';

const Providers: FC<PropsWithChildren> = ({ children }) => (
  <>
    <ToasterProvider />
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {children}
    </ThemeProvider>
  </>
);

export default Providers;
