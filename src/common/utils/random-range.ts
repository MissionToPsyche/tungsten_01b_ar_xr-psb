/**
 * Returns a random number between the provided range.
 * @param min The minimum number to return
 * @param max The maximum number to return
 */
const randomRange = (min: number, max: number): number =>
  Math.random() * (max - min) + min;

export default randomRange;
