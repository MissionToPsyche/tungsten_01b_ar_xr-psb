import React from 'react';

/**
 * Convenience component that renders its `children` if `shouldRender` is truthy
 * @param shouldRender If the `children` should be rendered
 * @param children The children to render
 */
const RenderIf: React.FC<
  React.PropsWithChildren<{ shouldRender?: boolean }>
> = ({ shouldRender, children }) => {
  if (!shouldRender) {
    return null;
  }

  return children;
};

export default RenderIf;
