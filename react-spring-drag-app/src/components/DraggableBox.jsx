import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useDrag } from '@use-gesture/react';

const DraggableBox = () => {
  const [styles, api] = useSpring(() => ({
    x: 0,
    y: 0,
    config: { tension: 170, friction: 26 },
  }));

  const bind = useDrag(({ offset: [x, y] }) => {
    api.start({ x, y });
  });

  return (
    <animated.div
      {...bind()}
      className="draggable-box"
      style={{
        ...styles,
      }}
    >
      Drag me!
    </animated.div>
  );
};

export default DraggableBox;
