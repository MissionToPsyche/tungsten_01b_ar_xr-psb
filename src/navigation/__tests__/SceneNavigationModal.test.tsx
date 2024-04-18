import { fireEvent, render, screen } from '@testing-library/react';
import SceneNavigationModal from '../SceneNavigationModal.tsx';
import getEnumStringKeys from '../../common/utils/get-enum-string-keys.ts';
import SceneName from '../../scene/types/scene-name.ts';
import useScene from '../../scene/use-scene.ts';

vi.mock('../../scene/use-scene.ts');

const onClose = vi.fn();

const expectedSceneNavigationButtons = getEnumStringKeys(SceneName).filter(
  (key) => key !== 'UNSET'
);

const setup = (isOpen = true) =>
  render(<SceneNavigationModal isOpen={isOpen} onClose={onClose} />);

describe('<SceneNavigationModal/>', () => {
  it('should render the modal', () => {
    setup();

    expect(screen.getByText('Scene Navigation')).toBeInTheDocument();
  });

  it.each(expectedSceneNavigationButtons.map((key) => [key]))(
    'should render the button for scene %s',
    (key) => {
      setup();

      expect(
        screen.getByText(key.replace(/_/g, ' ').toLowerCase())
      ).toBeInTheDocument();
    }
  );

  it('should not render the modal if isOpen is false', () => {
    setup(false);

    expect(screen.queryByText('Scene Navigation')).not.toBeInTheDocument();
  });

  it('should call onClose when the close button is clicked', () => {
    setup();

    fireEvent.click(screen.getByLabelText('Close'));

    expect(onClose).toHaveBeenCalled();
  });

  it('should call setCurrentScene when a scene button is clicked', () => {
    setup();

    fireEvent.click(
      screen.getByText(
        expectedSceneNavigationButtons[0].replace(/_/g, ' ').toLowerCase()
      )
    );

    expect(useScene().setCurrentScene).toHaveBeenCalledWith(
      SceneName[expectedSceneNavigationButtons[0]]
    );
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
});
