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
        startPosition={[0, 3.25, 2]}
        startRotation={[0, 0, 0]}
        explodedPosition={[0, 2.5, 3.5]}
        explodedRotation={[0, 0, 0]}
      >
        <ARTooltip />
      </ExplodeElement>
      <FactsModalTrigger factName="spectrometer">
        <ExplodeElement
          startPosition={[-1, 7, 0]}
          startRotation={[0, 0, 0]}
          explodedPosition={[-1, 9, -1]}
          explodedRotation={[0, 0, 0]}
        >
          <ARTooltip />
        </ExplodeElement>
      </FactsModalTrigger>
      <FactsModalTrigger factName="magnetometer">
        <ExplodeElement
          startPosition={[1, 7, 0]}
          startRotation={[0, 0, 0]}
          explodedPosition={[1, 9, -1]}
          explodedRotation={[0, 0, 0]}
        >
          <ARTooltip />
        </ExplodeElement>
      </FactsModalTrigger>
      <FactsModalTrigger factName="multiSpectralImager">
        <ExplodeElement
          startPosition={[0, 4.75, -1.5]}
          startRotation={[0, 0, 0]}
          explodedPosition={[0, 5.5, -3.25]}
          explodedRotation={[0, 0, 0]}
        >
          <ARTooltip />
        </ExplodeElement>
      </FactsModalTrigger>
    </RenderIf>
  );
};

export default AssembleSceneTooltips;
