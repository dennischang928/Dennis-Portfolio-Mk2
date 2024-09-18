import React from "react";
import LoopedThroughImages from "./LoopedThroughImages";
import styles from "./AboutMe-Page.module.css";

const AboutMeText = ({ styles }) => {
    const paragraphs = [
        "Hey! 👋 I’m Dennis Chang Seng Chon, a high school student from Macau 🇲🇴.",
        "My interest in engineering began in the sixth grade, when I realized it was the perfect blend of everything I love: designing and creating.",
        "Since then, I’ve worked on various projects, of which up to now I've completed 12 in the realms of mechanical engineering, electrical engineering, embedded systems, computer vision, deep learning, web development, and more.",
        "Engineering attracts me in that it’s everywhere in our lives, from something as usual as a QR code to the landing system of the Curiosity Rover."
    ];

    return (
        <div>
            {paragraphs.map((text, index) => (
                <p key={index} className={styles.paragraph}>
                    {text}
                    {index < paragraphs.length - 1 && <br />}
                    {index < paragraphs.length - 1 && <br />}
                </p>
            ))}
        </div>
    );
};

const AboutMePage = React.forwardRef((props, ref) => {
    return (
        <div className={styles.AboutMePage} id="AboutMe-Section" ref={ref}>
            <h1 >
                &#60; About Me &#62;
            </h1>
            <div className={styles.Content_Part}>
                <LoopedThroughImages />
                <AboutMeText styles={styles} />
            </div>
        </div>
    );
});


export default AboutMePage;