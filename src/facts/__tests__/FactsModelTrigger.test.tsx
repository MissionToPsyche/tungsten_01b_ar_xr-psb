import ReactThreeTestRenderer from '@react-three/test-renderer';
import FactsModalTrigger from '../FactsModalTrigger.tsx';
import { Box } from '@react-three/drei';
import { expect } from 'vitest';
import useModal from '../../common/modal/use-modal.ts';
import { MissionFact } from '../mission-facts.ts';
import lookupFactByName from '../lookup-fact-by-name.ts';

vi.mock('../lookup-fact-by-name.ts');
vi.mock('../../common/modal/use-modal.ts');

const factName = 'factName';

const fact: MissionFact = {
  title: 'title',
  fact: 'fact'
};

const factWithImage: MissionFact = {
  title: 'title',
  fact: 'fact',
  image: 'image'
};

const setup = () =>
  ReactThreeTestRenderer.create(
    <FactsModalTrigger factName={factName}>
      <Box />
    </FactsModalTrigger>
  );

describe('<FactsModalTrigger/>', () => {
  it('should set the appropriate title, body, and open the modal when clicked', async () => {
    vi.mocked(lookupFactByName).mockReturnValueOnce(fact);

    const renderer = await setup();

    await renderer.fireEvent(renderer.scene.children[0], 'click');

    expect(useModal().open).toHaveBeenCalledWith(
      fact.title,
      fact.fact,
      undefined
    );
  });

  it('should set the appropriate title, body, and image, and open the modal when clicked', async () => {
    vi.mocked(lookupFactByName).mockReturnValueOnce(factWithImage);

    const renderer = await setup();

    await renderer.fireEvent(renderer.scene.children[0], 'click');

    expect(useModal().open).toHaveBeenCalledWith(
      factWithImage.title,
      factWithImage.fact,
      factWithImage.image
    );
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
});
