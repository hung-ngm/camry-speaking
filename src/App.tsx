import RecorderControls from "./components/recorder-controls";
import RecordingsList from "./components/recordings-list";
import Avatar from "./components/avatar";
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
          <h1 className="role-label">Bot Tutor</h1>
          <Avatar image="https://herobot.app/wp-content/uploads/2020/10/AI-bot-1.jpg" /> 
        </div>
        <div className="huy-container">
          <h1 className="role-label">User</h1>
          <Avatar image="https://i.ytimg.com/vi/Cq_GMSyu7j0/maxresdefault.jpg" />
          <RecorderControls recorderState={recorderState} handlers={handlers} />
          <RecordingsList audio={audio} />
        </div>
      </div>
      
      
    </section>
  );
}
