import React from 'react';
import Svg, {Path} from 'react-native-svg';

export const TickSvg = ({size}) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M1.5 2.90001L5.35 6.75001L11.4 0.700012"
        stroke="white"
        strokeWidth="1.5"
      />
    </Svg>
  );
};
