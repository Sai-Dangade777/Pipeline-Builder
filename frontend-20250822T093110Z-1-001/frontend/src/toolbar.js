// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {

    return (
        <div style={{ 
            padding: '0.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
        }}>
            <h2 style={{ 
                margin: 0,
                fontSize: '1.25rem',
                color: 'var(--text-primary)',
                fontWeight: '600'
            }}>
                Pipeline Builder
            </h2>
            <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '0.75rem',
                alignItems: 'center'
            }}>
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />
            </div>
        </div>
    );
};
