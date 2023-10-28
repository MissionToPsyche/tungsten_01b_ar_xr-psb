import ViewName from './view-name.ts';
import { ViewComponent } from './view-component.ts';

/**
 * Configuration for a specific view
 */
interface IndividualViewConfig {
  // The component to render when displaying the view
  component: ViewComponent;
}

/**
 * Configuration for the view feature
 */
export interface ViewConfig {
  // The initial view to display
  defaultView: ViewName;
  // All available views
  views: Record<ViewName, IndividualViewConfig>;
}
