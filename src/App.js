import React, {useState} from 'react';
import './App.css';
import Upload from './components/uploadPage/uploadPage';
import Musicplay from './components/musicPlayPage/musicplayPage';
import 'typeface-roboto';

function App() {

  const [uploaded, setUploaded] = useState(false);

  const showPage = uploaded ? <Musicplay /> : <Upload setUploaded={setUploaded}/> 
  return (
    <div className="App">
      {showPage}
    </div>
  );
}

export default App;
