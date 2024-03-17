import ReactThreeTestRenderer from '@react-three/test-renderer';
import ARTooltip from '../ARTooltip.tsx';
import useSettings from '../../../settings/use-settings.ts';

// The following mock is required because ReactThreeTestRenderer cannot render the <Text/> component
vi.mock('@react-three/drei', async () => ({
  ...(await vi.importActual<object>('@react-three/drei')),
  Text: (props: { children: string }) => <group name={props.children} />
}));
// End compatibility mocks

vi.mock('../../../settings/use-settings.ts');

const setup = () =>
  ReactThreeTestRenderer.create(<ARTooltip position={[1, 2, 3]} />);

describe('<ARTooltip/>', () => {
  it('should render the tooltip at the provided position if tooltips are enabled', async () => {
    vi.mocked(useSettings).mockReturnValueOnce({
      tooltipsEnabled: true
    } as never);
    const renderer = await setup();

    const tooltipGroup = renderer.scene.findByProps({ name: 'tooltip-group' });

    expect(tooltipGroup.instance.position).toEqual({ x: 1, y: 2, z: 3 });
  });

  it('should not render the tooltip if tooltips are disabled', async () => {
    vi.mocked(useSettings).mockReturnValueOnce({
      tooltipsEnabled: false
    } as never);
    const renderer = await setup();

    const tooltipGroups = renderer.scene.findAllByProps({
      name: 'tooltip-group'
    });

    expect(tooltipGroups.length).toEqual(0);
  });
});
