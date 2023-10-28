import { ViewConfig } from './types/view-config.ts';
import ViewName from './types/view-name.ts';
import LandingView from './views/LandingView.tsx';
import SceneManager from '../scene/SceneManager.tsx';

/**
 * Function to get the view configuration. Right now extracted into a method
 * rather than a constant for easier testing. But also could be adjusted to
 * retrieve a configuration based on the environment in the future.
 *
 * @returns The view configuration.
 */
const getViewConfig = (): ViewConfig => ({
  defaultView: ViewName.LANDING_PAGE,
  views: {
    [ViewName.LANDING_PAGE]: {
      component: LandingView
    },
    [ViewName.AR_SCENES]: {
      component: SceneManager
    }
  }
});

export default getViewConfig;
