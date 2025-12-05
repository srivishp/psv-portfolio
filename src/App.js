import "./App.css";

const MyPage = () => {
  return (
    <body className="jsl10n-visible">
      <div className="banner">
        <div className="header">
          <div className="title">
            <div className="title-image-wrapper">
              {/* <img
                  className="title-image"
                  alt=""
                  src="./Wikimedia_files/wikimedia_logo.png"
                /> */}
            </div>
          </div>
        </div>
        <div className="welcome">
          <div className="welcome-message-wrapper">
            <span
              className="welcome-message jsl10n"
              data-jsl10n="wikimedia-org-welcome"
            >
              Hello, there!
            </span>
            <span
              className="welcome-message-subtext jsl10n"
              data-jsl10n="wikimedia-org-welcome-subtitle"
            >
              Join us in making all knowledge available to everyone, everywhere.
            </span>
          </div>
          {/* <img
            className="welcome-image"
            src="./Wikimedia_files/welcome-image.svg"
          /> */}
        </div>
      </div>
      <div className="our-projects-wrapper">
        <div className="our-projects">
          <div className="our-projects-title-wrapper">
            <span
              className="our-projects-title jsl10n"
              data-jsl10n="wikimedia-org-our-projects"
            >
              Our Projects
            </span>
          </div>
          <div className="our-projects-desc-wrapper">
            <span
              className="our-projects-desc jsl10n"
              data-jsl10n="wikimedia-org-our-projects-desc"
            >
              Our projects are the core of the , and the content is
              collaboratively developed by over 260,000 users worldwide using
              thefsfddsd.
            </span>
          </div>
        </div>
      </div>
      <div className="project-list"></div>
      <div className="project-group">
        <div className="project-group-tagline-wrapper">
          <span
            className="project-group-tagline jsl10n"
            data-jsl10n="wikimedia-org-projects-reference"
          >
            Reference
          </span>
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
                <span className="project-name jsl10n" data-jsl10n="wiki.name">
                  Wikipedia
                </span>
              </div>
              <span
                className="project-tagline jsl10n"
                data-jsl10n="wiki.slogan"
              >
                The Free Encyclopedia
              </span>
            </div>
          </a>
          <a href="https://www.wiktionary.org/" className="project-wrapper">
            {/* <img
                className="project-logo"
                alt=""
                src="./Wikimedia_files/Wiktionary-logo_sister.svg"
              /> */}
            <div className="project-block">
              <div className="project-name-wrapper">
                <span
                  className="project-name jsl10n"
                  data-jsl10n="wiktionary.name"
                >
                  Wiktionary
                </span>
              </div>
              <span
                className="project-tagline jsl10n"
                data-jsl10n="wiktionary.slogan"
              >
                Free dictionary
              </span>
            </div>
          </a>
          <a href="https://www.wikiquote.org/" className="project-wrapper">
            {/* <img
                className="project-logo"
                alt=""
                src="./Wikimedia_files/Wikiquote-logo_sister.svg"
              /> */}
            <div className="project-block">
              <div className="project-name-wrapper">
                <span
                  className="project-name jsl10n"
                  data-jsl10n="wikiquote.name"
                >
                  Wikiquote
                </span>
              </div>
              <span
                className="project-tagline jsl10n"
                data-jsl10n="wikiquote.slogan"
              >
                Free quote compendium
              </span>
            </div>
          </a>
          <a href="https://www.wikibooks.org/" className="project-wrapper">
            {/* <img
                className="project-logo"
                alt=""
                src="./Wikimedia_files/Wikibooks-logo_sister.svg"
              /> */}
            <div className="project-block">
              <div className="project-name-wrapper">
                <span
                  className="project-name jsl10n"
                  data-jsl10n="wikibooks.name"
                >
                  Wikibooks
                </span>
              </div>
              <span
                className="project-tagline jsl10n"
                data-jsl10n="wikibooks.slogan"
              >
                Free textbooks
              </span>
            </div>
          </a>
        </div>
      </div>
      <div className="wmf-wrapper">
        <div className="wmf">
          <div className="wmf-block">
            <div className="wmf-desc-wrapper">
              <span className="wmf-desc jsl10n" data-jsl10n="wikimedia-org-wmf">
                This is the non-profit organization that hosts all Wikimedia
                projects and supports communities all over the world who create
                and curate freely accessible content.
              </span>
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
              <div
                className="donate-title jsl10n"
                data-jsl10n="wikimedia-org-donate-title"
              >
                Your donation protects the human right to free and open
                knowledge for everyone.
              </div>
              <div>
                <a
                  href="https://donate.wikimedia.org/?wmf_medium=wikimediaPortal&amp;wmf_campaign=wikimediaPortalBtn&amp;wmf_source=wikimediaPortalBtn"
                  className="pure-button-primary-progressive donate-button"
                >
                  <span className="donate-emoji"></span>
                  <span
                    className="jsl10n"
                    data-jsl10n="wikimedia-org-donate-button"
                  >
                    Donate now
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact">
        <div className="contact-block">
          <div className="contact-wrapper">
            <span
              className="contact-title jsl10n"
              data-jsl10n="wikimedia-org-contact"
            >
              Contact
            </span>
          </div>
          <span
            className="contact-desc jsl10n"
            data-jsl10n="wikimedia-org-contact-text"
          >
            You can contact me here
          </span>
        </div>
        <div className="contact-block">
          <a href="https://wikimediafoundation.org/about/contact/">
            <span className="jsl10n" data-jsl10n="wikimedia-org-contact-link">
              Contact
            </span>
          </a>
        </div>
      </div>
    </body>
  );
};

export default MyPage;
