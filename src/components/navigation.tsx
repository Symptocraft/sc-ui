import { Link } from "react-router-dom";
import Icons from "../utils/icons";

function Navigation() {
  return (
    <nav>
      <Link to="/">{Icons.Dashboard} Dashboard</Link>
      <Link to="/appointments">{Icons.Calendar} Appointments</Link>
      <Link to="/diagnoses">{Icons.Disease} Diagnoses</Link>
      <Link to="/symptoms">{Icons.Symptoms} Symptoms</Link>
      <Link to="/symptom-occurences">{Icons.Occurence} Occurences</Link>
      <Link to="/settings">{Icons.Settings} Settings</Link>
      <Link to="/profile">{Icons.User} Profile</Link>
      <Link to="/logout">{Icons.Lock} Logout</Link>
    </nav>
  );
}

export default Navigation;