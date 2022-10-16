import RecorderControls from "./components/recorder-controls";
import RecordingsList from "./components/recordings-list";
import useRecorder from "./hooks/use-recorder";
import { UseRecorder } from "types/recorder";
import "app.css";

export default function App() {
  const { recorderState, ...handlers }: UseRecorder = useRecorder();
  const { audio } = recorderState;

  return (
    <section className="voice-recorder">
      <h1 className="title">Camry Speaking</h1>
      <div className="recorder-container">
        <div className="bot-container">

        </div>
        <div className="huy-container">
          <RecorderControls recorderState={recorderState} handlers={handlers} />
          <RecordingsList audio={audio} />
        </div>
      </div>
      
      
    </section>
  );
}
