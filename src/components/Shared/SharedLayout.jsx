import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { Header } from 'components/Shared/header/Header';
import Loader from './loader/Loader';

const SharedLayout = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
export default SharedLayout;
