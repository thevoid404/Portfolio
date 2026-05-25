export function AmbientBackground() {
  return (
    <>
      <div className="bg-spots" aria-hidden>
        <span className="bg-spot bg-spot-top" />
        <span className="bg-spot bg-spot-mid-right" />
        <span className="bg-spot bg-spot-mid-left" />
        <span className="bg-spot bg-spot-bottom" />
        <span className="bg-spot bg-spot-center" />
      </div>
      <div className="bg-grid" aria-hidden />
      <div className="ambient-glow" aria-hidden />
      <div className="grain-overlay" aria-hidden />
    </>
  );
}
