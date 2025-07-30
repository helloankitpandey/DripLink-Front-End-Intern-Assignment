import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';

const styleMap = {
  Classic: {
    color: 'white',
    backgroundColor: 'transparent',
    fontWeight: 'normal',
    fontFamily: 'inherit',
    padding: '0',
  },
  Backdrop: {
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: '4px 8px',
    borderRadius: '4px',
  },
  Highlight: {
    color: 'black',
    backgroundColor: 'yellow',
    padding: '4px 8px',
    borderRadius: '4px',
  },
  Glow: {
    color: '#39ff14',
    textShadow: '0 0 8px #39ff14, 0 0 20px #39ff14',
    fontWeight: 'bold',
  },
  Mono: {
    fontFamily: 'monospace',
    color: 'white',
    backgroundColor: 'transparent',
  },
};

const SubtitlePreview = () => {
  const { purchased } = useStore();
  const [selectedTemplateId, setSelectedTemplateId] = useState(
    purchased.length > 0 ? purchased[0].id : null
  );

  const selectedTemplate = purchased.find((t) => t.id === selectedTemplateId);

  return (
    <div className="subtitle-preview">
      <h2>Subtitle Preview</h2>
      {purchased.length === 0 ? (
        <p>No purchased templates yet</p>
      ) : (
        <>
          <select
            value={selectedTemplateId}
            onChange={(e) => setSelectedTemplateId(Number(e.target.value))}
          >
            {purchased.map((template) => (
              <option key={template.id} value={template.id}>
                {template.name}
              </option>
            ))}
          </select>
          <div
            className="preview-text"
            style={selectedTemplate ? styleMap[selectedTemplate.name] : {}}
          >
            {selectedTemplate ? selectedTemplate.exampleText : ''}
          </div>
        </>
      )}
    </div>
  );
};

export default SubtitlePreview;
