// outputNode.js

import React, { useState } from 'react';
import BaseNode from './BaseNode';
import { Position } from 'reactflow';

const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data.outputType || 'Text');

  const handleNameChange = (e) => setCurrName(e.target.value);
  const handleTypeChange = (e) => setOutputType(e.target.value);

  return (
    <BaseNode
      id={id}
      type="Output"
      data={{
        label: 'Output',
        content: (
          <>
            <label>
              Name:
              <input type="text" value={currName} onChange={handleNameChange} />
            </label>
            <label>
              Type:
              <select value={outputType} onChange={handleTypeChange}>
                <option value="Text">Text</option>
                <option value="File">Image</option>
              </select>
            </label>
          </>
        ),
        handles: [
          {
            type: 'target',
            position: Position.Left,
            id: `${id}-value`
          }
        ]
      }}
      style={{ minWidth: 200, minHeight: 80, border: '1px solid #bbb' }}
    />
  );
};

export default OutputNode;
