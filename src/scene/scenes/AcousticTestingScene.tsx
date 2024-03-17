import Explode from '../../common/explode/Explode.tsx';
import { SceneComponent } from '../types/scene-component.ts';
import { Orbiter } from '../../artifacts/Orbiter.tsx';
import { AssembleTestSceneName } from '../../artifacts/AssembleTestSceneName.tsx';
import AcousticTestingAnimation from '../../animations/AcousticTestingAnimation.tsx';
import { AssembleDate } from '../../artifacts/AssembleDate.tsx';
import BackAnimation from '../../animations/BackAnimation.tsx';
import useMediaQuery from '../../common/hooks/use-media-query.ts';
import filledVector from '../../common/utils/filled-vector.ts';

const AcousticTestingScene: SceneComponent = () => {
  const isMobile = useMediaQuery(768);
  const orbiterScaleFactor = isMobile ? filledVector(0.8) : filledVector(1.2);
  const nameScaleFactor = isMobile ? filledVector(1.4) : filledVector(1.7);
  const dateScaleFactor = isMobile ? filledVector(0.2) : filledVector(0.25);

  return (
    <Explode initialExploded={false}>
      <ambientLight intensity={0.1} position={[0, 20, 0]} />
      <spotLight intensity={0.1} position={[-14, 6, 4]} color={'lightblue'} />
      <spotLight intensity={0.1} position={[10, 10, 0]} color={'#70707e'} />
      <hemisphereLight
        position={[0, 10, -5]}
        intensity={0.1}
        color={'yellow'}
      />
      <hemisphereLight position={[0, -4, 8]} intensity={0.1} color={'white'} />
      <spotLight intensity={0.15} position={[-7.5, 30, -6]} color={'#08029d'} />
      <spotLight intensity={1} position={[-9.5, 30, -2]} color={'#b94204'} />
      <spotLight
        intensity={0.15}
        position={[-14.5, 28, -5]}
        color={'#70707e'}
      />
      <spotLight intensity={0.05} position={[8.5, 30, -7]} color={'#08029d'} />
      <spotLight
        intensity={0.05}
        position={[-12.5, 15, -1.5]}
        color={'#646a85'}
      />
      <spotLight intensity={0.5} position={[10.5, 26, -2]} color={'#441359'} />
      <Orbiter
        position={[0, 3, 0]}
        scale={orbiterScaleFactor}
        rotation={[Math.PI / 8, 0, 0]}
      />
      <AssembleTestSceneName
        position={[-1.35, 13.5, -2]}
        scale={nameScaleFactor}
      />
      <AssembleDate scale={dateScaleFactor} position={[-0.5, -6, 7]} />
      <AcousticTestingAnimation />
      <BackAnimation />
    </Explode>
  );
};

export default AcousticTestingScene;
