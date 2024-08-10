import React from 'react';
import './AboutUs.css'; // Import the CSS file for styling

const AboutUs = () => {
    const imageUrl = "http://www.pixelstalk.net/wp-content/uploads/2016/06/Book-HD-Wallpapers-download.jpeg"; // Replace with your image URL

    return (
        <section className="about-us-section">
            <div className="about-us-content">
                <h1>About Us</h1>
                <p>Welcome to Stubooks, your go-to destination for interactive storybooks, games, and educational content. We believe in making learning fun and engaging for children, providing resources that can be accessed offline for continuous learning anytime, anywhere.</p>
                <h2>Our Mission</h2>
                <p>At Stubooks, our mission is to revolutionize the way children learn by blending education with entertainment. Our interactive storybooks and games are designed to spark curiosity, enhance creativity, and build foundational skills in a fun and interactive manner.</p>
                <h2>Why Choose Stubooks?</h2>
                <ul>
                    <li>Interactive Storybooks: Engaging and interactive stories that make reading fun.</li>
                    <li>Educational Games: Games that educate while entertaining, fostering a love for learning.</li>
                    <li>Offline Access: All our content can be accessed offline, ensuring learning is uninterrupted.</li>
                </ul>
            </div>
            <div className="about-us-image">
                <img src={imageUrl} alt="About Us" />
            </div>
            <div className="contact-us">
                <h2>Contact Us</h2>
                <p>Email: <a href="mailto:Stubooks@gmail.com">Stubooks@gmail.com</a></p>
                <p>WhatsApp: <a href="https://wa.me/5664790980">5664790980</a></p>
                <p>Instagram: <a href="https://instagram.com/Stubooks">Stubooks</a></p>
                <p>Twitter: <a href="https://twitter.com/Stubooks">Stubooks</a></p>
            </div>
        </section>
    );
};

export default AboutUs;
