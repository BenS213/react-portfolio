export default function Projects() {
  return (
    <div className="container" id="projects">
      <div className="sectionLabel">
        <span>Projects</span>
      </div>

      {/* project 1 */}
      <div className="row featuredProject">
        <div className="col">
          <div className="projectInfo ">
            <div className="projectLabel">Featured Project</div>
            <div className="projectTitle">Personal Mixologist</div>
            <div className="projectDescription">
              This application allows a user to search for a cocktail and
              returns a list of cocktails and their recipes. Additionally, this
              site displays an image alongside the cocktail. Unsplash and Ninja
              Cocktail apis were used in this application. This project was made
              by Ben Schoenbachler, Landen Blankenship, and Madeline Ramos.
            </div>
            <br></br>
            <div className="tools">
              <div className="tool">HTML</div>
              <div className="tool">CSS</div>
            </div>
            <div className="links fa-2x">
              <a href="https://github.com/BenS213/personal-mixologist">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://bens213.github.io/personal-mixologist/">
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <img
            className="projectImg img-fluid "
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3F-IbVOe-sSJViuXS_BTJZZ5wXQbGO0otcIrJgvzYcg&usqp=CAU&ec=48665701"
            alt="project image"
          />
        </div>
      </div>

      {/* Project 2 */}
      <div className="row featuredProject">
        <div className="col">
          <div className="projectInfo ">
            <div className="projectLabel">Featured Project</div>
            <div className="projectTitle">Tic Tac</div>
            <div className="projectDescription">
              Tik-Tak is a full stack web application that aims to allow users
              to post their or their friends' hot takes on various topics,
              including sports, relationships, and much more. Users can interact
              with other users' posts, and are able to leave comments and
              upvote/downvote. The project was make by David Dowell, Jonathan
              Gibbings, Ben Schoenbachler, and Gus Lascola.
            </div>
            <br></br>
            <div className="tools">
              <div className="tool">SQL</div>
              <div className="tool">html</div>
              <div className="tool">css</div>
              <div className="tool">NodeJS</div>
            </div>
            <div className="links fa-2x">
              <a href="https://github.com/DavidDowell/project-2">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://p2tiktak.herokuapp.com/">
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <img
            className="projectImg img-fluid tictac"
            src="https://github.com/DavidDowell/project-2/raw/main/public/images/tiktak.png"
            alt="project image"
          />
        </div>
      </div>

      {/* project 3 */}
      <div className="row featuredProject">
        <div className="col">
          <div className="projectInfo ">
            <div className="projectLabel">Featured Project</div>
            <div className="projectTitle">tic-tac-toe</div>
            <div className="projectDescription">
              The Weather app using OpenWeather API provides real-time weather
              information for a user-specified location. The app uses the
              OpenWeather API to retrieve weather data such as temperature,
              humidity, wind speed, and weather conditions.
            </div>
            <br></br>
            <div className="tools">
              <div className="tool">html</div>
              <div className="tool">css</div>
              <div className="tool">OpenWeather</div>
            </div>
            <div className="links fa-2x">
              <a href="https://github.com/BenS213/weather-dashboard">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://bens213.github.io/weather-dashboard/">
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <img
            className="projectImg img-fluid "
            src="data:image/png;base64,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"
            alt="project image"
          />
        </div>
      </div>
    </div>
  );
}
