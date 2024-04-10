import { fireEvent, render, screen } from '@testing-library/react';
import MenuBar from '../MenuBar.tsx';
import { vi } from 'vitest';
import { Suspense } from 'react';

vi.mock('../../../settings/use-settings.ts');
vi.mock('../../../scene/use-scene.ts');
vi.mock('@chakra-ui/react', async () => ({
  ...(await vi.importActual<object>('@chakra-ui/react')),
  useMediaQuery: vi.fn(() => [true, 0])
}));

const setup = () =>
  render(
    <Suspense>
      <MenuBar />
    </Suspense>
  );

describe('<MenuBar />', () => {
  it('should render the information modal when the information button is clicked', async () => {
    setup();

    const informationButton = await screen.findByLabelText(
      'Information & Credits'
    );
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    fireEvent.click(informationButton.firstChild!);

    expect(screen.getByText('Credits')).toBeInTheDocument();
    expect(screen.getByText('Application Development')).toBeInTheDocument();
  });
});
