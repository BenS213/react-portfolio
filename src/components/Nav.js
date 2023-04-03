export default function Nav() {
  var scrollTrigger = 60;

  window.onscroll = function () {
    // We add pageYOffset for compatibility with IE.
    if (
      window.scrollY >= scrollTrigger ||
      window.pageYOffset >= scrollTrigger
    ) {
      document.getElementById("nav").classList.add('inverted');
    } else {
      document.getElementById("nav").classList.remove('inverted');
    }
  };

  return (
    <nav className="sticky-top" id="nav">
      <div className="navLinks">
        <a href="#aboutMe" className="link">
          ABOUT
        </a>
        <a href="#projects" className="link">
          PROJECTS
        </a>
        <a href="#contactMe" className="link">
          CONTACT
        </a>
        <a
          href="https://docs.google.com/document/d/e/2PACX-1vRrkZV1JZ0R_CUqPRAUwMuZ_DLYnNek_tXnfwcP6jBMbC7YuAIxG_QT4IpHy2HcaYSF2NQSb0Ve1cAv/pub"
          className="link"
          target="_blank"
          rel="noreferrer"
        >
          RESUME
        </a>
      </div>
    </nav>
  );
}
