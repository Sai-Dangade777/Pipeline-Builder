import React, { useState } from 'react';
import BaseNode from './BaseNode';
import { Position } from 'reactflow';

const MathNode = ({ id, data }) => {
  const [expression, setExpression] = useState(data?.expression || 'a + b');
  return (
    <BaseNode
      id={id}
      type="Math"
      data={{
        label: 'Math',
        content: (
          <label>
            Expression:
            <input type="text" value={expression} onChange={e => setExpression(e.target.value)} />
          </label>
        ),
        handles: [
          { type: 'target', position: Position.Left, id: `${id}-a` },
          { type: 'target', position: Position.Left, id: `${id}-b` },
          { type: 'source', position: Position.Right, id: `${id}-result` }
        ]
      }}
      style={{ minWidth: 200, minHeight: 80, border: '1px solid #bbb' }}
    />
  );
};

export default MathNode;
