import reactThreeTestRenderer from "@react-three/test-renderer";
import { LaunchSceneName } from "../LaunchSceneName";
import { vi } from 'vitest';

// Mock useGLTF
vi.mock('@react-three/drei', () => ({
  useGLTF: vi.fn(() => ({
    nodes: {
      Object_5: { geometry: {} },
      Object_8: { geometry: {} },
    },
    materials: {
      M_03___Default: "M_03___Default",
      M_08___Default: "M_08___Default",
    },
    preload: vi.fn(), // Mock the preload function
  })),
}));


describe('Launch Scene Name component to have the correct number of meshes, position and scale', () => {
  it('renders the Model to have 2 meshes',  async () => {

    const renderer = await reactThreeTestRenderer.create(<LaunchSceneName/>);
    const group = renderer.scene.children[0].allChildren

   expect(group.length).toBe(2)
  });

  it('renders the mesh with correct scale',  async () => {
    const renderer = await reactThreeTestRenderer.create(<LaunchSceneName scale={0.025}/>);
    const mesh1 = renderer.scene.children[0].allChildren[0];
    const mesh2 = renderer.scene.children[0].allChildren[1];

   expect(mesh1.props.scale).toBe(0.025)
   expect(mesh2.props.scale).toBe(0.025)
  })

  it('renders the correct position of the meshes',  async () => {
    const renderer = await reactThreeTestRenderer.create(<LaunchSceneName position={[0.989, -1.696, 0]}/>);
    const mesh1 = renderer.scene.children[0].allChildren[0];
    const mesh2 = renderer.scene.children[0].allChildren[1];

   expect(mesh1.props.position).toStrictEqual([0.989, -1.696, 0])
   expect(mesh2.props.position).toStrictEqual([0.992, -1.693, -0.115])
  })

    it('renders the correct material of the meshes',  async () => {
    const renderer = await reactThreeTestRenderer.create(<LaunchSceneName/>);
    const mesh1 = renderer.scene.children[0].allChildren[0];
    const mesh2 = renderer.scene.children[0].allChildren[1];

  expect(mesh1.props.material).toBe('M_03___Default'); 
  expect(mesh2.props.material).toBe('M_08___Default');
  }) 

});