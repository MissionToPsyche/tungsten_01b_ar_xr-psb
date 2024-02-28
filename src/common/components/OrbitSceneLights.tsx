export const OrbitSceneLights = () => {
  return (
    <group>
      <ambientLight intensity={0} />
      <hemisphereLight position={[0, -150, -100]} intensity={0.5} />
      <spotLight intensity={2} position={[-4.5, 3, 0]} color={'#5F73E9'} />
      <spotLight intensity={6} position={[-4.5, 5, -50]} color={'#A15FE9'} />
      <spotLight intensity={4} position={[-4.5, 7, 0]} color={'white'} />
      <spotLight intensity={1} position={[-2.5, 7, 2]} color={'white'} />
    </group>
  );
};
