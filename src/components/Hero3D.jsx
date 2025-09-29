import Spline from '@splinetool/react-spline';
import React from 'react';

export const Hero3D = ({
  scene = 'https://prod.spline.design/A4Fmi1H0MSHTkq85/scene.splinecode',
  className = '',
  onReady,
}) => {
  return (
    <div className={`w-full h-full ${className}`}>
      <Spline scene={scene} onLoad={() => onReady && onReady()} />
    </div>
  );
}
