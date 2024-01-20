import { render, screen } from '@testing-library/react';
import Explode, { ExplodeContext } from '../Explode.tsx';
import { useContext } from 'react';
import { it } from 'vitest';

let isExploded = false;
let toggleExploded: () => void;
let addExploding: () => void;
let removeExploding: () => void;
let isAtRest = false;

const Child = () => {
  const context = useContext(ExplodeContext);

  if (!context) {
    return null;
  }

  isExploded = context.isExploded;
  toggleExploded = context.toggleExploded;
  addExploding = context.addExploding;
  removeExploding = context.removeExploding;
  isAtRest = context.isAtRest;

  return <p>Hello</p>;
};

const setup = (initialExploded = false) =>
  render(
    <Explode initialExploded={initialExploded}>
      <Child />
    </Explode>
  );

describe('<Explode/>', () => {
  it('should render the provided children', () => {
    setup();

    expect(screen.getByText('Hello')).toBeInTheDocument();
  });

  it.each([true, false])(
    'should start isExploded as the same value as initialExploded, %s',
    (initialExploded) => {
      setup(initialExploded);

      expect(isExploded).toEqual(initialExploded);
    }
  );

  it('should toggle isExploded', () => {
    const { rerender } = setup();

    expect(isExploded).toEqual(false);

    toggleExploded();
    rerender(
      <Explode initialExploded={false}>
        <Child />
      </Explode>
    );
    expect(isExploded).toEqual(true);

    toggleExploded();
    rerender(
      <Explode initialExploded={false}>
        <Child />
      </Explode>
    );
    expect(isExploded).toEqual(false);
  });

  it('should start at rest', () => {
    setup();

    expect(isAtRest).toEqual(true);
  });

  it('should go out of a return to rest based on the number of currently exploding elements', () => {
    const { rerender } = setup();

    addExploding();
    addExploding();
    rerender(
      <Explode initialExploded={false}>
        <Child />
      </Explode>
    );
    expect(isAtRest).toEqual(false);

    removeExploding();
    removeExploding();
    rerender(
      <Explode initialExploded={false}>
        <Child />
      </Explode>
    );
    expect(isAtRest).toEqual(true);
  });
});
