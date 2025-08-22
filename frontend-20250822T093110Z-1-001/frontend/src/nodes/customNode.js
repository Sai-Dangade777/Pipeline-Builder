import React from 'react';
import BaseNode from './BaseNode';
import { Position } from 'reactflow';

const CustomNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      type="Custom"
      data={{
        label: 'Custom',
        content: <span>Custom node for demonstration</span>,
        handles: [
          { type: 'target', position: Position.Left, id: `${id}-input` },
          { type: 'source', position: Position.Right, id: `${id}-output` }
        ]
      }}
      style={{ minWidth: 200, minHeight: 80, border: '1px solid #bbb' }}
    />
  );
};

export default CustomNode;
