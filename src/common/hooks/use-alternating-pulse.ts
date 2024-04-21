import { useEffect, useState } from 'react';

/**
 * A hook to alternate between two values at a given interval.
 * @param shouldPulse Whether the pulse should be active.
 * @param initialValue The initial value.
 * @param pulseCount The number of times to pulse.
 * @param pulseInterval The interval between pulses.
 * @param restartInterval The interval between restarts (after all pulses have run).
 */
const useAlternatingPulse = ({
  shouldPulse,
  initialValue,
  pulseCount,
  pulseInterval,
  restartInterval
}: {
  shouldPulse: boolean;
  initialValue: boolean;
  pulseCount: number;
  pulseInterval: number;
  restartInterval: number;
}) => {
  const [pulseValue, setPulseValue] = useState(initialValue);
  const [pulseCounter, setPulseCounter] = useState(0);

  useEffect(() => {
    if (!shouldPulse) {
      setPulseValue(initialValue);
      setPulseCounter(0);
    }
  }, [initialValue, shouldPulse]);

  useEffect(() => {
    if (!shouldPulse) return;

    if (pulseCounter < pulseCount) {
      const timeout = setInterval(() => {
        setPulseValue((prev) => !prev);
        setPulseCounter((prev) => prev + 1);
      }, pulseInterval);

      return () => {
        clearInterval(timeout);
      };
    }

    const timeout = setTimeout(() => {
      setPulseCounter(0);

      return () => {
        clearTimeout(timeout);
      };
    }, restartInterval);
  }, [pulseCount, pulseCounter, pulseInterval, restartInterval, shouldPulse]);

  return pulseValue;
};

export default useAlternatingPulse;
