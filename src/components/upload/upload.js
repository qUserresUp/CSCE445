import React, { Component } from 'react';
import styles from './upload.module.css';
import uploadIcon from '../../images/upload-pictures-icon.png';

const upload = props => {

    return (
        <div className={styles.upload}>
            <div className={styles.header}>
                <h1>Image to Music Converter</h1>
            </div>

            <div className={styles.imgContainer}>
                <img style={{height: '100%', width: '100%'}} src={uploadIcon} />
                <div>
                    <h5>Translate Image to Music</h5>
                </div>
                <button className={styles.button}>
                    <h2>Upload and Image</h2>
                </button>
            </div>
        </div>


    )

}

export default upload;