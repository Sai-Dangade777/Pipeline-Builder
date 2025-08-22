// textNode.js

import React, { useState } from 'react';
import BaseNode from './BaseNode';
import { Position } from 'reactflow';


const getVariables = (text) => {
  // Match {{variable}} where variable is a valid JS identifier
  const regex = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;
  const vars = [];
  let match;
  while ((match = regex.exec(text)) !== null) {
    vars.push(match[1]);
  }
  return Array.from(new Set(vars));
};

const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const variables = getVariables(currText);

  // Dynamic sizing based on text length
  const minWidth = 200;
  const minHeight = 80;
  const width = Math.max(minWidth, Math.min(500, currText.length * 8 + 60));
  const height = Math.max(minHeight, Math.min(300, Math.ceil(currText.length / 30) * 32 + 60));

  // Handles for variables
  const variableHandles = variables.map((v, idx) => ({
    type: 'target',
    position: Position.Left,
    id: `${id}-var-${v}`,
    style: { top: `${30 + idx * 24}px`, background: '#10b981' }
  }));

  return (
    <BaseNode
      id={id}
      type="Text"
      data={{
        label: 'Text',
        content: (
          <label>
            Text:
            <input
              type="text"
              value={currText}
              onChange={e => setCurrText(e.target.value)}
              style={{ width: width - 80, minWidth: 100 }}
            />
          </label>
        ),
        handles: [
          ...variableHandles,
          {
            type: 'source',
            position: Position.Right,
            id: `${id}-output`
          }
        ]
      }}
      style={{ minWidth: width, minHeight: height, border: '1px solid #bbb', transition: 'width 0.2s, height 0.2s' }}
    />
  );
};

export default TextNode;
