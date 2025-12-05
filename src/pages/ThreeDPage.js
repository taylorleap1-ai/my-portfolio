import React, { useState } from 'react';
import ModelViewer from '../components/ModelViewer';
import '../styles/ThreeDPage.css';

const ThreeDPage = () => {
  const [selectedModel, setSelectedModel] = useState(null);

  const models = [
    { 
      id: 1, 
      title: 'Ghost Can', 
      file: '/models/GhostCan.glb',
      thumbnail: '/models/GhostCan.glb'
    },
    { 
      id: 2, 
      title: 'Love Death And Drugs', 
      file: '/models/lovedeathanddrugs.obj',
      thumbnail: '/models/lovedeathanddrugs.obj'
    },
    { 
      id: 3, 
      title: 'Cow Model', 
      file: '/models/cow.obj',
      thumbnail: '/models/cow.obj'
    },
    { 
      id: 4, 
      title: '3D Model', 
      file: '/models/3d-model.obj',
      thumbnail: '/models/3d-model.obj'
    },
  ];

  return (
    <div className="threed-page">
      <h1 className="threed-title">3D MODELS</h1>
      
      <div className="models-grid">
        {models.map((model) => (
          <div 
            key={model.id} 
            className="model-card"
            onClick={() => setSelectedModel(model)}
          >
            <div className="model-preview">
              <div className="preview-placeholder">Click to View</div>
            </div>
            <h3 className="model-title">{model.title}</h3>
          </div>
        ))}
      </div>

      {selectedModel && (
        <div className="model-modal" onClick={() => setSelectedModel(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedModel(null)}>×</button>
            <h2 className="modal-title">{selectedModel.title}</h2>
            <ModelViewer
              url={selectedModel.file}
              width={Math.min(800, window.innerWidth - 40)}
              height={Math.min(600, window.innerHeight - 200)}
              enableManualRotation={true}
              enableManualZoom={true}
              enableMouseParallax={true}
              enableHoverRotation={true}
              autoFrame={true}
              fadeIn={true}
              showScreenshotButton={true}
              environmentPreset="studio"
              ambientIntensity={0.5}
              keyLightIntensity={1.2}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ThreeDPage;
