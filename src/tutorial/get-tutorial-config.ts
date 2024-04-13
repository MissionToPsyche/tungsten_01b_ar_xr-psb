import React, { lazy } from 'react';

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
    component: ControlsTutorial,
    description:
      'Drag and zoom to explore the scene objects. Note: Only works in Non-AR Mode.',
    label: 'Controls'
  },
  {
    key: '2',
    component: SettingsTutorial,
    description:
      'Use the menu bar to restart the experience, access settings, view credits, tutorial or navigate scenes.',
    label: 'Settings'
  },
  {
    key: '3',
    component: Disclaimer,
    description:
      'The displayed models are designed to enrich the experience and are not depicted to real-world scale.',
    label: 'Disclaimer'
  }
];

const getTutorialConfig = () => ({ steps });

export default getTutorialConfig;
