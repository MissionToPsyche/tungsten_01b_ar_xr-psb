import reactThreeTestRenderer from "@react-three/test-renderer";
import { FalconHeavyWithLogos } from "../FalconHeavyWithLogos";
import { vi } from 'vitest';

// Mock useGLTF
vi.mock('@react-three/drei', () => ({
  useGLTF: vi.fn(() => ({
    nodes: {
      Object_9: { geometry: {} },
      Object_13: { geometry: {} },
      Object_21: { geometry: {} },
      Object_23: { geometry: {} },
      Object_25: { geometry: {} },
      Object_27: { geometry: {} },
      Object_29: { geometry: {} },
      Object_31: { geometry: {} },
    },
    materials: {
    PaletteMaterial001: "THREE.MeshStandardMaterial",
    PaletteMaterial002: "THREE.MeshStandardMaterial",
    },
    preload: vi.fn(), // Mock the preload function
  })),
}));


describe('Launch Scene Name component to have the correct number of meshes, position and scale', () => {
  it('renders the Model to have 1 Select component',  async () => {

    const renderer = await reactThreeTestRenderer.create(<FalconHeavyWithLogos/>);
    const group = renderer.scene.children[0].allChildren

   expect(group.length).toBe(1)
  });

  it('renders the Model to have 8 meshes in a group',  async () => {

    const renderer = await reactThreeTestRenderer.create(<FalconHeavyWithLogos/>);
    const group = renderer.scene.children[0].children[0].allChildren

   expect(group.length).toBe(8)
  });

  it('renders the mesh with correct scale',  async () => {
    const renderer = await reactThreeTestRenderer.create(<FalconHeavyWithLogos scale={0.025}/>);
    const mesh1 = renderer.scene.children[0].children[0].allChildren[0];
    const mesh2 = renderer.scene.children[0].children[0].allChildren[1];
    const mesh3 = renderer.scene.children[0].children[0].allChildren[2];
    const mesh7 = renderer.scene.children[0].children[0].allChildren[6];
    const mesh8 = renderer.scene.children[0].children[0].allChildren[7];

   expect(mesh1.props.scale).toBe(0.025)
   expect(mesh2.props.scale).toBe(0.025)
   expect(mesh3.props.scale).toBe(0.263)
   expect(mesh7.props.scale).toBe(0.34)
   expect(mesh8.props.scale).toStrictEqual([3.621, 4.789, 4.789])
  })

  it('renders the correct position of the meshes',  async () => {
    const renderer = await reactThreeTestRenderer.create(<FalconHeavyWithLogos position={[-1.515, 22.667, -0.01]}/>);
    const mesh1 = renderer.scene.children[0].children[0].allChildren[0];
    const mesh2 = renderer.scene.children[0].children[0].allChildren[1];
    const mesh3 = renderer.scene.children[0].children[0].allChildren[2];
    const mesh4 = renderer.scene.children[0].children[0].allChildren[3];
    const mesh5 = renderer.scene.children[0].children[0].allChildren[4];
    const mesh6 = renderer.scene.children[0].children[0].allChildren[5];
    const mesh7 = renderer.scene.children[0].children[0].allChildren[6];
    const mesh8 = renderer.scene.children[0].children[0].allChildren[7];

   expect(mesh1.props.position).toStrictEqual([-1.515, 22.667, -0.01])
   expect(mesh2.props.position).toStrictEqual([-1.515, 22.667, -0.01])
   expect(mesh3.props.position).toStrictEqual([-1.527, 17.099, 0.649])
   expect(mesh4.props.position).toStrictEqual([-1.645, 17.831, 0.667])
   expect(mesh5.props.position).toStrictEqual([-1.494, 25.552, 1.022])
   expect(mesh6.props.position).toStrictEqual([-1.52, 24.565, 1.015])
   expect(mesh7.props.position).toStrictEqual([-1.501, 23.953, 1.022])
   expect(mesh8.props.position).toStrictEqual([-1.368, 7.293, 0.718])  
  })

  it('renders the correct rotation of the meshes',  async () => {
    const renderer = await reactThreeTestRenderer.create(<FalconHeavyWithLogos rotation={[-Math.PI / 2, 0, -0.786]}/>);
    const mesh1 = renderer.scene.children[0].children[0].allChildren[0];
    const mesh2 = renderer.scene.children[0].children[0].allChildren[1];
    const mesh3 = renderer.scene.children[0].children[0].allChildren[2];
    const mesh4 = renderer.scene.children[0].children[0].allChildren[3];
    const mesh5 = renderer.scene.children[0].children[0].allChildren[4];
    const mesh6 = renderer.scene.children[0].children[0].allChildren[5];
    const mesh7 = renderer.scene.children[0].children[0].allChildren[6];
    const mesh8 = renderer.scene.children[0].children[0].allChildren[7];

   expect(mesh1.props.rotation).toStrictEqual([-Math.PI / 2, 0, -0.786])
   expect(mesh2.props.rotation).toStrictEqual([-Math.PI / 2, 0, -0.786])
   expect(mesh3.props.rotation).toStrictEqual([Math.PI / 2, 0, 0])
   expect(mesh4.props.rotation).toStrictEqual([Math.PI / 2, 0, 0])
   expect(mesh5.props.rotation).toStrictEqual([Math.PI / 2, 0, 0])
   expect(mesh6.props.rotation).toStrictEqual([Math.PI / 2, 0, Math.PI])
   expect(mesh7.props.rotation).toStrictEqual([Math.PI / 2, 0, 0])
   expect(mesh8.props.rotation).toStrictEqual([Math.PI / 2, 0, 0])  
  })

});
