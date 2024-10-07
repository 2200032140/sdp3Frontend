import Spline from "@splinetool/react-spline";

export default function SplineRocket() {
  return (
    <div
      style={{
        position: 'absolute',
        width: '100vw',
        height: '100vh',
        top: 0,
        left: 0,
        zIndex: -1, // Ensure it stays behind the content
        overflow: 'hidden',
      }}
    >
      <Spline scene="https://prod.spline.design/jj4I5oyeRtzCVhRD/scene.splinecode" />
    </div>
  );
}
