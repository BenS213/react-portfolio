import './App.css';
import 'bootstrap';

function App() {
  return (
    <div>
    <nav>
      <div class="navLinks">
        <a class="link">ABOUT ME</a>
        <a class="link">PROJECTS</a>
        <a class="link">CONTACT ME</a>
        <a class="link">RESUME</a>
      </div>
    </nav>
    
        <div class="container hero">
    
          <div class="heroName">HELLO, MY NAME IS BEN</div>
          <div class="heroTitle">I am a web developer</div>
          <br></br>
          <div class="heroInfo">I'm a full stack developer who is passionate about creating clean and ethical websites.</div>
        </div>

      <div class="container ">
        <div class="sectionLabel">
          <span>Projects</span>
        </div>

        <div class="row featuredProject">
          <div class="col">
            <div class="projectInfo ">
              <div class="projectLabel heroName">Featured Project</div>
              <div class="projectTitle">WEATHER APP</div>
              <div class="projectDescription">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel quasi labore ea, animi rerum eveniet sapiente quae exercitationem inventore illum accusamus cupiditate nemo saepe nisi, totam qui expedita minima recusandae laboriosam molestias consequatur dolore facere perspiciatis. Minus voluptates optio enim nostrum est facere, libero ut, facilis quos magni autem placeat.</div>
              <br></br>
                <div class="tools">
                  <div class="tool">HTML</div>
                  <div class="tool">CSS</div>
                  <div class="tool">OpenWeatherAPI</div>
                </div>
                <div class="links fa-2x">
                  <i class="fa-brands fa-github"></i>
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </div>
              </div>

          </div>
          <div class="col">
            <img class="projectImg img-fluid " src="https://placedog.net/500" alt="project image"/>
          </div>
        </div>
      </div><div class="aboutMe container">

        <div class="sectionLabel">
          <span>About Me</span>
        </div>
        <div class="row">


          <p class="col">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ab
            delectus error asperiores velit alias quas, omnis, quidem repellendus
            provident ipsa vitae maiores corrupti, inventore mollitia adipisci.
            Tenetur sapiente quas accusantium sunt velit quae rerum, iusto quisquam
            animi fugit doloribus voluptatem, vitae, consequuntur at expedita fugiat
            tempore nesciunt! Odit, excepturi.
          </p>
          <div class="skills col">
            <div class="skillsTitle">SKILLS</div>


            <a href="https://www.w3schools.com/html/" target="_blank" class="skill">
              <i class="fa-brands fa-html5 fa-5x"></i>
              <p>HTML</p>
            </a>
            <a href="https://www.w3schools.com/css/" target="_blank" class="skill">
              <i class="fa-brands fa-css3-alt fa-5x"></i>
              <p>CSS</p>
            </a>
            <a href="https://www.w3schools.com/js/" target="_blank" class="skill">
              <i class="fa-brands fa-square-js fa-5x"></i>
              <p>Javascript</p>
            </a>
            <a href="https://www.w3schools.com/sql/" target="_blank" class="skill">
              <img src="./assets/icons/sql-server.png" alt="sql icon"></img>
                <p>SQL</p>
              </a>
            <a href="https://www.mongodb.com/home" target="_blank" class="skill">
              <img src="./assets/icons/MongoDB_Logomark_SpringGreen.png" alt="mongoDB icon"></img>
                <p>MongoDB</p>
            </a>
            <a href="https://beta.reactjs.org/" target="_blank" class="skill">
              <i class="fa-brands fa-react fa-5x"></i>
              <p>React</p>
            </a>
            <a href="https://www.w3schools.com/nodejs/nodejs_intro.asp" target="_blank" class="skill">
              <i class="fa-brands fa-node-js fa-5x"></i>
              <p>Node JS</p>
            </a>
            <a href="https://expressjs.com/" target="_blank" class="skill">
              <img src="./assets/icons/express.js.png" alt="express icon"></img>
                <p>Express.JS</p>
              </a>


          </div>
        </div>
      </div><div class="contactMe container">
        <div class="sectionLabel">
          <span>Contact Me</span>
        </div>

        <div>Email: Bschoenbachler@gmail.com</div>
        <div>Github: https://github.com/BenS213</div>
        <div>LinkedIn: https://www.linkedin.com/in/benjamin-schoenbachler-01b134a3/</div>

      </div>
      </div>
  );
}

export default App;
