import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {memo} from 'react';
const BookingIcon = ({focused}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none"
   
  >
    <Path fill="#878787" d="M0 0h20.156v20H0z" />
  </Svg>
);
const BookingSvg = memo(BookingIcon);
export default BookingSvg