const CruiseSceneLights = () => (
  <group>
    <ambientLight intensity={0.5} position={[2, 10, 0]} />
    <hemisphereLight position={[-20, 60, -150]} intensity={0.1} />
    <spotLight intensity={0.5} position={[-6, 6, 0]} color={'lightblue'} />
    <pointLight intensity={4} position={[-8, 3, 4]} color={'#08029d'} />
    <pointLight intensity={2} position={[-9.5, 30, 10]} color={'#b94204'} />
    <spotLight intensity={0.5} position={[10.5, 26, -2]} color={'#441359'} />
  </group>
);

export default CruiseSceneLights;
