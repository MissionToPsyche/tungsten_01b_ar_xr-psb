const AssemblySceneLights = () => {
  return (
    <group>
      <ambientLight intensity={0.1} position={[0, 20, 0]} />
      <spotLight intensity={0.1} position={[-13, 6, 6]} color={'lightblue'} />
      <spotLight intensity={0.2} position={[10, 10, 2]} color={'#70707e'} />
      <hemisphereLight
        position={[0, 10, -3]}
        intensity={0.1}
        color={'yellow'}
      />
      <hemisphereLight position={[0, -4, 10]} intensity={0.1} color={'white'} />
      {/* <spotLight intensity={0.15} position={[-7.5, 30, -2]} color={'#08029d'} /> */}
      <spotLight intensity={1} position={[-13.5, 27, 3]} color={'#b94204'} />
      <spotLight
        intensity={0.15}
        position={[-14.5, 28, -3]}
        color={'#70707e'}
      />
      <spotLight intensity={0.1} position={[15.5, 10, 3]} color={'#08029d'} />
      <spotLight
        intensity={0.05}
        position={[-12.5, 12, 2.5]}
        color={'#646a85'}
      />
      <spotLight intensity={0.5} position={[11, 23, 3]} color={'#441359'} />
    </group>
  );
};

export default AssemblySceneLights;
