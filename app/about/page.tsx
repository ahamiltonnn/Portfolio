import styles from './about.module.css';
import { Metadata } from 'next';


export const metadata: Metadata = {
    title: 'About Me',
    description: 'Austin Hamilton Full Stack Developer',
}

export default async function About() {

    return (
        <main>
            <h1>About Me</h1>
            <p>Innovative full stack developer with a proactive approach to problem-solving, specializing in system design, 
back-end and front-end development. Skilled in Python, JavaScript, SQL, HTML5, CSS, and experienced in 
creating dynamic web applications using frameworks like Django, React (including Next.js), and FastAPI. 
Proficient in implementing user-centric features to enhance functionality and security, with a focus on 
enhancing user experience and driving project success.</p>
        </main>
    )
}