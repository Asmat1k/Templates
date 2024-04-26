import type { FC } from 'react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const DefaultLayout: FC = () => (
  <>
    <header>Header</header>
    <main className='layout_main'>
      <Suspense fallback='Элемент загрузки...'>
        <Outlet />
      </Suspense>
    </main>
    <footer>Footer</footer>
  </>
);