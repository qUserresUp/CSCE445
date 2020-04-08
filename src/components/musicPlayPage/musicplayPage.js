import React, { useState } from 'react';
import styles from './musicplayPage.module.css';

import MusicPlayer from '../musicPlayer/musicPlayer';

const Musicplay = props => {

    const [play, setPlay] = useState(false);

    const audio = new Audio(props.mp3Link); // TO DO

    const togglePlay = () => {
        !play ? audio.play() : audio.pause();
        setPlay(!play);
    }

    console.log(play);
    return (
        <div className={styles.musicplayPage}>
            <div className={styles.header}>
                <h1>Image to Music Converter</h1>
            </div>
            <div className={styles.musicPlayerContainer}>
                <MusicPlayer togglePlay={togglePlay} uploadedImg={props.uploadedImg}/>
            </div>
        </div>
    )

}

export default Musicplay;