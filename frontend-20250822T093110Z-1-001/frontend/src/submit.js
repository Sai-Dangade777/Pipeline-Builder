// submit.js
import React from 'react';
import { useStore } from './store';
import { shallow } from 'zustand/shallow';

export const SubmitButton = () => {
    const { nodes, edges } = useStore(
        (state) => ({
            nodes: state.nodes,
            edges: state.edges
        }),
        shallow
    );

    const handleSubmit = async () => {
        try {

            const response = await fetch('http://localhost:8000/pipelines/parse', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify({ nodes, edges }),
            });

            const data = await response.json();
            
            // Show alert with pipeline analysis
            alert(
                `Pipeline Analysis:\n\n` +
                `Number of Nodes: ${data.num_nodes}\n` +
                `Number of Edges: ${data.num_edges}\n` +
                `Is DAG: ${data.is_dag ? 'Yes' : 'No'}`
            );
        } catch (error) {
            console.error('Error submitting pipeline:', error);
            alert('Error submitting pipeline. Please try again.');
        }
    };

        const buttonStyle = {
        padding: '10px 20px',
        fontSize: '16px',
        borderRadius: '8px',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        transition: 'all 0.2s',
        margin: '0 10px'
    };

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
        }}>
            <button
                onClick={() => useStore.getState().clearPipeline()}
                style={{
                    ...buttonStyle,
                    backgroundColor: '#ef4444',
                }}
                onMouseOver={e => e.target.style.backgroundColor = '#dc2626'}
                onMouseOut={e => e.target.style.backgroundColor = '#ef4444'}
            >
                Clear Pipeline
            </button>
            <button
                onClick={handleSubmit}
                style={{
                    ...buttonStyle,
                    backgroundColor: '#6366f1',
                }}
                onMouseOver={e => e.target.style.backgroundColor = '#4f46e5'}
                onMouseOut={e => e.target.style.backgroundColor = '#6366f1'}
            >
                Submit Pipeline
            </button>
        </div>
    );
}
