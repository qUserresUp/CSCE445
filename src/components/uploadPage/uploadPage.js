import React, { useState, Fragment } from 'react';
import styles from './uploadPage.module.css';
import axios from 'axios';

import uploadIcon from '../../images/upload-pictures-icon.png';
import Loading from '../loading/loading';

const delay = (t,v) => {
    return new Promise(function(resolve) { 
        setTimeout(resolve.bind(null, v), t)
    })
}

const UploadPage = props => {

    const [file, setFile] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const fileSelectedHandler = event => {

// TODO: try to show a preview of the image

        let reader = new FileReader();
        let selecteeFile = event.target.files[0];

        reader.onloadend = () => {
            setFile(selecteeFile);
            props.setUploadedImg(reader.result)
        }
        reader.readAsDataURL(selecteeFile);

        // setFile(event.target.files[0]);

    }

    const fileUploadHandler = () => {

        // set loading to true
        setIsLoading(true);

        const fd = new FormData();
        fd.append('image', file, file.name)
    
        axios.post('https://hun-backend.appspot.com/api/v1/convert/', {image:fd})
        .then(res => {
            // do something
            console.log(res);
            const mp3Link = res.freesoundSoundInstance.previews['preview-hq-mp3'];
            props.setUploaded(true);
            props.setMp3Link(mp3Link);

        })
        .catch(err => {
            console.log(err);
        })

        // delay(3000)
        // .then(() => {
        //     props.setUploaded(true)
        // });
        
    }

    const picOrLoading = isLoading ? 
        <Fragment>
            <div className={styles.loadingContainer}>
                <Loading />
            </div>
            <button className={styles.button}>
            <h2>WORKING ON IT....</h2>
            </button>
        </Fragment>:(
            <Fragment>
                <img style={{height: '100%', width: '100%'}} src={uploadIcon} />
                <input type="file" onChange={fileSelectedHandler} />
                <h5>2.Convert</h5>
                <button disabled={!file} className={styles.button} onClick={fileUploadHandler}>
                    <h2>CONVERT</h2>
                </button>
            </Fragment>
        );

    return (
        <div className={styles.uploadPage}>
            <div className={styles.header}>
                <h1>Image to Music Converter</h1>
            </div>

            <div className={styles.imgContainer}>
                
                <h5>1.Upload an Image</h5>
                {picOrLoading}

            </div>
        </div>
    );

}

export default UploadPage;