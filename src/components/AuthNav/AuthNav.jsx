import { NavLink } from "react-router-dom";
import CustomNavLink from "../CustomNavLink/CustomNavLink";

export default function AuthNav() {
  return (
    <div>
      <CustomNavLink to="/register">Register</CustomNavLink>
      <CustomNavLink to="/login">Login</CustomNavLink>
    </div>
  );
}
