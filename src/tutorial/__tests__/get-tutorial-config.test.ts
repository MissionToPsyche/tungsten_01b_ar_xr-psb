import getTutorialConfig from '../get-tutorial-config.ts';

describe('getTutorialConfig', () => {
  it.each([['Tooltips'], ['AR'], ['Non-AR'], ['Settings'], ['Disclaimer']])(
    `should return a tutorial step for %s`,
    (label) => {
      const { steps } = getTutorialConfig();
      const step = steps.find((step) => step.label === label);
      expect(step).toBeDefined();
    }
  );
});
