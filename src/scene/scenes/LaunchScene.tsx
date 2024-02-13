/* eslint-disable react/no-unknown-property */
import { SceneComponent } from '../types/scene-component.ts';
import filledVector from '../../common/utils/filled-vector.ts';
import FactsModalTrigger from '../../facts/FactsModalTrigger.tsx';
import { FalconHeavyWithLogos } from '../../artifacts/FalconHeavyWithLogos.tsx';
import { LaunchDateModel } from '../../artifacts/LaunchDateModel.tsx';
import { LaunchSceneName } from '../../artifacts/LaunchSceneName.tsx';
import LiftoffAnimation from '../../animations/LiftoffAnimation.tsx';
import { LaunchPadModel } from '../../artifacts/LaunchPadModel.jsx';

const padScale = filledVector(0.4);
const falconScale = filledVector(0.4);
const dateScale = filledVector(0.35);
const sceneNameScale = filledVector(1.2);

/**
 * The launch scene which depicts the Psyche mission launch.
 */
const LaunchScene: SceneComponent = () => (
  <>
    <ambientLight intensity={0.1} position={[0, 10, 7]} />
    <spotLight
      intensity={0.5}
      position={[-10, 10, 30]}
      color={'blue'}
      angle={-Math.PI / 4}
    />
    <hemisphereLight position={[-5, -20, 0]} intensity={0.1} color={'white'} />
    <spotLight intensity={3} position={[-1, 5, -10]} color={'#08029d'} />
    <spotLight intensity={1} position={[-11, 40, -25]} color={'#441359'} />
    <spotLight intensity={1} position={[11, 40, -25]} color={'#441359'} />
    <LaunchPadModel position={[-1, -6, 1]} scale={padScale} />
    <LiftoffAnimation>
      <FactsModalTrigger factName="falconHeavy">
        <FalconHeavyWithLogos
          position={[1.2, -4, 1]}
          scale={falconScale}
          rotation={[0, 0, 0]}
        />
      </FactsModalTrigger>
    </LiftoffAnimation>
    <FactsModalTrigger factName="launch">
      <LaunchDateModel
        position={[12, -5, 5]}
        scale={dateScale}
        rotation={[0, 0, 0]}
      />
    </FactsModalTrigger>
    <LaunchSceneName position={[-2, 12.5, 0]} scale={sceneNameScale} />
  </>
);

export default LaunchScene;
