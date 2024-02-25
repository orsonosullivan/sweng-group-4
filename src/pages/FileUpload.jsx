import React, { useState } from 'react';
import './fileUpload.css'; 

function App() {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
    };

    return (
        <div className="app-container">
            <header className="app-header">
                <h1>Image Analyzer</h1>
                <p>Upload an image to analyze its content</p>
            </header>
            <div className="background-image"></div> 
            <div className="app-content">
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    data-testid="file-upload" 
                />
                {selectedFile && (
                    <div className="file-info">
                        <p>Selected File: {selectedFile.name}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;