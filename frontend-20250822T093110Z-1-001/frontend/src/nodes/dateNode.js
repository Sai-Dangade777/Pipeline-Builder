import React, { useState } from 'react';
import BaseNode from './BaseNode';
import { Position } from 'reactflow';

const DateNode = ({ id, data }) => {
  const [date, setDate] = useState(data?.date || '');
  return (
    <BaseNode
      id={id}
      type="Date"
      data={{
        label: 'Date',
        content: (
          <label>
            Date:
            <input type="date" value={date} onChange={e => setDate(e.target.value)} />
          </label>
        ),
        handles: [
          { type: 'source', position: Position.Right, id: `${id}-date` }
        ]
      }}
      style={{ minWidth: 200, minHeight: 80, border: '1px solid #bbb' }}
    />
  );
};

export default DateNode;
