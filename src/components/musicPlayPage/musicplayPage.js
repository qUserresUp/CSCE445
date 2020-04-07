import React, { Component } from 'react';
import styles from './musicplayPage.module.css';

import MusicPlayer from '../musicPlayer/musicPlayer';

const Musicplay = props => {

    return (
        <div className={styles.musicplayPage}>
            <div className={styles.header}>
                <h1>Image to Music Converter</h1>
            </div>
            <div className={styles.musicPlayerContainer}>
                <MusicPlayer />
            </div>
        </div>
    )

}

export default Musicplay;