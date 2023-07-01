const Projects = () => {
  return (
    <section id="projects">
      <h2 className="projects__title">Work</h2>
      <div className="projects__container">
        <div className="project__card left">
          {/* <img
            src="../images/NCNewsAPIScreenshot.jpg"
            alt="NC News Back End"
            className="project__image"
          /> */}
          <h3>NC News Back End</h3>
          <p className="project__subtext">
            <em>
              PSQL | JavaScript | Express | Supertest | Jest | Heroku-hosted
            </em>
            <br />
            An API produced to display news articles with comments, votes and
            ability to post new comments.
          </p>
          <hr />
          <p className="project__subtext">
            <a
              className="project-link"
              href="https://github.com/Poonam-raj/nc-news-api"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Github
            </a>
            <br />
            <a
              className="project-link"
              href="https://poonam-nc-news.herokuapp.com/api"
              target="_blank"
              rel="noopener noreferrer"
            >
              View API
            </a>
          </p>
        </div>
        <div className="project__card right">
          {/* <img
            src="../images/NCNewsReactApp.jpg"
            alt="NC News Front End"
            className="project__image"
          /> */}
          <h3>NC News Front End</h3>
          <p className="project__subtext">
            <em>JS | HTML | CSS | React</em>
            <br />A CRUD-dy React app to display articles, allow voting, posting
            of comments and filtering of topic views. Utilising the NC News Back
            End.
          </p>
          <hr />
          <p className="project__subtext">
            <a
              className="project-link"
              href="https://github.com/Poonam-raj/nc-news"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Github
            </a>
            <br />
            <a
              className="project-link"
              href="https://poonams-nc-news.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View App
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
