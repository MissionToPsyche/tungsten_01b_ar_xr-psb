import reactThreeTestRenderer from "@react-three/test-renderer";
import { LaunchDateModel } from "../LaunchDateModel";

// Mock useGLTF
vi.mock('@react-three/drei', () => ({
  useGLTF: vitest.fn(() => ({
    nodes: {
      Object_4: { geometry: {} },
      Object_7: { geometry: {} },
      Object_9: { geometry: {} },
      Object_12: { geometry: {} },
    },
    materials: {
      material1: "TimelineBubblePlastic02.001",
      material2: "fallback_Material.006",
      material3: "fallback_Material.007",
      material4: "M_01___Default.001"
    },
    preload: vi.fn(), // Mock the preload function
  })),
}));


describe('Launch Pad component to have the correct number of meshes, position and scale', () => {
  it('renders the Model to have 1 Select child',  async () => {

    const renderer = await reactThreeTestRenderer.create(<LaunchDateModel/>);
    const group = renderer.scene.children[0].allChildren

   expect(group.length).toBe(1)
  });

  it('renders the Model to have 4 meshes',  async () => {

    const renderer = await reactThreeTestRenderer.create(<LaunchDateModel/>);
    const group = renderer.scene.children[0].children[0].allChildren

   expect(group.length).toBe(4)
  });

  it('renders the mesh with correct scale',  async () => {
    const renderer = await reactThreeTestRenderer.create(<LaunchDateModel scale={0.005}/>);
    const mesh1 = renderer.scene.children[0].children[0].allChildren[0];
    const mesh2 = renderer.scene.children[0].children[0].allChildren[1];
    const mesh3 = renderer.scene.children[0].children[0].allChildren[2];
    const mesh4 = renderer.scene.children[0].children[0].allChildren[3];

   expect(mesh1.props.scale).toBe(0.005)
   expect(mesh2.props.scale).toBe(0.008)
   expect(mesh3.props.scale).toBe(0.005)
   expect(mesh4.props.scale).toBe(0.07)
  })

    it('renders the correct position of the meshes',  async () => {
    const renderer = await reactThreeTestRenderer.create(<LaunchDateModel position={[0.034, 7.234, -0.824]}/>);
    const mesh1 = renderer.scene.children[0].children[0].allChildren[0];
    const mesh2 = renderer.scene.children[0].children[0].allChildren[1];
    const mesh3 = renderer.scene.children[0].children[0].allChildren[2];
    const mesh4 = renderer.scene.children[0].children[0].allChildren[3];

   expect(mesh1.props.position).toStrictEqual([0.034, 7.234, -0.824])
   expect(mesh2.props.position).toStrictEqual([-0.019, -1.217, -0.413])
   expect(mesh3.props.position).toStrictEqual([0.026, 7.224, -0.544])
   expect(mesh4.props.position).toStrictEqual([-0.048, 8.662, 0])
  })

});
