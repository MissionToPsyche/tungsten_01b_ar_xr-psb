import React, { Suspense, useMemo, useState } from 'react';
import LoaderContext from './loader-context.ts';
import LoaderUI from './LoaderUI.tsx';

/**
 * A provider that manages loading progress and displays the loader fallback
 * while it's children are loading.
 */
const LoaderProvider = ({ children }: React.PropsWithChildren) => {
  const [progress, setProgress] = useState(0);

  const value = useMemo(
    () => ({
      progress,
      setProgress
    }),
    [progress]
  );

  return (
    <LoaderContext.Provider value={value}>
      <Suspense fallback={<LoaderUI progress={progress} />}>
        {children}
      </Suspense>
    </LoaderContext.Provider>
  );
};

export default LoaderProvider;
