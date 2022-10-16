import RecorderControls from "./components/recorder-controls";
import RecordingsList from "./components/recordings-list";
import Avatar from "./components/avatar";
import useRecorder from "./hooks/use-recorder";
import useRecordingsList from "hooks/use-recordings-list";
import { UseRecorder } from "types/recorder";
import "app.css";

export default function App() {
  const { recorderState, ...handlers }: UseRecorder = useRecorder();
  const { audio } = recorderState;
  const { recordings } = useRecordingsList(audio);

  return (
    <section className="voice-recorder">
      <h1 className="title">Camry Speaking</h1>
      <div className="recorder-container">
        <div className="bot-container">
          <Avatar image="https://herobot.app/wp-content/uploads/2020/10/AI-bot-1.jpg" /> 
        </div>
        <div className="huy-container">
          <RecorderControls recorderState={recorderState} handlers={handlers} />
          {recordings.length > 0 && 
            <Avatar image="https://i.ytimg.com/vi/Cq_GMSyu7j0/maxresdefault.jpg" />
          }
          <RecordingsList audio={audio} />
        </div>
      </div>
      
      
    </section>
  );
}
