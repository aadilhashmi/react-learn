import React from 'react';
import DictateButton from "react-dictate-button";


export const ReactDictateComp = () => {
    const handleDictate = ()=> {
        
    }
    const handleProgress = () => {
        
    };
        
    
    return (
      <div>
        <DictateButton
        className="my-dictate-button"
          grammar="#JSGF V1.0; grammar districts; public <district> = Tuen Mun | Yuen Long;"
          lang="en-US"
          onDictate={handleDictate}
          onProgress={handleProgress}
        >
          Start/stop
        </DictateButton>
      </div>
    );
};

