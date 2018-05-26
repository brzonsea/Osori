import React from 'react';
import { RingLoader, RotateLoader } from 'react-spinners';
import './LoadingSpinner.css'

const LoadingSpinner = (props) => {
  return (
    <div className='sweet-loading'>
       <RotateLoader
         color={'#4a90e2'}
         loading={props.loading}
       />
     </div>
  );
}

export default LoadingSpinner;
