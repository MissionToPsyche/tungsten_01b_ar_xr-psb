import ReactThreeTestRenderer from '@react-three/test-renderer';
import { expect } from 'vitest';
import ModelOutliner from '../ModelOutliner.tsx';
import { Sphere } from '@react-three/drei';
import React from 'react';

// Mock the components used within ModelOutliner
vi.mock('@react-three/postprocessing', async () => ({
  ...(await vi.importActual<object>('@react-three/postprocessing')),
  EffectComposer: (props: { children: React.ReactNode }) => (
    <group name="EffectComposer">{props.children}</group>
  ),
  Outline: () => <group name="Outline" />,
  Selection: (props: { children: React.ReactNode }) => props.children
}));

const color = 0xffffff;

const setup = () =>
  ReactThreeTestRenderer.create(
    <ModelOutliner color={color}>
      <Sphere name="child" />
    </ModelOutliner>
  );

describe('<ModelOutliner/>', () => {
  it('should render the provided children', async () => {
    const renderer = await setup();

    const childObject = renderer.scene.findByProps({ name: 'child' });

    expect(childObject).toBeDefined();
  });

  it('should render the effect composer and outline', async () => {
    const renderer = await setup();

    expect(
      renderer.scene.findByProps({ name: 'EffectComposer' })
    ).toBeDefined();
    expect(renderer.scene.findByProps({ name: 'Outline' })).toBeDefined();
  });
});
