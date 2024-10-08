import React, { useState } from 'react'
import { useSpring, a } from '@react-spring/web'
import Button from '@mui/material/Button';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import styles from "./Project_Card.module.css"

const Project_Card = ({ id, title, content, thumbnail, tags, IsSrolledTo }) => {

    const [IsFlipped, setIsFlipped] = useState(false)


    const { transform, opacity, display } = useSpring({
        opacity: IsFlipped ? 1 : 0,
        transform: `perspective(600px) rotateX(${IsFlipped ? 180 : 0}deg) scale(${IsSrolledTo ? 0.95 : 1.02})`,
        config: { tension: 150, friction: 20 },
        display: IsFlipped ? "" : "none"
    })

    return (
        <div className={styles.container} id={id} onClick={() => setIsFlipped(!IsFlipped)}>
            <div className={styles.title}>
                <h1>{title}</h1>
            </div>
            <div className={styles.ImageSection}>
                <a.img className={styles.thumbnail} id="thumbnail" src={thumbnail}
                    style={{ opacity: opacity.to(o => 1 - o), transform, }}
                />

                <a.div
                    className={styles.content_container}
                    style={{
                        opacity,
                        transform,
                        rotateX: '180deg',
                        display
                    }}
                >
                    <div className={styles.content}>
                        {content}
                    </div>
                    <div className={styles.Tag_Section}>
                        <ul>
                            {tags.map((e) => { return (<li key={e}>{e}</li>) })}
                        </ul>
                    </div>
                    <div className={styles.View_Project_Button_Container}>
                        <a href={`/${id}`} style={{ textDecoration: "none", color: "#000" }}>
                            <Button startIcon={<RemoveRedEyeIcon />} variant="contained" size="small" className={styles.View_Project_Button}>
                                View Project
                            </Button>
                        </a>
                    </div>
                </a.div>
            </div>


        </div>
    )
}

export default Project_Card