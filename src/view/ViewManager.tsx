import React, { Suspense, useMemo, useState } from 'react';
import getViewConfig from './get-view-config.ts';
import LoaderUI from '../common/loader/LoaderUI.tsx';

/**
 * Manages the primary application views. Can be viewed similar to a router in
 * applications that have multiple pages.
 */
const ViewManager: React.FC = () => {
  const config = useMemo(getViewConfig, []);
  const [currentView, setCurrentView] = useState(config.defaultView);

  const { component: CurrentViewComponent } = config.views[currentView];

  return (
    <Suspense fallback={<LoaderUI progress={50} height="100vh" padding={6} />}>
      <CurrentViewComponent changeView={setCurrentView} />
    </Suspense>
  );
};

export default ViewManager;
