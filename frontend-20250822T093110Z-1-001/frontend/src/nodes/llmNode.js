// llmNode.js

import React from 'react';
import BaseNode from './BaseNode';
import { Position } from 'reactflow';

const LLMNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      type="LLM"
      data={{
        label: 'LLM',
        content: <span>This is a LLM.</span>,
        handles: [
          {
            type: 'target',
            position: Position.Left,
            id: `${id}-system`,
            style: { top: `${100/3}%` }
          },
          {
            type: 'target',
            position: Position.Left,
            id: `${id}-prompt`,
            style: { top: `${200/3}%` }
          },
          {
            type: 'source',
            position: Position.Right,
            id: `${id}-response`
          }
        ]
      }}
      style={{ minWidth: 200, minHeight: 80, border: '1px solid #bbb' }}
    />
  );
};

export default LLMNode;
