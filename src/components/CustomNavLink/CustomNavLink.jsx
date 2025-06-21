import { NavLink } from "react-router-dom";

export default function CustomNavLink({ to, children }) {
  return (
    <NavLink
      to={to}
      style={({ isActive }) => ({
        color: isActive ? "blue" : "white",
        marginRight: "15px",
      })}
    >
      {children}
    </NavLink>
  );
}
