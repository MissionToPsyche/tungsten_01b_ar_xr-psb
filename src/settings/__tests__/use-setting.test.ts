import { useRecoilState } from 'recoil';
import useSettings, { Settings } from '../use-settings.ts';
import { renderHook } from '@testing-library/react';

vi.mock('recoil', async () => ({
  ...(await vi.importActual<object>('recoil')),
  useRecoilState: vi.fn()
}));

const mockState: Settings = {
  arEnabled: true,
  audioEnabled: true,
  tooltipsEnabled: true
};

const mockSetState = vi.fn();

const setup = () => renderHook(() => useSettings());

describe('useSettings', () => {
  it('should return the current state', () => {
    vi.mocked(useRecoilState).mockReturnValueOnce([mockState, mockSetState]);

    const {
      result: {
        current: { arEnabled, audioEnabled }
      }
    } = setup();

    expect(arEnabled).toEqual(mockState.arEnabled);
    expect(audioEnabled).toEqual(mockState.audioEnabled);
  });

  it('should mutate the state when calling setArEnabled', () => {
    vi.mocked(useRecoilState).mockReturnValueOnce([mockState, mockSetState]);

    const {
      result: {
        current: { setArEnabled }
      }
    } = setup();

    setArEnabled(false);

    const setStateCall = mockSetState.mock.calls[0] as unknown as [
      (prevState: Settings) => Settings
    ];
    const setStateFn = setStateCall[0];
    expect(setStateFn(mockState)).toEqual({
      ...mockState,
      arEnabled: false
    });
  });

  it('should mutate the state when calling setAudioEnabled', () => {
    vi.mocked(useRecoilState).mockReturnValueOnce([mockState, mockSetState]);

    const {
      result: {
        current: { setAudioEnabled }
      }
    } = setup();

    setAudioEnabled(false);

    const setStateCall = mockSetState.mock.calls[0] as unknown as [
      (prevState: Settings) => Settings
    ];
    const setStateFn = setStateCall[0];
    expect(setStateFn(mockState)).toEqual({
      ...mockState,
      audioEnabled: false
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
});
