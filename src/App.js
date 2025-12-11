import "./index.css";

const MyPage = () => {
  return (
    <body>
      <div className="banner">
        <div className="header">
          <div className="title"></div>
        </div>
        <div className="welcome">
          <img
            alt="Profile Pic"
            className="welcome-image"
            src="../assets/IMG-20241214-WA0014.jpg"
          />
          <div className="welcome-message-wrapper">
            <span className="welcome-message-subtext">Hello, there!</span>
            <span className="welcome-message">I am Sri Vishnu Pasumarthi</span>

            {/* <span className="welcome-message-subtext">
              Frontend Developer | Azure & AWS Certified
            </span> */}
          </div>
        </div>
      </div>
      <div className="about-me-wrapper">
        <div className="about-me">
          <div className="about-me-title-wrapper">
            <span className="about-me-title">About Me</span>
          </div>
          <div className="about-me-desc-wrapper">
            <span className="about-me-desc">
              <p>
                I am currently working at TechBlocks as a Frontend Web
                Developer, with over 4 years of total work experience. I am
                adept in web development with React JS, and currently upskilling
                with Node JS, Express JS & Next JS. I am experienced in
                converting high level UI wireframes & requirements to concrete
                implementation by following design & coding patterns that are up
                to the industry standard.
              </p>
              <p>
                I have earned the Azure DevOps Engineer & AWS Developer
                Associate certifications and I'm keen on gaining hands-on
                experience with these cloud services, which would increase my
                proficiency with these cloud platforms. I am also BigDev
                certified, and have a good understanding of Stencil UI, Catalog
                API and Widgets API.
              </p>
              <p>
                I am passionate about Photography, and I have a Minor Degree in
                Photography from Amity University Mumbai, where I also completed
                my Bachelor's Degree in Computer Science and Engineering. I
                believe that photography helps me develop my creativity,
                attention to detail, and problem-solving skills, which are
                essential for my career as a software developer. My goal is to
                combine my technical and artistic talents to create innovative
                and user-friendly solutions that make a positive impact.
              </p>
            </span>
          </div>
        </div>
      </div>
      <div className="project-list"></div>
      <div className="project-group">
        <div className="project-group-tagline-wrapper">
          <span className="project-group-tagline">Reference</span>
        </div>
        <div className="project-row">
          <a href="https://www.wikipedia.org/" className="project-wrapper">
            {/* <img
                className="project-logo"
                alt=""
                src="./Wikimedia_files/Wikipedia-logo_sister.svg"
              /> */}
            <div className="project-block">
              <div className="project-name-wrapper">
                <span className="project-name">Project #1</span>
              </div>
              <span className="project-tagline">Testing</span>
            </div>
          </a>
        </div>
      </div>
      <div className="wmf-wrapper">
        <div className="wmf">
          <div className="wmf-block">
            <div className="wmf-desc-wrapper">
              <span className="wmf-desc">This is a sample description</span>
            </div>
          </div>
        </div>
      </div>
      <div className="donate-bar">
        <div className="donate">
          {/* <img
              className="donate-image"
              alt=""
              src="./Wikimedia_files/puzzle-globe.svg"
            /> */}
          <div className="donate-block-wrapper">
            <div className="donate-block">
              <div className="donate-title">Testing section</div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact">
        <div className="contact-block">
          <div className="contact-wrapper">
            <span className="contact-title">Contact</span>
          </div>
          <span className="contact-desc">You can contact me here</span>
        </div>
        <div className="contact-block">
          <a href="https://www.linkedin.com/in/sri-vishnu-pasumarthi/">
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </body>
  );
};

export default MyPage;
