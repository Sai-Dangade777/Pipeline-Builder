import React from 'react';
import { Handle } from 'reactflow';

/**
 * BaseNode - a reusable node component for VectorShift pipelines
 * Props:
 * - id: string
 * - type: string
 * - data: { label: string, content?: any, handles?: Array<{ type: 'source'|'target', position: 'left'|'right'|'top'|'bottom', id: string, style?: object }> }
 * - style: object (optional)
 */
const cardStyle = {
  padding: 18,
  borderRadius: 12,
  background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)',
  boxShadow: '0 4px 16px rgba(60, 60, 120, 0.10)',
  minWidth: 160,
  border: '1.5px solid #a5b4fc',
  transition: 'box-shadow 0.2s',
  position: 'relative',
};

const labelStyle = {
  fontWeight: 600,
  fontSize: 16,
  color: '#3730a3',
  marginBottom: 10,
  letterSpacing: 0.5,
};

const contentStyle = {
  marginBottom: 10,
  fontSize: 14,
  color: '#334155',
};

const inputStyle = {
  padding: '6px 10px',
  borderRadius: 6,
  border: '1px solid #a5b4fc',
  fontSize: 14,
  marginLeft: 6,
  marginRight: 10,
  background: '#fff',
};

const selectStyle = {
  ...inputStyle,
  padding: '6px 8px',
};

const handleStyle = {
  width: 12,
  height: 12,
  background: '#6366f1',
  border: '2px solid #fff',
  boxShadow: '0 0 4px #6366f1',
};

const BaseNode = ({ id, type, data, style }) => {
  // Enhance children input/select styling if present
  const enhanceContent = (content) => {
    if (!content) return null;
    // If content is a React fragment or element, clone and inject styles
    if (typeof content === 'object') {
      return React.Children.map(content.props?.children || content, child => {
        if (!child) return child;
        if (child.type === 'input') {
          return React.cloneElement(child, { style: inputStyle });
        }
        if (child.type === 'select') {
          return React.cloneElement(child, { style: selectStyle });
        }
        return child;
      });
    }
    return content;
  };

  return (
    <div
      style={{ ...cardStyle, ...style }}
      onMouseEnter={e => e.currentTarget.style.boxShadow = '0 8px 24px rgba(60,60,120,0.18)'}
      onMouseLeave={e => e.currentTarget.style.boxShadow = cardStyle.boxShadow}
    >
      <div style={labelStyle}>{data.label || type}</div>
      {data.content && <div style={contentStyle}>{enhanceContent(data.content)}</div>}
      {/* Render handles */}
      {data.handles && data.handles.map((h, idx) => (
        <Handle
          key={h.id || idx}
          type={h.type}
          position={h.position}
          id={h.id}
          style={{ ...handleStyle, ...h.style }}
        />
      ))}
    </div>
  );
};

export default BaseNode;
