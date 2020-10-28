import React, { lazy, Suspense } from 'react';

const LazyDirectory = lazy(() => import('./Directory'));

const Directory = props => (
  <Suspense fallback={null}>
    <LazyDirectory {...props} />
  </Suspense>
);

export default Directory;
