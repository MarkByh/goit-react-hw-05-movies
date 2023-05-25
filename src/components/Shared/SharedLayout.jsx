import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { Header } from 'components/header/Header';
import Loader from '../loader/Loader';

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
