import { Alignment, Fit, Layout, useRive } from '@rive-app/react-canvas';

function App() {
  const { RiveComponent } = useRive({
    src: '/cat.riv',
    autoplay: true,
    shouldDisableRiveListeners: false,
    onRiveReady: (rive) => {
      // Ensure all authored state machines are running so pointer interactions work.
      rive.stateMachineNames?.forEach((name) => rive.play(name));
    },
    layout: new Layout({
      fit: Fit.Contain,
      alignment: Alignment.Center,
    }),
  });

  return (
    <main className="h-screen w-screen bg-black flex items-center justify-center">
      <div className="w-[60vw] h-[60vh] pointer-events-auto">
        <RiveComponent className="h-full w-full block pointer-events-auto touch-auto" />
      </div>
      <div className="absolute bottom-4 right-4 text-white/90 text-sm text-right leading-tight pointer-events-none">
        <p>williamzhao474 [at] gmail [dot] com</p>
        <p>:3</p>
      </div>
    </main>
  );
}

export default App;
