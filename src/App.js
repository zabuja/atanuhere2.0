import "./App.css";
import Navbar from "./Navbar";

const App = () => {
  return (
    <div className="App-wrapper">
      <Navbar />
      <div className="container">
        <h1 className="headline">
          Fullstack Developer creating thoughtful, intuitive interfaces.
        </h1>
        <h2 className="headers">About</h2>
        <p className="normal-text">
          I’m Atanu-Ghosh, an India based Fullstack designer, developer with
          around five months of experience. I specialise in interface design for
          mobile and web-based applications with a focus on simplicity &
          usability using ReactJS.
          <br></br>
          <br></br>
          I'm currently doing my bachelor's degree in Information Technology. I
          enjoy building dynamic, creative products from start to finish. I am
          not that experienced in the domain so I want to grow and improve based
          on user metrics.
        </p>
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
              Used BeautifulSoup python library and Selenium to extract desired
              data from the given URLs in an automated way, Stored the data
              efficiently in spreadsheet format
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
              Published educative blog content on mathematical topics. Optimized
              old website content with up-to-date SEO guidelines and increased
              crowd traffic.Maintained content trackers and created monthly
              reports for management.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
