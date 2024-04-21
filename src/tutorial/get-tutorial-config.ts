import React, { lazy } from 'react';
import ArTutorial from './views/ArTutorial';

const TooltipTutorial = lazy(() => import('./views/TooltipTutorial'));
const ControlsTutorial = lazy(() => import('./views/ControlsTutorial'));
const SettingsTutorial = lazy(() => import('./views/SettingsTutorial'));
const Disclaimer = lazy(() => import('./views/Disclaimer'));

export interface TutorialView {
  key: string;
  component: React.FC;
  description: string;
  label: string;
}

const steps: TutorialView[] = [
  {
    key: '0',
    component: TooltipTutorial,
    description: 'Tap the target below to view the tooltip.',
    label: 'Tooltips'
  },
  {
    key: '1',
    component: ArTutorial,
    description:
      'To explore in AR-Mode, simply point your camera toward the marker.',
    label: 'AR'
  },
  {
    key: '2',
    component: ControlsTutorial,
    description:
      'Drag and zoom to explore the scene objects when exploring Non-AR mode.',
    label: 'Non-AR'
  },
  {
    key: '3',
    component: SettingsTutorial,
    description:
      'Use the menu bar to restart the experience, access settings, view credits, tutorial or navigate scenes.',
    label: 'Settings'
  },
  {
    key: '4',
    component: Disclaimer,
    description:
      'The displayed models are designed to enrich the experience and are not depicted to real-world scale. Additionally, sound effects are for illustrative purposes and may not be accurate or may be present in cases where sound is not possible.',
    label: 'Disclaimer'
  }
];

const getTutorialConfig = () => ({ steps });

export default getTutorialConfig;
