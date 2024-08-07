// import React, { useState } from "react";
// import './Video.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import Navbar from './layouts/navbar/Navbar'; // Adjust the path as necessary

// const allVideos = [
//     { src: "Human Heart Anatomy And Physiology _ How Human Heart works_ (3D Animation).mp4", subject: 'Science' },
//     { src: "THE HUMAN DIGESTIVE SYSTEM OESOPHAGUS AND STOMACH v02.mp4", subject: 'Science' },
//     { src: "Photosynthesis Animation.mp4", subject: 'Science' },
//     { src: "PLANT VS ANIMAL CELLS.mp4", subject: 'Science' },
//     { src: "The Pandyan Dynasty _ The Open Book _ Education Videos.mp4", subject: 'Socials' },
//     { src: "TN CLASS 10 SOCIAL IMPORTANT MAP _ CLASS 10 SOCIAL  PUBLIC EXAM 2023 IMPORTANT MAP.mp4", subject: 'Socials' },
//     { src: "Trigonometry made easy.mp4", subject: 'Maths' }
//     // Add more video objects with subjects here
// ];

// const Video = () => {
//     const [selectedSubjects, setSelectedSubjects] = useState([]);

//     const handleSubjectChange = (event) => {
//         const { value, checked } = event.target;
//         setSelectedSubjects(prevSubjects =>
//             checked
//                 ? [...prevSubjects, value]
//                 : prevSubjects.filter(subject => subject !== value)
//         );
//     };

//     const filteredVideos = allVideos.filter(video =>
//         selectedSubjects.length === 0 || selectedSubjects.includes(video.subject)
//     );

//     return (
//         <div>
//             <Navbar darkTheme={true} darkText={true} /> {/* Adjust the props as necessary */}
//             <div className="video-page">
//                 <div className="sidebar">
//                     <h3>Subjects</h3>
//                     <br></br>
//                     <div>
//                         <input
//                             type="checkbox"
//                             id="maths"
//                             value="Maths"
//                             onChange={handleSubjectChange}
//                             checked={selectedSubjects.includes('Maths')}
//                         />
//                         <label htmlFor="maths">Maths</label>
//                     </div>
//                     <div>
//                         <input
//                             type="checkbox"
//                             id="science"
//                             value="Science"
//                             onChange={handleSubjectChange}
//                             checked={selectedSubjects.includes('Science')}
//                         />
//                         <label htmlFor="science">Science</label>
//                     </div>
//                     <div>
//                         <input
//                             type="checkbox"
//                             id="socials"
//                             value="Socials"
//                             onChange={handleSubjectChange}
//                             checked={selectedSubjects.includes('Socials')}
//                         />
//                         <label htmlFor="socials">Socials</label>
//                     </div>
//                 </div>
//                 <div className="video-container">
//                     {filteredVideos.length === 0 ? (
//                         <p>No videos available for the selected subjects.</p>
//                     ) : (
//                         filteredVideos.map((video, index) => (
//                             <div key={index} className="video-item">
//                                 <video controls>
//                                     <source src={video.src} type="video/mp4" />
//                                     Your browser does not support the video tag.
//                                 </video>
//                                 <br />
//                                 <a href={video.src} download className="download-button">
//                                     Download
//                                 </a>
//                             </div>
//                         ))
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Video;
import React, { useState } from "react";
import './Video.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from './layouts/navbar/Navbar'; // Adjust the path as necessary

const allVideos = [
    { src: "Human Heart Anatomy And Physiology _ How Human Heart works_ (3D Animation).mp4", subject: 'Science' },
    { src: "THE HUMAN DIGESTIVE SYSTEM OESOPHAGUS AND STOMACH v02.mp4", subject: 'Science' },
    { src: "Photosynthesis Animation.mp4", subject: 'Science' },
    { src: "PLANT VS ANIMAL CELLS.mp4", subject: 'Science' },
    { src: "The Pandyan Dynasty _ The Open Book _ Education Videos.mp4", subject: 'Socials' },
    { src: "TN CLASS 10 SOCIAL IMPORTANT MAP _ CLASS 10 SOCIAL  PUBLIC EXAM 2023 IMPORTANT MAP.mp4", subject: 'Socials' },
    { src: "Trigonometry made easy.mp4", subject: 'Maths' }
    // Add more video objects with subjects here
];

const Video = () => {
    const [selectedSubject, setSelectedSubject] = useState('');

    const handleSubjectClick = (subject) => {
        setSelectedSubject(prevSubject => prevSubject === subject ? '' : subject);
    };

    const filteredVideos = allVideos.filter(video =>
        !selectedSubject || video.subject === selectedSubject
    );

    return (
        <div>
            <Navbar darkTheme={true} darkText={true} /> {/* Adjust the props as necessary */}
            <div className="video-page">
                <div className="sidebar">
                    <h3>Subjects</h3>
                    <br></br>
                    <div
                        className={`subject-label ${selectedSubject === 'Maths' ? 'active' : ''}`}
                        onClick={() => handleSubjectClick('Maths')}
                    >
                        Maths
                    </div>
                    <div
                        className={`subject-label ${selectedSubject === 'Science' ? 'active' : ''}`}
                        onClick={() => handleSubjectClick('Science')}
                    >
                        Science
                    </div>
                    <div
                        className={`subject-label ${selectedSubject === 'Socials' ? 'active' : ''}`}
                        onClick={() => handleSubjectClick('Socials')}
                    >
                        Socials
                    </div>
                </div>
                <div className="video-container">
                    {filteredVideos.length === 0 ? (
                        <p>No videos available for the selected subjects.</p>
                    ) : (
                        filteredVideos.map((video, index) => (
                            <div key={index} className="video-item">
                                <video controls>
                                    <source src={video.src} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <br />
                                <a href={video.src} download className="download-button">
                                    Download
                                </a>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}

export default Video;

