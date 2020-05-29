import {addDays, formatISO, differenceInDays, format} from 'date-fns';
import clamp from 'lodash/clamp';
import React, {useState, useEffect} from 'react';
import {useSprings, animated, config} from 'react-spring';
import {useMeasure, useKeyPressEvent} from 'react-use';
import {useDrag} from 'react-use-gesture';

const Timeline = ({setIsTimelineMode, setDate}) => {
  const [days, setDays] = useState([]);
  const [timelineElement, {width}] = useMeasure();
  const [index, setIndex] = useState(0);

  const [springs, set] = useSprings(
    days.length,
    (i) => ({
      x: (index - i) * (480 / 3) + 480 / 2 - 35,
      color: i == 0 ? '#6c757d' : '#6c757d99',
      opacity: i < 2 ? 1 : 0,
    }),
    config.stiff
  );

  const bind = useDrag(
    ({down, delta: [xDelta], direction: [xDir], distance, cancel}) => {
      const clampedIndex = getClampedIndex(xDir);
      if (down && distance > 30) {
        cancel(setIndex(clampedIndex));
        setDate(days[clampedIndex]);
      }

      if (index === 0 && xDir < 0) {
        setTimeout(() => {
          setIsTimelineMode(false);
        }, 1000);
      }

      setSprings({clampedIndex: index, xDir, down, xDelta});
    }
  );

  useEffect(() => {
    const zeroDay = '2020-03-02';
    const latestDay = new Date();
    const elapsedDays = differenceInDays(latestDay, new Date(zeroDay));
    const daysList = [];

    for (let i = 0; i < elapsedDays; i++) {
      daysList.push(
        formatISO(addDays(new Date(zeroDay), i), {representation: 'date'})
      );
    }

    setDays(daysList.reverse());
  }, [days.length]);

  const getClampedIndex = (direction) => {
    return clamp(index + (direction > 0 ? 1 : -1), 0, days.length - 3);
  };

  const setSprings = ({direction, clampedIndex, down, xDelta}) => {
    set((i) => {
      if (i < clampedIndex - 1) {
        return {x: width, color: '#6c757d99', opacity: 0};
      } else if (i > clampedIndex + 1) {
        return {x: -40, color: '#6c757d99', opacity: 0};
      }

      let x = 0;
      if (xDelta) {
        x =
          (clampedIndex - i) * (width / 3) +
          width / 2 -
          35 +
          (down ? xDelta : 0);
      } else {
        x = (clampedIndex - i) * (width / 3) + width / 3 + 35;
      }

      if (i === clampedIndex) {
        return {x, display: 'block', color: '#6c757d'};
      }
      return {x, display: 'block', color: '#6c757d99', opacity: 1};
    });
  };

  const handleKeyPress = (direction) => {
    if (index < days.length) {
      const clampedIndex = getClampedIndex(direction);
      setSprings({direction, clampedIndex});
      setIndex(clampedIndex);
      setDate(days[clampedIndex]);
    }
  };

  useKeyPressEvent('ArrowLeft', () => {
    handleKeyPress(1);
  });

  useKeyPressEvent('ArrowRight', () => {
    handleKeyPress(-1);
  });

  useKeyPressEvent('Escape', () => {
    setIsTimelineMode(false);
  });

  return (
    <div className="Timeline" ref={timelineElement} {...bind()}>
      {springs
        .filter(
          ({opacity}, i) =>
            i < days.length - 2 &&
            (i === index + 1 ||
              i === index - 1 ||
              i === index + 2 ||
              i === index - 2 ||
              i === index)
        )
        .map(({x, color, opacity}, i) => (
          <animated.div
            className="day"
            key={i}
            style={{
              transform: x.interpolate((x) => `translate3d(${x}px,0,0)`),
              opacity,
            }}
          >
            {index < 2 && (
              <React.Fragment>
                <animated.h5 style={{color}}>
                  {format(new Date(days[i]), 'dd MMM')}
                </animated.h5>
              </React.Fragment>
            )}
            {index > 1 && index < days.length && (
              <React.Fragment>
                <animated.h5 style={{color}}>
                  {format(new Date(days[index + i - 2]), 'dd MMM')}
                </animated.h5>
              </React.Fragment>
            )}
          </animated.div>
        ))}
    </div>
  );
};

export default React.memo(Timeline);