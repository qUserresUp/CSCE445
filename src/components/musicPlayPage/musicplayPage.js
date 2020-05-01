import React, { useState } from 'react';
import styles from './musicplayPage.module.css';

import MusicPlayer from '../musicPlayer/musicPlayer';

const Musicplay = props => {

    const [play, setPlay] = useState(false);

    const audio = new Audio(props.mp3Link.freesoundSoundInstance.previews['preview-hq-mp3']); // TO DO
    console.log(props.mp3Link.freesoundSoundInstance.previews['preview-hq-mp3'])

    const togglePlay = () => {
        !play ? audio.play() : audio.pause();
        setPlay(!play);
    }

    return (
        <div className={styles.musicplayPage}>
            <div className={styles.header}>
                <h1>Image to Music Converter</h1>
            </div>
            <div className={styles.musicPlayerContainer}>
                <MusicPlayer togglePlay={togglePlay} uploadedImg={props.uploadedImg} label={props.mp3Link.simpleData.topLabel}/>
            </div>
        </div>
    )

}

export default Musicplay;