/**
 * Component that provides a lighting configuration for any scene.
 */
const SceneLighting = () => (
  <group>
    <directionalLight
      color={0xfff7e6}
      position={[-1, -1, 1]}
      intensity={0.75}
    />
    <ambientLight color={0x87ceeb} intensity={0.5} />
  </group>
);

export default SceneLighting;
