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
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel
              quasi labore ea, animi rerum eveniet sapiente quae exercitationem
              inventore illum accusamus cupiditate nemo saepe nisi, totam qui
              expedita minima recusandae laboriosam molestias consequatur dolore
              facere perspiciatis. Minus voluptates optio enim nostrum est
              facere, libero ut, facilis quos magni autem placeat.
            </div>
            <br></br>
            <div className="tools">
              <div className="tool">HTML</div>
              <div className="tool">CSS</div>
              <div className="tool">OpenWeather</div>
            </div>
            <div className="links fa-2x">
              <i className="fa-brands fa-github"></i>
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
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
