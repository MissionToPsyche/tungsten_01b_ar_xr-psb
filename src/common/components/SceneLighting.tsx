/**
 * Component that provides a lighting configuration for any scene.
 */
const SceneLighting = () => (
  <group>
    <directionalLight color={0xfff7e6} position={[1, 1, 1]} intensity={0.7} />
    <ambientLight color={0x87ceeb} intensity={0.2} />
  </group>
);

export default SceneLighting;
