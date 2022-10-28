import "./App.css";
import Navbar from "./Navbar";
import { FaPaperclip, FaLinkedin } from "react-icons/fa";

import { GoMarkGithub } from "react-icons/go";

const App = () => {
  return (
    <div className="App-wrapper">
      <Navbar />
      <div className="container">
        <section id="Home">
          <h1 className="headline">
            <span className="headline-text">Fullstack Developer </span>creating
            thoughtful, intuitive interfaces.
          </h1>
        </section>

        <section id="About">
          <h2 className="headers">About</h2>
          <p className="normal-text">
            I’m Atanu-Ghosh, an India based Fullstack designer, developer with
            around five months of experience. I specialise in interface design
            for mobile and web-based applications with a focus on simplicity &
            usability using ReactJS.
            <br></br>
            <br></br>
            I'm currently doing my bachelor's degree in Information Technology.
            I enjoy building dynamic, creative products from start to finish. I
            am not that experienced in the domain so I want to grow and improve
            based on user metrics.
          </p>
        </section>

        <section id="Experience">
          <h2 className="headers">Work Experience</h2>
          <div className="experience-grid-wrapper">
            <div className="years">Jun 2022 - Sep 2022</div>
            <div className="job-wrapper">
              <a
                className="job-titles"
                href="https://www.linkedin.com/in/getatanu/"
              >
                Graphic Designer - Humans For Humanity
              </a>
              <p className="job-desc">
                Collaborated with PR, Social Media and Editorial teams to design
                graphics, boosting social media engagement. Designed original
                graphics used in public health campaigns. Responsible for a high
                volume of layout, graphics and production designs.
              </p>
            </div>
          </div>
          <div className="experience-grid-wrapper">
            <div className="years">Dec 2021 - Dec 2021</div>
            <div className="job-wrapper">
              <a
                className="job-titles"
                href="https://www.linkedin.com/in/getatanu/"
              >
                Python Developer - Material Depot
              </a>
              <p className="job-desc">
                Used BeautifulSoup python library and Selenium to extract
                desired data from the given URLs in an automated way, Stored the
                data efficiently in spreadsheet format
              </p>
            </div>
          </div>
          <div className="experience-grid-wrapper">
            <div className="years">Oct 2021 - Dec 2021</div>
            <div className="job-wrapper">
              <a
                className="job-titles"
                href="https://www.linkedin.com/in/getatanu/"
              >
                Content Writer - K4 Media & Technologies
              </a>
              <p className="job-desc">
                Published educative blog content on mathematical topics.
                Optimized old website content with up-to-date SEO guidelines and
                increased crowd traffic.Maintained content trackers and created
                monthly reports for management.
              </p>
            </div>
          </div>
        </section>

        <section id="Projects">
          <h2 className="headers">Side Projects</h2>
          <div className="experience-grid-wrapper">
            <div className="years">
              <a className="job-titles" href="https://admin-fox.netlify.app">
                https://admin-fox.netlify.app/
              </a>
            </div>
            <div className="job-wrapper">
              <a
                className="job-titles"
                href="https://www.linkedin.com/in/getatanu/"
              >
                Admin Dashboard
              </a>
              <p className="job-desc">
                A fully interactive Admin Panel that includes one Dashboard.
                Three Pages Four Apps and Seven fully functional charts. Build
                with a fully functional calendar a kanban board a WYSIWYG editor
                and a color picker.
                <br /> TechStack: ReactJS, React Context API, SyncFusion for UI
              </p>
            </div>
          </div>
          <div className="experience-grid-wrapper">
            <div className="years">
              <a className="job-titles" href="https://mused.netlify.app/">
                https://mused.netlify.app/
              </a>
            </div>
            <div className="job-wrapper">
              <a className="job-titles" href="https://github.com/zabuja/muse">
                Lyriks - Music player
              </a>
              <p className="job-desc">
                Improved version of Spotify. With a modern homepage fullyfledged
                music player search lyrics song exploration features search
                popular music around you worldwide top charts. <br /> Techstack:
                ReactJS,tailwind CSS, ShazamCore API
              </p>
            </div>
          </div>
          <div className="experience-grid-wrapper">
            <div className="years">
              <a className="job-titles" href="https://bankease.netlify.app/">
                https://bankease.netlify.app/
              </a>
            </div>
            <div className="job-wrapper">
              <a
                className="job-titles"
                href="https://github.com/zabuja/beaseness"
              >
                Beaseness - Buisness landing page
              </a>
              <p className="job-desc">
                A fully responsive business landing page made using ReactJS
                consisting of a main section highquality assets and gradients
                usiness stats reusable feature sections with calltoaction
                buttons testimonial cards section.
                <br />
                Techstack: ReactJS, tailwind CSS
              </p>
            </div>
          </div>
        </section>

        <section id="chat">
          <div className="contact-content">
            <h2 className="headers">Get in Touch</h2>
            <p className="normal-text">
              Pick your favorite social media and I will be there to connect
              with you !!!
            </p>
            <div className="contact-list">
              <a
                className="job-titles"
                href="mailto:atanu.zxbui@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <FaPaperclip style={{ width: 30, height: 30 }} /> <t />
              </a>
              <a
                className="job-titles"
                href="https://www.linkedin.com/in/getatanu/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin style={{ width: 30, height: 30 }} />{" "}
              </a>
              <a
                className="job-titles"
                href="https://github.com/zabuja"
                target="_blank"
                rel="noreferrer"
              >
                <GoMarkGithub style={{ width: 30, height: 30 }} />
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
