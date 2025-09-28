import Spline from '@splinetool/react-spline';

export const Hero3D = ({
  scene = 'https://prod.spline.design/A4Fmi1H0MSHTkq85/scene.splinecode',
  className = '',
}) => {
  return (
    <div className={`w-full h-full ${className}`}>
      <Spline scene={scene} />
    </div>
  );
}
