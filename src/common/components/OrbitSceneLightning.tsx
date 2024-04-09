const OrbitSceneLightning = () => {
  return (
    <group>
      <ambientLight intensity={0.2} />
      <spotLight intensity={10} position={[-5, 8, 4]} color={'#5F73E9'} />
      <spotLight intensity={2} position={[0, 7, 3]} color={'#FEFC94'} />
      <spotLight intensity={2} position={[-2.5, 7, 5]} color={'#EF5076'} />
    </group>
  );
};

export default OrbitSceneLightning;
