import React, {useState} from 'react';
import './App.css';
import Upload from './components/uploadPage/uploadPage';
import Musicplay from './components/musicPlayPage/musicplayPage';
import 'typeface-roboto';

function App() {

  const [uploaded, setUploaded] = useState(false);
  const [mp3Link, setMp3Link] = useState(null);
  const [uploadedImg, setUploadedImg] = useState(null);

  const showPage = uploaded ? <Musicplay mp3Link={mp3Link} uploadedImg={uploadedImg}/> : 
  <Upload 
    setUploaded={setUploaded} 
    setMp3Link={setMp3Link}
    setUploadedImg={setUploadedImg}
  /> 
  return (
    <div className="App">
      {showPage}
    </div>
  );
}

export default App;
