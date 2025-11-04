import React from 'react';
// IMPORTANT: Add your photo to `src/assets` and update the path here
import profilePhoto from '../assets/jabran-photo.jpg'; 

function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="about-content">
          <div className="about-image">
            <img src={profilePhoto} alt="Jabran, BACP Accredited Psychotherapist" />
          </div>
          <div className="about-text">
            <h2>Your Guide to a Healthier Mind</h2>
            <p>Hello, I'm Jabran. I am a BACP Accredited Psychotherapist with over 10 years of experience helping people find clarity and peace. From my bases in Oldham and Manchester, I have been privileged to help clients from within Greater Manchester, online across England and a number of areas abroad, including in Dubai, Hong Kong, the USA, Ethiopia, and beyond.</p>
            <p>This international experience has given me a deep understanding of how messy and complex life can be. I have a special focus on helping clients navigate the delicate balance of cultural expectations, generational trauma, and immigrant family dynamics. I appreciate the courage it takes to question traditional advice and forge your own path.</p>
            <p>My role isn't to judge your background, but to honour your experience. Together, in a confidential setting, we will explore your challenges and uncover the tools you already possess to build a life that feels authentic to you.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
