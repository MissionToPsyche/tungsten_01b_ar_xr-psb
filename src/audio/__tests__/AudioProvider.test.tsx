import { fireEvent, render } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import useAudio from '../__mocks__/use-audio.ts';
import { AudioProvider } from '../AudioProvider';

vi.mock('../__mocks__/useAudio.ts');

const AudioController = () => {
  const audio = useAudio();

  return (
    <div>
      <button aria-label="Play" onClick={audio.playAudio}></button>
      <button aria-label="Stop" onClick={audio.stopAudio}></button>
      <button aria-label="Pause" onClick={audio.pauseAudio}></button>
    </div>
  );
};

const setup = () =>
  render(
    <RecoilRoot>
      <AudioProvider>
        <AudioController />
      </AudioProvider>
    </RecoilRoot>
  );

describe('<AudioProvider/>', () => {
  it('should play audio when instructed', () => {
    const { getByLabelText } = setup();
    fireEvent.click(getByLabelText('Play'));
    expect(useAudio().playAudio).toHaveBeenCalled();
  });

  it('should stop audio when instructed', () => {
    const { getByLabelText } = setup();
    fireEvent.click(getByLabelText('Stop'));
    expect(useAudio().stopAudio).toHaveBeenCalled();
  });

  it('should pause audio when instructed', () => {
    const { getByLabelText } = setup();
    fireEvent.click(getByLabelText('Pause'));
    expect(useAudio().pauseAudio).toHaveBeenCalled();
  });
});
