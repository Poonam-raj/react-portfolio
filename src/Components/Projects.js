const Projects = () => {
  return (
    <section class="projects__section" id="projects">
      <h2 class="projects__title">Work</h2>
      <div class="projects__container">
        <div class="project__card">
          <img
            src="../images/NCNewsAPIScreenshot.jpg"
            alt="NC News Back End"
            class="project__image"
          />
          <h3>NC News Back End</h3>
          <p class="project__subtext">
            <em>
              PSQL | JavaScript | Express | Supertest | Jest | Heroku-hosted
            </em>
            <br />
            An API produced to display news articles with comments, votes and
            ability to post new comments.
          </p>
          <hr />
          <p class="project__subtext">
            <a
              class="project-link"
              href="https://github.com/Poonam-raj/nc-news-api"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Github
            </a>
            <br />
            <a
              class="project-link"
              href="https://poonam-nc-news.herokuapp.com/api"
              target="_blank"
              rel="noopener noreferrer"
            >
              View API
            </a>
          </p>
        </div>
        <div class="project__card">
          <img
            src="../images/NCNewsReactApp.jpg"
            alt="NC News Front End"
            class="project__image"
          />
          <h3>NC News Front End</h3>
          <p class="project__subtext">
            <em>JS | HTML | CSS | React</em>
            <br />A CRUD-dy React app to display articles, allow voting, posting
            of comments and filtering of topic views. Utilising the NC News Back
            End.
          </p>
          <hr />
          <p class="project__subtext">
            <a
              class="project-link"
              href="https://github.com/Poonam-raj/nc-news"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Github
            </a>
            <br />
            <a
              class="project-link"
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
