import ExplodeElement from '../explode/ExplodeElement.tsx';
import ARTooltip from './ARTooltip.tsx';
import FactsModalTrigger from '../../facts/FactsModalTrigger.tsx';
import RenderIf from './RenderIf.tsx';
import useScene from '../../scene/use-scene.ts';

const AssembleSceneTooltips = () => {
  const { isTransitioning } = useScene();

  return (
    <RenderIf shouldRender={!isTransitioning}>
      <ExplodeElement
        startPosition={[0, 0.5, 4.5]}
        startRotation={[0, 0, 0]}
        explodedPosition={[0, -0.2, 7]}
        explodedRotation={[0, 0, 0]}
      >
        <ARTooltip />
      </ExplodeElement>
      <FactsModalTrigger factName="spectrometer">
        <ExplodeElement
          startPosition={[-1.2, 5, 2]}
          startRotation={[0, 0, 0]}
          explodedPosition={[-1.2, 8, 0.75]}
          explodedRotation={[0, 0, 0]}
        >
          <ARTooltip />
        </ExplodeElement>
      </FactsModalTrigger>
      <FactsModalTrigger factName="magnetometer">
        <ExplodeElement
          startPosition={[1.2, 4.5, 1.8]}
          startRotation={[0, 0, 0]}
          explodedPosition={[1.2, 7.5, 0.75]}
          explodedRotation={[0, 0, 0]}
        >
          <ARTooltip />
        </ExplodeElement>
      </FactsModalTrigger>
      <FactsModalTrigger factName="multiSpectralImager">
        <ExplodeElement
          startPosition={[0, 2.5, 0.5]}
          startRotation={[0, 0, 0]}
          explodedPosition={[0, 3.5, -2]}
          explodedRotation={[0, 0, 0]}
        >
          <ARTooltip />
        </ExplodeElement>
      </FactsModalTrigger>
    </RenderIf>
  );
};

export default AssembleSceneTooltips;
