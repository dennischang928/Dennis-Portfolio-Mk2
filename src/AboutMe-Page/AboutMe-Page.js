import React from "react";
import LoopedThroughImages from "./LoopedThroughImages";
import styles from "./AboutMe-Page.module.css";

const AboutMeText = ({ styles }) => {
    const paragraphs = [
        "Hey! 👋 I’m Dennis, Chang Seng Chon, a college student in Penn State Harrisburg.",
        "My engineering journey started in the sixth grade, when I realized it was the perfect blend of everything I love: problem-solving and creating.",
        "Since then, I’ve worked on various projects, of which up to now I've completed 12 in the realms of mechanical engineering, electrical engineering, embedded systems, computer vision, deep learning, web development, and more.",
        "Engineering attracts me because it's everywhere in our lives, from something as simple as a QR code to the landing system of the Curiosity Rover. It is where theories become reality, where the wisdom of humankind converges for one purpose: to improve people's lives."
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