// inputNode.js

import React, { useState } from 'react';
import BaseNode from './BaseNode';
import { Position } from 'reactflow';

const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data.inputType || 'Text');

  const handleNameChange = (e) => setCurrName(e.target.value);
  const handleTypeChange = (e) => setInputType(e.target.value);

  return (
    <BaseNode
      id={id}
      type="Input"
      data={{
        label: 'Input',
        content: (
          <>
            <label>
              Name:
              <input type="text" value={currName} onChange={handleNameChange} />
            </label>
            <label>
              Type:
              <select value={inputType} onChange={handleTypeChange}>
                <option value="Text">Text</option>
                <option value="File">File</option>
              </select>
            </label>
          </>
        ),
        handles: [
          {
            type: 'source',
            position: Position.Right,
            id: `${id}-value`
          }
        ]
      }}
      style={{ minWidth: 200, minHeight: 80, border: '1px solid #bbb' }}
    />
  );
};

export default InputNode;
