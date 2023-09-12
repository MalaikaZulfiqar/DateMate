import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {memo} from 'react';
const BusinessIcon = ({focused}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={21}
    fill="none"
   
  >
    <Path
          d="M9 10.2857C11.8406 10.2857 14.1429 7.98348 14.1429 5.14286C14.1429 2.30223 11.8406 0 9 0C6.15938 0 3.85714 2.30223 3.85714 5.14286C3.85714 7.98348 6.15938 10.2857 9 10.2857ZM12.8491 11.5955L10.9286 19.2857L9.64286 13.8214L10.9286 11.5714H7.07143L8.35714 13.8214L7.07143 19.2857L5.15089 11.5955C2.28616 11.7321 0 14.0746 0 16.9714V18.6429C0 19.7076 0.863839 20.5714 1.92857 20.5714H16.0714C17.1362 20.5714 18 19.7076 18 18.6429V16.9714C18 14.0746 15.7138 11.7321 12.8491 11.5955Z"
          //fill={color}
        />
  </Svg>
);
const BusinessSvg = memo(BusinessIcon);
export default BusinessSvg