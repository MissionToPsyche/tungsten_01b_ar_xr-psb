import { mockResizeObserver } from 'jsdom-testing-mocks';
import { fireEvent, render, screen } from '@testing-library/react';
import { expect, it, Mock, vi } from 'vitest';
import ViewManager from '../ViewManager.tsx';
import { ViewConfig } from '../types/view-config.ts';
import ViewName from '../types/view-name.ts';
import getViewConfig from '../get-view-config.ts';

vi.mock('../get-view-config.ts');
mockResizeObserver();

const mockConfig: ViewConfig = {
  defaultView: ViewName.LANDING_PAGE,
  views: {
    [ViewName.LANDING_PAGE]: {
      component: ({ changeView }) => (
        <div>
          <p>Landing Page</p>
          <button
            onClick={() => {
              changeView(ViewName.AR_SCENES);
            }}
          >
            change
          </button>
        </div>
      )
    },
    [ViewName.AR_SCENES]: { component: () => <p>AR Scenes</p> }
  }
};

(getViewConfig as Mock).mockReturnValue(mockConfig);

const setup = () => render(<ViewManager />);

describe('<ViewManager/>', () => {
  it('should render the default view initially', () => {
    setup();

    expect(screen.getByText('Landing Page')).toBeInTheDocument();
  });

  it('should change views if changeView is called', () => {
    setup();

    fireEvent.click(screen.getByText('change'));

    expect(screen.getByText('AR Scenes')).toBeInTheDocument();
  });
});
