export default function Projects() {
  return (
    <div className="container" id="projects">
      <div className="sectionLabel">
        <span>Projects</span>
      </div>

      <div className="row featuredProject">
        <div className="col">
          <div className="projectInfo ">
            <div className="projectLabel">Featured Project</div>
            <div className="projectTitle">WEATHER APP</div>
            <div className="projectDescription">
              The Weather app using OpenWeather API provides real-time weather
              information for a user-specified location. The app uses the
              OpenWeather API to retrieve weather data such as temperature,
              humidity, wind speed, and weather conditions.
            </div>
            <br></br>
            <div className="tools">
              <div className="tool">HTML</div>
              <div className="tool">CSS</div>
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
            src="https://placedog.net/500"
            alt="project image"
          />
        </div>
      </div>

      <div className="row featuredProject">
        <div className="col">
          <div className="projectInfo ">
            <div className="projectLabel">Featured Project</div>
            <div className="projectTitle">WEATHER APP</div>
            <div className="projectDescription">
              The Weather app using OpenWeather API provides real-time weather
              information for a user-specified location. The app uses the
              OpenWeather API to retrieve weather data such as temperature,
              humidity, wind speed, and weather conditions.
            </div>
            <br></br>
            <div className="tools">
              <div className="tool">HTML</div>
              <div className="tool">CSS</div>
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
            src="https://placedog.net/500"
            alt="project image"
          />
        </div>
      </div>
    </div>
  );
}
