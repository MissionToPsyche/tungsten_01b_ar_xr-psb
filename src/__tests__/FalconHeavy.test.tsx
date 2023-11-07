import ReactThreeTestRenderer from '@react-three/test-renderer';
import { FalconHeavy } from '../artifacts/FalconHeavy';
import { expect } from 'vitest';

describe('<FalconHeavy />', () => {
  it('should render the child meshes', async () => {
    const renderer = await ReactThreeTestRenderer.create(<FalconHeavy />);

    expect(renderer.scene.children[0].type).toEqual('Group');
    expect(renderer.scene.children[0].children.length).toEqual(2);
  });
});
