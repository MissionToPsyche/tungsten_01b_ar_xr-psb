import React from 'react';
import ViewName from './view-name.ts';

/**
 * Type representing the interface of a view component. I.e. a component that
 * would be a direct child of the view manager.
 */
export type ViewComponent = React.FC<{
  /**
   * Function to trigger a transition to a new view
   * @param newView The new view to transition to
   */
  changeView: (newView: ViewName) => void;
}>;
