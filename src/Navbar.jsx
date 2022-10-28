
import Ducky from "./ducky.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="max-width">
        <div className="logo">
          <img src={Ducky} style={{width: 30, height: 30}} alt="icon"/>
        </div>
        <ul className="navlist">
          <li className="nav-items"><a href="#Home">Home</a></li>
          <li className="nav-items"><a href="#About">About</a></li>
          <li className="nav-items"><a href="#Experience">Experience</a></li>
          <li className="nav-items"><a href="#Projects">Projects</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
