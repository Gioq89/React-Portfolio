import React from 'react';
import aboutMeImage from '../assets/about-me.jpg';

const styles = {
    background: {
        background: "#ffffff",
        padding: "20px",
        margin: "20px",
    },
    aboutMeImage: {
        width: "100%",
        height: "auto",
    },
    headingStyle: {
        fontSize: "30px",
        fontWeight: "bold",
        color: "#000000",
    },
};

export default function AboutMe() {
    return (
        <div style={styles.background}>
            <h1 style={styles.headingStyle}>About Me</h1>
            <img style={styles.aboutMeImage} src={aboutMeImage} alt="About Me" />
            <p>
            My name is Giomendes Quezada and I am an Executive Team Leader at Target with a degree in Supply Chain Management from Arizona State University. I am currently learning to code from UCI and am excited to apply my skills to real-world challenges. My expertise lies in managing large teams and creating productive work environments. In addition to my technical skills, I bring a strong work ethic, excellent communication skills, and a commitment to delivering high-quality work to every project I work on. Please feel free to contact me through my e-mail or check out my projects on Github to learn more about my experience and skills.
            </p>
        </div>
    );
}