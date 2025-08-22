import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';
import { ReactFlowProvider } from 'reactflow';
import 'reactflow/dist/style.css';

function App() {
  return (
    <ReactFlowProvider>
      <div style={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column' }}>
        <PipelineToolbar />
        <div style={{ flex: 1, position: 'relative' }}>
          <PipelineUI />
        </div>
        <SubmitButton />
      </div>
    </ReactFlowProvider>
  );
}

export default App;
