import ReactThreeTestRenderer from '@react-three/test-renderer';
import { expect } from 'vitest';
import ModelOutliner from '../ModelOutliner.tsx';
import { Sphere } from '@react-three/drei';

// Mock the components used within ModelOutliner
vi.mock('@react-three/postprocessing', async () => ({
  ...(await vi.importActual<object>('@react-three/postprocessing')),
  EffectComposer: () => <group name="EffectComposer" />,
  Outline: () => <group name="Outline" />,
  Selection: (props: { children: React.ReactNode }) => (
    <group name="Selection">{props.children}</group>
  )
}));

const color = 0xffffff;

const setup = () =>
  ReactThreeTestRenderer.create(
    <ModelOutliner color={color}>
      <Sphere name="child" />
    </ModelOutliner>
  );

describe('<ModelOutliner/>', () => {
  it('renders the provided children', async () => {
    const renderer = await setup();
    const childObject = renderer.scene.findByProps({ name: 'child' });
    expect(childObject).toBeDefined();
  });
});
