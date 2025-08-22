import React, { useState } from 'react';
import BaseNode from './BaseNode';
import { Position } from 'reactflow';

const BooleanNode = ({ id, data }) => {
  const [value, setValue] = useState(data?.value || false);
  return (
    <BaseNode
      id={id}
      type="Boolean"
      data={{
        label: 'Boolean',
        content: (
          <label>
            Value:
            <input type="checkbox" checked={value} onChange={e => setValue(e.target.checked)} />
          </label>
        ),
        handles: [
          { type: 'source', position: Position.Right, id: `${id}-bool` }
        ]
      }}
      style={{ minWidth: 200, minHeight: 80, border: '1px solid #bbb' }}
    />
  );
};

export default BooleanNode;
