import React, { useMemo, useState } from 'react';
import getViewConfig from './get-view-config.ts';

/**
 * Manages the primary application views. Can be viewed similar to a router in
 * applications that have multiple pages.
 */
const ViewManager: React.FC = () => {
  const config = useMemo(getViewConfig, []);
  const [currentView, setCurrentView] = useState(config.defaultView);

  const { component: CurrentViewComponent } = config.views[currentView];

  return <CurrentViewComponent changeView={setCurrentView} />;
};
export default ViewManager;
