import ReactThreeTestRenderer from '@react-three/test-renderer';
import ARButton from '../ARButton.tsx';
import { expect } from 'vitest';

// The following mock is required because ReactThreeTestRenderer cannot render the <Text/> component
vi.mock('@react-three/drei', async () => ({
  ...(await vi.importActual<object>('@react-three/drei')),
  Text: (props: { children: string }) => <group name={props.children} />
}));

const onClick = vi.fn();

const setup = () =>
  ReactThreeTestRenderer.create(
    <ARButton
      onClick={onClick}
      backgroundColor="white"
      backgroundActiveColor="black"
    >
      Button Text
    </ARButton>
  );

describe('<ARButton/>', () => {
  it('should render the button text', async () => {
    const renderer = await setup();

    expect(renderer.scene.findByProps({ name: 'Button Text' })).toBeDefined();
  });

  it('should callback to onClick when the button is clicked', async () => {
    const renderer = await setup();

    await renderer.fireEvent(renderer.scene.children[0], 'click');

    expect(onClick).toHaveBeenCalled();
  });
});
