import reactThreeTestRenderer from "@react-three/test-renderer";
import { LaunchPadModel } from "../LaunchPadModel";
import { vi } from 'vitest';

// Mock useGLTF
vi.mock('@react-three/drei', () => ({
  useGLTF: vi.fn(() => ({
    nodes: {
      Object_4: { geometry: {} },
      Object_8: { geometry: {} },
      Object_10: { geometry: {} },
    },
    materials: {
      metal: "metal",
      concrete: "concrete",
      Material: "Material",
    },
    preload: vi.fn(), // Mock the preload function
  })),
}));


describe('Launch Pad component to have the correct number of meshes, position and scale', () => {
  it('renders the Model to have 3 meshes',  async () => {

    const renderer = await reactThreeTestRenderer.create(<LaunchPadModel/>);
    const group = renderer.scene.children[0].allChildren

   expect(group.length).toBe(3)
  });

  it('renders the mesh with correct scale',  async () => {
    const renderer = await reactThreeTestRenderer.create(<LaunchPadModel scale={[0.026, 0.026, 0.025]}/>);
    const mesh1 = renderer.scene.children[0].allChildren[0];
    const mesh2 = renderer.scene.children[0].allChildren[1];
    const mesh3 = renderer.scene.children[0].allChildren[2];

   expect(mesh1.props.scale).toStrictEqual([0.026, 0.026, 0.025])
   expect(mesh2.props.scale).toStrictEqual([11, 1.2, 11])
   expect(mesh3.props.scale).toStrictEqual([3.071, 1.06, 2.161])
  })

    it('renders the correct position of the meshes',  async () => {
    const renderer = await reactThreeTestRenderer.create(<LaunchPadModel position={[0, -0.591, 0]}/>);
    const mesh1 = renderer.scene.children[0].allChildren[0];
    const mesh2 = renderer.scene.children[0].allChildren[1];
    const mesh3 = renderer.scene.children[0].allChildren[2];

   expect(mesh1.props.position).toStrictEqual([0, -0.591, 0])
   expect(mesh2.props.position).toStrictEqual([0.687, 0.801, -0.022])
   expect(mesh3.props.position).toStrictEqual([4.134, 2.97, -0.022])
  })

    it('renders the correct material of the meshes',  async () => {
    const renderer = await reactThreeTestRenderer.create(<LaunchPadModel/>);
    const mesh1 = renderer.scene.children[0].allChildren[0];
    const mesh2 = renderer.scene.children[0].allChildren[1];
    const mesh3 = renderer.scene.children[0].allChildren[2];

  expect(mesh1.props.material).toBe('metal'); 
  expect(mesh2.props.material).toBe('concrete');
  expect(mesh3.props.material).toBe('Material');
  })  
});
