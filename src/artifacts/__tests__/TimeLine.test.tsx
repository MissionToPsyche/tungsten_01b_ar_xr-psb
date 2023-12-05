import { TimeLine } from '../TimeLine';
import reactThreeTestRenderer from '@react-three/test-renderer';

// Mock useGLTF
vi.mock('@react-three/drei', () => ({
  useGLTF: vitest.fn(() => ({
    nodes: {
      Object_5: { geometry: {} },
      Object_31: { geometry: {} },
    },
    materials: {
      PaletteMaterial001: "PaletteMaterial001",
      PaletteMaterial002: "PaletteMaterial002",
    },
    useGLTFLoader: vi.fn(), // Mock the preload function
  })),
}));

describe('TimeLine component', () => {

  it('renders the Model to have 2 meshes',  async () => {

    const renderer = await reactThreeTestRenderer.create(<TimeLine/>);
    const mesh = renderer.scene.children[0].allChildren

   expect(mesh.length).toBe(2)
  });

  it('renders the mesh with correct scale',  async () => {
    const renderer = await reactThreeTestRenderer.create(<TimeLine />);
    const mesh1 = renderer.scene.children[0].allChildren[0];
    const mesh2 = renderer.scene.children[0].allChildren[1];

   expect(mesh1.props.scale).toStrictEqual([0.025, 0.03, 0.025])
   expect(mesh2.props.scale).toBe(0.032)
  })

  it('renders the correct position of the meshes',  async () => {
    const renderer = await reactThreeTestRenderer.create(<TimeLine />);
    const mesh1 = renderer.scene.children[0].allChildren[0];
    const mesh2 = renderer.scene.children[0].allChildren[1];

   expect(mesh1.props.position).toStrictEqual([-53.511, 24.235, 6.4])
   expect(mesh2.props.position).toStrictEqual([-48.945, 35.538, 6.451])
  })

  it('renders the correct material of the meshes',  async () => {
    const renderer = await reactThreeTestRenderer.create(<TimeLine/>);
    const mesh1 = renderer.scene.children[0].allChildren[0];
    const mesh2 = renderer.scene.children[0].allChildren[1];

  expect(mesh1.props.material).toBe('PaletteMaterial001'); 
  expect(mesh2.props.material).toBe('PaletteMaterial002');
  }) 
});
