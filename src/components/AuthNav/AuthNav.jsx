import CustomNavLink from "../CustomNavLink/CustomNavLink";
import style from "./AuthNav.module.css";

export default function AuthNav() {
  return (
    <div className={style.AuthNav}>
      <CustomNavLink to="/register">Register</CustomNavLink>
      <CustomNavLink to="/login">Login</CustomNavLink>
    </div>
  );
}
