import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Home, Info, BookOpen, Bell, Phone, Video, Music } from "lucide-react"; // Import icons
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sermonsOpen, setSermonsOpen] = useState(false);

  return (
    <nav className="navbar">
      <h1 className="navbar-logo">
        <BookOpen /> Campus Church
      </h1>
      <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        <Menu />
      </button>
      <ul className={isOpen ? "nav-links open" : "nav-links"}>
        <li><Link to="/" onClick={() => setIsOpen(false)}><Home /> Home</Link></li>
        <li><Link to="/about" onClick={() => setIsOpen(false)}><Info /> About</Link></li>

        <li 
          className="dropdown"
          onMouseEnter={() => setSermonsOpen(true)}
          onMouseLeave={() => setSermonsOpen(false)}
        >
          <button className="dropbtn"><BookOpen /> Sermons ▾</button>
          {sermonsOpen && (
            <ul className="dropdown-menu">
              <li><Link to="/sermons/video" onClick={() => { setIsOpen(false); setSermonsOpen(false); }}><Video /> Video Sermons</Link></li>
              <li><Link to="/sermons/audio" onClick={() => { setIsOpen(false); setSermonsOpen(false); }}><Music /> Audio Sermons</Link></li>
            </ul>
          )}
        </li>

        <li><Link to="/notices" onClick={() => setIsOpen(false)}><Bell /> Notices</Link></li>
        <li><Link to="/contact" onClick={() => setIsOpen(false)}><Phone /> Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
