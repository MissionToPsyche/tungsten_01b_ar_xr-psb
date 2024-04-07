const CruiseSceneLights = () => (
  <group>
    <ambientLight intensity={0.5} position={[2, 10, 0]} />
    <pointLight intensity={2} position={[-14, 2, 4]} color={'#08029d'} />
    <pointLight intensity={1} position={[-9.5, 30, 10]} color={'#b94204'} />
  </group>
);

export default CruiseSceneLights;
