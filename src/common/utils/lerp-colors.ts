import { Color } from 'three';

/**
 * Lerps the provided `color` between the `fromColor` and `toColor` based on the provided `alpha`
 * @param color The color to lerp
 * @param fromColor The color to lerp from
 * @param toColor The color to lerp to
 * @param alpha A value between 0 and 1 that determines how far to lerp from `fromColor` to `toColor`
 */
const lerpColors = (
  color: Color,
  fromColor: Color,
  toColor: Color,
  alpha: number
) => {
  color.lerpColors(fromColor, toColor, alpha);
};

export default lerpColors;
