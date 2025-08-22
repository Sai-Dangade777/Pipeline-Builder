import React from 'react';
import BaseNode from './BaseNode';
import { Position } from 'reactflow';

const ImageNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      type="Image"
      data={{
        label: 'Image',
        content: <span>Image processing node</span>,
        handles: [
          { type: 'target', position: Position.Left, id: `${id}-input` },
          { type: 'source', position: Position.Right, id: `${id}-output` }
        ]
      }}
      style={{ minWidth: 200, minHeight: 80, border: '1px solid #bbb' }}
    />
  );
};

export default ImageNode;
