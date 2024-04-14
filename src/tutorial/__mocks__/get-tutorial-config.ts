import { TutorialView } from '../get-tutorial-config.ts';
import getMockTutorialComponent from './get-mock-tutorial-component.tsx';

const steps: TutorialView[] = [0, 1, 2, 3].map((index) => ({
  key: (index + 1).toString(),
  component: getMockTutorialComponent(index),
  label: `Tutorial ${index + 1}`,
  description: `Description ${index + 1}`
}));

const getTutorialConfig = () => ({ steps });

export default getTutorialConfig;
