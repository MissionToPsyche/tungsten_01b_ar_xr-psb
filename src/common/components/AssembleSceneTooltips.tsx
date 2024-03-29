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
        startPosition={[0, 0.25, 4]}
        startRotation={[0, 0, 0]}
        explodedPosition={[0, 0, 6]}
        explodedRotation={[0, 0, 0]}
      >
        <ARTooltip />
      </ExplodeElement>
      <FactsModalTrigger factName="spectrometer">
        <ExplodeElement
          startPosition={[-1, 4, 2]}
          startRotation={[0, 0, 0]}
          explodedPosition={[-1, 6, 0.75]}
          explodedRotation={[0, 0, 0]}
        >
          <ARTooltip />
        </ExplodeElement>
      </FactsModalTrigger>
      <FactsModalTrigger factName="magnetometer">
        <ExplodeElement
          startPosition={[1, 4, 2]}
          startRotation={[0, 0, 0]}
          explodedPosition={[1, 6, 0.75]}
          explodedRotation={[0, 0, 0]}
        >
          <ARTooltip />
        </ExplodeElement>
      </FactsModalTrigger>
      <FactsModalTrigger factName="multiSpectralImager">
        <ExplodeElement
          startPosition={[0, 2, 0.75]}
          startRotation={[0, 0, 0]}
          explodedPosition={[0, 2.5, -1]}
          explodedRotation={[0, 0, 0]}
        >
          <ARTooltip />
        </ExplodeElement>
      </FactsModalTrigger>
    </RenderIf>
  );
};

export default AssembleSceneTooltips;
