import React from "react";
import { TypeAnimation } from 'react-type-animation';
import styles from './Introduction-Page.module.css';

// Introduction text sequences
const IntroductionText1 = ['H', 1, 'Hi! I am Dennis'];
const IntroductionText2 = [
    'I am a', 1,
    'I am a Mechantronics Engineer', 1500,
    'I am a Programmer', 1200,
    'I am a 3D CAD Designer', 1300,
    'I am a Computer Technician', 1400,
    'I am a Web Developer', 1200,
    'I am a Hobby Jogger', 1200
];

// Main component for the introduction page
const IntroductionPage = () => {
    return (
        <div className={styles.container}>
            {/* Non-mobile introduction section */}
            <div className={styles.NIntro_section} id="Intro-section">
                <div className={styles.Primary_Background}></div>
                <div className={styles.left}>
                    <img loading="lazy" src={require("../Images/Intro.jpg")} alt="Introduction" />
                </div>
                <div className={styles.middle}>
                    <TypeAnimation
                        cursor={false}
                        sequence={IntroductionText1}
                        wrapper="h1"
                    />
                    <TypeAnimation
                        cursor={true}
                        sequence={IntroductionText2}
                        wrapper="h2"
                        repeat={Infinity}
                        speed={50}
                        deletionSpeed={70}
                    />
                </div>
            </div>

            {/* Mobile introduction section */}
            <div className={styles.MIntro_section} id="Intro-section">
                <div className={styles.Primary_Background}></div>
                <TypeAnimation
                    cursor={false}
                    sequence={IntroductionText1}
                    wrapper="h1"
                />
                <img className={styles.CroppedImage} loading="lazy" src={require("../Images/Intro.jpg")} alt="Introduction" />
                <TypeAnimation
                    cursor={true}
                    sequence={IntroductionText2}
                    wrapper="h2"
                    repeat={Infinity}
                    speed={50}
                    deletionSpeed={70}
                />
            </div>
        </div>
    );
};

export default IntroductionPage;