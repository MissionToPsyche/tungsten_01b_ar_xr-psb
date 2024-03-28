import { render } from '@testing-library/react';
import SettingsModal from '../SettingsModal.tsx';
import useSettings from '../use-settings.ts';
import { RecoilRoot } from 'recoil';
import { AnimationProvider } from '../../animations/AnimationProvider.tsx';
import { AudioProvider } from '../../audio/AudioProvider.tsx';

vi.mock('../use-settings.ts');

const onClose = vi.fn();

const setup = (isOpen: boolean, hideArButton: boolean) =>
  render(
    <RecoilRoot>
      <AudioProvider>
        <AnimationProvider>
          <SettingsModal
            isOpen={isOpen}
            onClose={onClose}
            hideArButton={hideArButton}
          />
        </AnimationProvider>
      </AudioProvider>
    </RecoilRoot>
  );

describe('<SettingsModal/>', () => {
  it('should render the modal', () => {
    const { getByText } = setup(true, false);

    expect(getByText('Settings')).toBeInTheDocument();
  });

  it('should render the AR toggle', () => {
    const { getByText } = setup(true, false);

    expect(getByText('Enable Augmented Reality?')).toBeInTheDocument();
  });

  it('should render the audio toggle', () => {
    const { getByText } = setup(true, false);

    expect(getByText('Enable Audio?')).toBeInTheDocument();
  });

  it('should not render the AR toggle when hideArButton is true', () => {
    const { queryByText } = setup(true, true);

    expect(queryByText('Enable Augmented Reality?')).not.toBeInTheDocument();
  });

  it('should call onClose when the modal is closed', () => {
    const { getByLabelText } = setup(true, false);

    getByLabelText('Close').click();

    expect(onClose).toHaveBeenCalled();
  });

  it('should call setArEnabled when the AR toggle is changed', () => {
    const { getByLabelText } = setup(true, false);

    getByLabelText('Enable Augmented Reality?').click();

    expect(useSettings().setArEnabled).toHaveBeenCalledWith(true);
  });

  it('should call setAudioEnabled when the audio toggle is changed', () => {
    const { getByLabelText } = setup(true, false);

    getByLabelText('Enable Audio?').click();

    expect(useSettings().setAudioEnabled).toHaveBeenCalledWith(true);
  });
});
