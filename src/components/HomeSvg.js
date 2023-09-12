import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {memo} from 'react';
const HomeIcon = ({focused}) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
    <Path
      d="M19 9.3V4h-3v2.6L12 3 2 12h3v8h6v-6h2v6h6v-8h3l-3-2.7ZM17 18h-2v-6H9v6H7v-7.81l5-4.5 5 4.5V18Z"
      fill={focused ? '#8D311E' : '#878787'}
    />
  </Svg>
);
const HomeSvg = memo(HomeIcon);
export default HomeSvg;