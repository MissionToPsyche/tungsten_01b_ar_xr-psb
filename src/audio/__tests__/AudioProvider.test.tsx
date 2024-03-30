import { fireEvent, render } from '@testing-library/react';
import useAudio from '../use-audio';

vi.mock('../use-audio');

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

const setup = () => render(<AudioController />);

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
