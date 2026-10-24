import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <a href="/" className="navbar-logo">
        MATANMI LAWAL
      </a>

      <div className="navbar-links">
        <a href="#about">About</a>
        <a href="#expertise">Expertise</a>
        <a href="#experience">Experience</a>
      </div>

      <a href="#contact" className="navbar-contact">
        Let's talk <span>↗</span>
      </a>
    </nav>
  );
}

export default Navbar;