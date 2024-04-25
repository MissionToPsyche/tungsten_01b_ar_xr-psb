const OrbitSceneLightning = () => {
  return (
    <group>
      <ambientLight intensity={0.2} />
      <spotLight intensity={1.5} position={[-5, 10, 24]} color={'#5F73E9'} />
      <spotLight intensity={0.1} position={[0, 7, 23]} color={'#FEFC94'} />
      <spotLight intensity={0.1} position={[-2.5, 7, 25]} color={'#EF5076'} />
    </group>
  );
};

export default OrbitSceneLightning;
