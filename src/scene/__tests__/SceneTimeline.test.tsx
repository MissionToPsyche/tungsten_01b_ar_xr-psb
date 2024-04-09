import { render, screen } from '@testing-library/react';
import SceneTimeline from '../SceneTimeline.tsx';
import { vi } from 'vitest';

vi.mock('../use-scene.ts');
vi.mock('../get-scene-config.ts');
vi.mock('../../settings/use-settings.ts');
vi.mock('@chakra-ui/react', async () => ({
  ...(await vi.importActual<object>('@chakra-ui/react')),
  useBreakpointValue: vi.fn(() => 'sm'),
  useMediaQuery: vi.fn(() => [true, 0])
}));

const setup = () => render(<SceneTimeline />);

describe('<SceneTimeline/>', () => {
  it('should render the scene timeline', () => {
    setup();

    expect(screen.getByText('Assembly')).toBeInTheDocument();
    expect(screen.getByText('2021')).toBeInTheDocument();
    expect(screen.getByText('Launch')).toBeInTheDocument();
    expect(screen.getByText('2022')).toBeInTheDocument();
  });

  it('should combine timeline steps with the same title and date', () => {
    setup();

    // The mock data has two scenes with the same "Assembly" title and "2021" date
    expect(screen.getAllByText('Assembly')).toHaveLength(1);
    expect(screen.getAllByText('2021')).toHaveLength(1);
  });
});
