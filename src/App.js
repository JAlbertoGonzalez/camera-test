import { useRef } from 'react';
import './App.css';
import { Button, Input, TextField } from '@mui/material';
import { useState } from 'react';

function App() {
  const ref = useRef()

  const [files, setFiles] = useState([])
  const [selectedFile, setSelectedFile] = useState(-1)

  function uploadCapturedImage(e) {
    const filesUploaded = e.target.files
    for (const file of filesUploaded) {
      setFiles(oldFiles => [...oldFiles, file])
    }
  }

  return (
    <div className="App">
      <header className="App-header">

        <input
          type="file" ref={ref}
          name="camera-upload"
          accept="image/*"
          capture="camera"
          style={{ display: 'none' }}
          onChange={uploadCapturedImage} />

        <Button variant='contained' onClick={() => ref.current.click()}>
          Subir ticket
        </Button>

        <p>Uploaded images:</p>
        {files.map((file, index) => <Button variant='outlined' onClick={() => setSelectedFile(index)}>{file.name}</Button>)}

        {selectedFile > -1 && <p style={{ width: '50%', padding: '12px' }}>
          <img alt="preview" src={URL.createObjectURL(files[selectedFile])} style={{ width: '100%' }} />
        </p>}
      </header>
    </div>
  );
}

export default App;
