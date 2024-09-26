import { Metadata } from "next";

export default async function Contact() {
    return (
        <main>
            <h1>Get in contact</h1>
            <p>
                Connect with me on{" "}
                <a
                    href="https://www.linkedin.com/in/austin-hamiltonn/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "blue", textDecoration: "underline" }}
                >
                    LinkedIn,
                </a>
                {' '} or email me at austinhamilton.mail@proton.me
            </p>
        </main>
    );
}
