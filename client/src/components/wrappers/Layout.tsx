import React, { Fragment, PropsWithChildren } from 'react';
import { FooterBar } from '@/components/index';
import { Main } from '@/components/semantics/index';
import Header from '../Header';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <Fragment>
      <Header />
      <Main className={`flex h-fit w-full flex-col items-center justify-center`}>{children}</Main>
      <FooterBar />
    </Fragment>
  );
}
