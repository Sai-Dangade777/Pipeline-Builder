import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';
import { ReactFlowProvider } from 'reactflow';
import 'reactflow/dist/style.css';

function App() {
  return (
    <ReactFlowProvider>
      <div 
        style={{ 
          width: '100vw', 
          height: '100vh', 
          display: 'flex', 
          flexDirection: 'column',
          background: 'var(--background-color)',
          overflow: 'hidden'
        }}
      >
        <div style={{
          padding: '1rem',
          background: 'var(--surface-color)',
          borderBottom: '1px solid var(--border-color)',
          boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1)'
        }}>
          <PipelineToolbar />
        </div>
        <div style={{ 
          flex: 1, 
          position: 'relative',
          padding: '1rem',
          overflow: 'hidden'
        }}>
          <PipelineUI />
        </div>
        <div style={{
          padding: '1rem',
          background: 'var(--surface-color)',
          borderTop: '1px solid var(--border-color)',
          display: 'flex',
          justifyContent: 'flex-end'
        }}>
          <SubmitButton />
        </div>
      </div>
    </ReactFlowProvider>
  );
}

export default App;
