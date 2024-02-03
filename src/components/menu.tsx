import logo from "../assets/logo.png";
import icon from "../assets/icon.png";
import Navigation from "./navigation";

function Menu() {
  return (
    <section className="menu">
        <a href="/">
            <img src={logo} className="logo" alt="SymptoCraft Logo" />
            <img src={icon} className="icon" alt="SymptoCraft Icon" />
        </a>
        <Navigation />
    </section>
  );
}

export default Menu;