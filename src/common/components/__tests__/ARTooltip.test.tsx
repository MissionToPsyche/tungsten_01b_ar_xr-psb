import ReactThreeTestRenderer from '@react-three/test-renderer';
import ARTooltip from '../ARTooltip.tsx';

// The following mock is required because ReactThreeTestRenderer cannot render the <Text/> component
vi.mock('@react-three/drei', async () => ({
  ...(await vi.importActual<object>('@react-three/drei')),
  Text: (props: { children: string }) => <group name={props.children} />
}));

const setup = () =>
  ReactThreeTestRenderer.create(
    <ARTooltip
      text="Tooltip Text"
      objectPosition={[0, 0, 0]}
      panelPosition={[1, 1, 1]}
    />
  );

describe('<ARTooltip/>', () => {
  it('should place the indicator at the object position', async () => {
    const renderer = await setup();

    const indicator = renderer.scene.findByProps({ name: 'indicator' });

    expect(indicator.instance.position).toEqual({ x: 0, y: 0, z: 0 });
  });

  it('should place the tooltip panel at the panel position', async () => {
    const renderer = await setup();

    const panel = renderer.scene.findByProps({ name: 'tooltip-panel' });

    expect(panel.instance.position).toEqual({ x: 1, y: 1, z: 1 });
  });

  it('should render the text on the tooltip panel', async () => {
    const renderer = await setup();

    const text = renderer.scene.findByProps({ name: 'Tooltip Text' });

    expect(text).toBeTruthy();
  });

  it('should place the tooltip line between the object and the panel', async () => {
    const renderer = await setup();

    const lineParts = renderer.scene.findAllByProps({
      name: 'tooltip-line'
    });

    expect(lineParts.length).toBe(2);
  });
});
