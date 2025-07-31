import React from "react";
import "./main.css";

const Resume = () => {
  return (
    <>
      <section id="resume" className="resume section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Resume</h2>
          <p>
            Result-driven digital marketing executive with a strong foundation
            in SEO, content creation, and social media strategy.
          </p>
        </div>
        <div className="container">
          <div className="row">
            {/* Left Column */}
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
              <h3 className="resume-title">Summary</h3>
              <div className="resume-item pb-0">
                <h4>Pronal Hira</h4>
                <p>
                  <em>
                    Proven and results-driven Digital Marketing Executive with
                    6+ months of experience at Lead Hight. Skilled in SEO,
                    Google Analytics, content creation, and campaign
                    optimization with hands-on expertise in live projects.
                  </em>
                </p>
                <ul>
                  <li>Ashokenagar, India, 743263</li>
                  <li>+91 89186 76538</li>
                  <li>
                    <a href="mailto:pronalhira1112@gmail.com">
                      pronalhira1112@gmail.com
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/pro%20nal-hira-0a8ab232a"
                      target="_blank"
                    >
                      LinkedIn Profile
                    </a>
                  </li>
                </ul>
              </div>
              <h3 className="resume-title">Education</h3>
              <div className="resume-item">
                <h4>Certificate Course in Digital Marketing</h4>
                <h5>June 2024</h5>
                <p>
                  <em>CloudX Infotech</em>
                </p>
              </div>
              <div className="resume-item">
                <h4>B.A</h4>
                <h5>February 2022</h5>
                <p>
                  <em>Sri Krishna College</em>
                </p>
              </div>
              <div className="resume-item">
                <h4>Higher Secondary</h4>
                <h5>May 2019</h5>
                <p>
                  <em>Kalyangar Sanskriti Sangha Siksha Niketan</em>
                </p>
              </div>
              <div className="resume-item">
                <h4>Madhyamik</h4>
                <h5>May 2017</h5>
                <p>
                  <em>Naldugari Pardaman Chandra Kanta Vidyapith</em>
                </p>
              </div>
              <h3 className="resume-title">Languages</h3>
              <div className="resume-item">
                <ul>
                  <li>Bengali – Proficient (C2)</li>
                  <li>English – Upper Intermediate (B2)</li>
                  <li>Hindi – Upper Intermediate (B2)</li>
                </ul>
              </div>
            </div>
            {/* Right Column */}
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay={200}>
              <h3 className="resume-title">Professional Experience</h3>
              <div className="resume-item">
                <h4>Jr. Executive (Social Media)</h4>
                <h5>Lead Hight, Chinar Park</h5>
                <ul>
                  <li>
                    Handled SEO activities including keyword research, content
                    optimization, and link building
                  </li>
                  <li>
                    Managed customer relationships via email and social media
                    platforms
                  </li>
                  <li>
                    Analyzed website metrics and trends to refine marketing
                    strategies
                  </li>
                  <li>
                    Completed a 4-month internship managing live projects and
                    competitor analysis
                  </li>
                </ul>
              </div>
              <h3 className="resume-title">Technical Skills</h3>
              <div className="resume-item">
                <ul>
                  <li>SEO (Search Engine Optimization)</li>
                  <li>Social Media Optimization</li>
                  <li>Content Writing</li>
                  <li>Google &amp; Meta Ads</li>
                  <li>Analytics Tools</li>
                  <li>Canva Designing</li>
                </ul>
              </div>
              <h3 className="resume-title">Soft Skills</h3>
              <div className="resume-item">
                <ul>
                  <li>Creativity</li>
                  <li>Problem-Solving</li>
                  <li>Communication</li>
                  <li>Time Management</li>
                  <li>Client Handling</li>
                </ul>
              </div>
              <h3 className="resume-title">Hobbies &amp; Interests</h3>
              <div className="resume-item">
                <ul>
                  <li>Travelling</li>
                  <li>Reading</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
